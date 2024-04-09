// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDL2M4uosgr6p9u2esXumESEyMolmSCdZ0",
    authDomain: "basics-of-firebase-4bd2b.firebaseapp.com",
    databaseURL: "https://basics-of-firebase-4bd2b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "basics-of-firebase-4bd2b",
    storageBucket: "basics-of-firebase-4bd2b.appspot.com",
    messagingSenderId: "388250151466",
    appId: "1:388250151466:web:4f3f564265864322923153",
    measurementId: "G-7WFN5J6FF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export{ app };

