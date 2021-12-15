// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, deleteUser } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let app;
let analytics;
let auth;

export function initFirebase() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
}