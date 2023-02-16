// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAn5GUpQW8hXvBST8FDlwXD5M8RP79MhN8",
    authDomain: "plumber-agency.firebaseapp.com",
    projectId: "plumber-agency",
    storageBucket: "plumber-agency.appspot.com",
    messagingSenderId: "861492585729",
    appId: "1:861492585729:web:593fb90d795bac3c0b6700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;