import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, deleteUser } from "firebase/auth";
import { emptyUser, redirectHome } from "./utils";

let app;
let analytics;
let auth;
let db;

const sessionStorage = window.sessionStorage;

const USER_STORAGE_ID = "user";
const USER_COLLECTION = "users";
const LEADERBOARD_COLLECTION = "leaderboard";

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
        sessionStorage.setItem(USER_STORAGE_ID, JSON.stringify(userCreds.user));

        let userData = Object.assign({}, emptyUser);
        userData.uid = userCreds.user.uid;
        userData.email = userCreds.user.email;

        await createDocument(USER_COLLECTION, userData.uid, userData);
        
        return userCreds.user;
    } catch(e) {
        console.log(e);
        return null;
    }
}

export async function signUserIn(email, password) {
    try {
        const userCreds = await signInWithEmailAndPassword(auth, email, password);
        sessionStorage.setItem(USER_STORAGE_ID, JSON.stringify(userCreds.user));

        return userCreds.user;
    } catch(e) {
        return null
    }
}

export async function createDocument(collection, docID, data) {
    const docRef = doc(db, collection, docID);
	await setDoc(docRef, data);

	return data;
}

export async function logoutUser() {
    try {
        await signOut();
    } catch (e) {
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