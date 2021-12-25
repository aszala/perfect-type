import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, sendEmailVerification  } from "firebase/auth";
import { emptyUser, redirectHome, cleanErrorMessage } from "./utils";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

let app;
let analytics;
let auth;
let db;

const sessionStorage = window.sessionStorage;

const USER_STORAGE_ID = "user";
const USER_COLLECTION = "users";
const LEADERBOARD_COLLECTION = "leaderboard";
const USERINFO_COLLECTION = "userinfo";

const LEADERBOARD_SIZE = 5;

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
    const sUser = sessionStorage.getItem(USER_STORAGE_ID);

    if (sUser == null) {
        return null;
    }

    if (sUser.length > 0) {
        return JSON.parse(sUser);
    }

    return null;
}

export function isLoggedIn() {
    return getUser() != null;
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

        sessionStorage.setItem(USER_STORAGE_ID, JSON.stringify(userCreds.user));

        return { success: true };
    } catch(e) {
        return { message: cleanErrorMessage(e.message), success: false };
    }
}

export async function createDocument(collection, docID, data) {
    const docRef = doc(db, collection, docID);
	await setDoc(docRef, data);

	return data;
}

export async function logoutUser() {
    try {
        await signOut(auth);
    } catch (e) {
        console.log(e)
    }

    sessionStorage.setItem(USER_STORAGE_ID, "");
    redirectHome();
}


export async function getLeaderboard(board) {
    const docRef = doc(db, LEADERBOARD_COLLECTION, board);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    return data
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
        for (let i = 0; i < res.data.length; i++) {
            if (!updateToLeaderboard) {
                let elt = JSON.parse(res.data[i]);
                if (score > elt.score) {
                    let today = new Date(); 
                    let dd = today.getDate(); 
                    let mm = today.getMonth()+1; 
                    let yyyy = today.getFullYear(); 
                    data.push(JSON.stringify({user: user.email.substr(0, user.email.indexOf("@")), score: score, date: `${mm}/${dd}/${yyyy}`}))
                    updateToLeaderboard = true
                } 
            }
            if (!(updateToLeaderboard && i == res.data.length - 1)) data.push(res.data[i])
        }
        if (res.data.length < LEADERBOARD_SIZE) {
            updateToLeaderboard = true;
            let today = new Date(); 
            let dd = today.getDate(); 
            let mm = today.getMonth()+1; 
            let yyyy = today.getFullYear(); 
            data.push(JSON.stringify({user: user.email.substr(0, user.email.indexOf("@")), score: score, date: `${mm}/${dd}/${yyyy}`}))
        }
        if (updateToLeaderboard) {
            const docRef = doc(db, LEADERBOARD_COLLECTION, leadboardType);
            updateDoc(docRef, {data});
        }
    })
}