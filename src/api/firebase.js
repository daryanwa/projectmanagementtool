// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBghODm_pP5acfII2oxnSIYL7tClHfvneQ",
  authDomain: "projectmanagementtool-481d7.firebaseapp.com",
  databaseURL:
    "https://projectmanagementtool-481d7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projectmanagementtool-481d7",
  storageBucket: "projectmanagementtool-481d7.appspot.com",
  messagingSenderId: "930171300689",
  appId: "1:930171300689:web:9908905a881e63c4504170",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase();
