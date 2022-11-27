// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8tAQh2ULARg0-RWxnSRaZKb9EqS5pjtI",
  authDomain: "inotes-clone.firebaseapp.com",
  projectId: "inotes-clone",
  storageBucket: "inotes-clone.appspot.com",
  messagingSenderId: "368136877790",
  appId: "1:368136877790:web:66a8dc80eb1cc7c9fe344f",
  measurementId: "G-97QBGYWE42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
