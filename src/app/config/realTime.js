import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC1HR2q_5I0GqcUWzeLCxx0stsgdSRnaNA",
  authDomain: "islandpacific-d2def.firebaseapp.com",
  projectId: "islandpacific-d2def",
  storageBucket: "islandpacific-d2def.appspot.com",
  messagingSenderId: "102300816562",
  appId: "1:102300816562:web:29de0d0c2d4b68006925ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
