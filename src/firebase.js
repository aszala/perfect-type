import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, sendEmailVerification  } from "firebase/auth";
import { emptyUser, redirectHome, cleanErrorMessage } from "./utils";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { tick } from "svelte";
import md5 from "md5"
import SecureLS from "secure-ls";

let app;
let analytics;
let auth;
let db;

const sessionStorage = new SecureLS();

const USER_STORAGE_ID = "user";
const USER_TOKEN_ID = "token";
const USER_COLLECTION = "users";
const LEADERBOARD_COLLECTION = "leaderboard";
const USERINFO_COLLECTION = "userinfo";
const DIARY = "diary";

const LEADERBOARD_SIZE = 10;

const defaultUserInfoObject = {
    easyGamesFailed: 0,
    easyGamesWon: 0,
    easyLPM: 0,
    easyWPM: 0,
    hardGamesFailed: 0,
    hardGamesWon: 0,
    hardLPM: 0,
    hardWPM: 0,
    mediumGamesFailed: 0,
    mediumGamesWon: 0,
    mediumLPM: 0,
    mediumWPM: 0,
    profilePhoto: 0,
};

export function initFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyAcfFLGAnLbwIUCfyCYgayBl2oPvbu5RFQ",
        authDomain: "perfect-type.firebaseapp.com",
        projectId: "perfect-type",
        storageBucket: "perfect-type.appspot.com",
        messagingSenderId: "358376646912",
        appId: "1:358376646912:web:d750e4f6970556a8072be5",
        measurementId: "G-MDGFNKMNEC"
    };

    // Initialize Firebase
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    auth = getAuth();
    db = getFirestore();

    const appCheck = initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider("6LfUF8EdAAAAAIsY52KJ4t-SzYybu1gZRYNk-Zce"),
        isTokenAutoRefreshEnabled: true
    });
}

export function getUser() {
    const sUser = sessionStorage.get(USER_STORAGE_ID);

    if (sUser == null) {
        return null;
    }

    if (sUser.length > 0) {
        return JSON.parse(sUser);
    }

    return null;
}

export function getToken() {
    const sToken = sessionStorage.get(USER_TOKEN_ID);

    if (sToken == null) {
        return null;
    }

    if (sToken.length > 0) {
        return sToken;
    }

    return null;
}


export async function isLoggedIn() {

    if (getUser() == null) return false;
    let validated = await getValidation(getUser().uid)
    if (!validated) await logoutUser();
    return getUser() != null && validated;
}

export async function createUser(email, password) {
    try {
	    const userCreds = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCreds.user);
        await signOut(auth);
        
        let userData = Object.assign({}, emptyUser);
        userData.uid = userCreds.user.uid;
        userData.email = userCreds.user.email;

        await createDocument(USER_COLLECTION, userData.uid, userData);
        await createDocument(USERINFO_COLLECTION, userData.uid, defaultUserInfoObject)
        
        return { success: true };
    } catch(e) {
        return { message: cleanErrorMessage(e.message), success: false };
    }
}

export function sendVerifcationEmailAsync(user) {
    sendEmailVerification(user);
}

export async function signUserIn(email, password) {
    try {
        const userCreds = await signInWithEmailAndPassword(auth, email, password);

        if (!userCreds.user.emailVerified) {    
            await signOut(auth);

            return { data: userCreds.user, success: false };
        }
        sessionStorage.set(USER_STORAGE_ID, JSON.stringify(userCreds.user));
        await setValidation(getUser().uid);
        return { success: true };
    } catch(e) {
        return { success: false };
    }
}

export async function createDocument(collection, docID, data) {
    const docRef = doc(db, collection, docID);
	await setDoc(docRef, data);

	return data;
}

export async function logoutUser() {
    try {
        await createDocument(DIARY, getUser().uid, {token: ""});
        await signOut(auth);
    } catch (e) {
        console.log(e)
    }

    redirectHome();
    sessionStorage.set(USER_STORAGE_ID, "");
    sessionStorage.set(USER_TOKEN_ID, "")
}


export async function getLeaderboard(board) {
    const docRef = doc(db, LEADERBOARD_COLLECTION, board);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    let res = []

    for await (let item of data.data) {
        item = JSON.parse(item);
        let profile = await getUserProfile(item.uid);
        if (profile.profilePhoto != null) item['profilePhoto'] = profile.profilePhoto;
        else item['profilePhoto'] = 0;
        res.push(item)
    }
    return res;
}


export async function getUserProfile(userID) {
    const docRef = doc(db, USERINFO_COLLECTION, userID);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    return data
}

export async function updateUserStats(userID, changedStats) {
    const docRef = doc(db, USERINFO_COLLECTION, userID);
    const res = await updateDoc(docRef, changedStats);
}

export async function getUserStats(userID, stat) {
    const docRef = doc(db, USERINFO_COLLECTION, userID);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data()[stat];
    return data;
}

export async function getOnWinStats(userID, neededGameWin, neededLPM, neededWPM) {
    const docRef = doc(db, USERINFO_COLLECTION, userID);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    const res = {};
    res[neededGameWin] = data[neededGameWin];
    res[neededLPM] = data[neededLPM];
    res[neededWPM] = data[neededWPM];
    return res
}

export async function updateToLeaderboard(user, leadboardType, score) {
    getLeaderboard(leadboardType).then( res => {
        const data = []
        let updateToLeaderboard = false;
        let today = new Date(); 
        let dd = today.getDate(); 
        let mm = today.getMonth()+1; 
        let yyyy = today.getFullYear(); 
        let thisUserName = user.email.substr(0, user.email.indexOf("@"));
        let thisUID = user.uid;
        if (res.length == 0) {
            data.push(JSON.stringify({user: thisUserName, uid: thisUID, score: score, date: `${mm}/${dd}/${yyyy}`}))
            updateToLeaderboard = true;
        } else if (res.length < LEADERBOARD_SIZE) {
            let inserted = false;
            for (let i = 0; i < res.length; i++) {

                if (!inserted && score > res[i].score) {
                    inserted = true;
                    updateToLeaderboard = true;
                    data.push(JSON.stringify({user: thisUserName, uid: thisUID, score: score, date: `${mm}/${dd}/${yyyy}`}))
                }
                
                if (!inserted) {
                    if (res[i].user === thisUserName) inserted = true;
                    data.push(JSON.stringify(res[i]))
                } else {
                    if (res[i].user !== thisUserName) data.push(JSON.stringify(res[i]))
                }
            }
            if (!inserted) {
                updateToLeaderboard = true;
                data.push(JSON.stringify({user: thisUserName, uid: thisUID, score: score, date: `${mm}/${dd}/${yyyy}`}))
            }
        } else {
            let inserted = false;
            for (let i = 0; i < res.length; i++) {
                if (!inserted && score > res[i].score) {
                    inserted = true;
                    updateToLeaderboard = true;
                    data.push(JSON.stringify({user: thisUserName, uid: thisUID, score: score, date: `${mm}/${dd}/${yyyy}`}))
                }
                
                if (!inserted) {
                    if (res[i].user === thisUserName) inserted = true;
                    data.push(JSON.stringify(res[i]))
                } else {
                    if (res[i].user !== thisUserName && i != res.length - 1) data.push(JSON.stringify(res[i]))
                }
            }
        }
        

        if (updateToLeaderboard) {
            const docRef = doc(db, LEADERBOARD_COLLECTION, leadboardType);
            updateDoc(docRef, {data});
        }
    })
}


export async function getValidation(expectedUser) {
    const docRef = doc(db, DIARY, expectedUser);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    if (data.token == "") return false
    if (getToken() === data.token) {
        await setValidation(expectedUser);
        return true;
    }
    return false;
}

export async function setValidation(expectedUser) {
    let newToken = md5(JSON.stringify(getUser()) + Math.floor(Math.random() * 1000000000));
    await createDocument(DIARY, expectedUser, {token: newToken});
    insertToken(newToken);
}

export function insertToken(token) {
    sessionStorage.set(USER_TOKEN_ID, token);
}

export async function getValidationSafe() {
    await tick();
    await getValidation();
}
