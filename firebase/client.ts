// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpd4oPSCuqXTcfiQub3BLK4VkJaQLQ2mE",
  authDomain: "prepwise-5c41e.firebaseapp.com",
  projectId: "prepwise-5c41e",
  storageBucket: "prepwise-5c41e.firebasestorage.app",
  messagingSenderId: "721579836605",
  appId: "1:721579836605:web:6dda0daf25a71dcd6aa3d4",
  measurementId: "G-X42Q03E08S",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
