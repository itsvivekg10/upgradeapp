import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEZJgghcYItewyLdQ9LNA5ufsGClYBUWY",
  authDomain: "login-upgrade-e3aa0.firebaseapp.com",
  projectId: "login-upgrade-e3aa0",
  storageBucket: "login-upgrade-e3aa0.appspot.com",
  messagingSenderId: "845403365904",
  appId: "1:845403365904:web:806ecad82927529ab9e095",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage();
export default app;
