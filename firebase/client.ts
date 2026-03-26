import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDVSk1oKEZJpVHWeX1iSfOgybqiX1SmpVQ",
    authDomain: "prepwise-e45c8.firebaseapp.com",
    projectId: "prepwise-e45c8",
    storageBucket: "prepwise-e45c8.firebasestorage.app",
    messagingSenderId: "1030623648779",
    appId: "1:1030623648779:web:aa301ad712368cd175bb0e",
    measurementId: "G-NT78WS1R5R"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);