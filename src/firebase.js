import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUpszgAiyV_2R8hCaS0pFX9uTTfMFvQAk",
  authDomain: "jpneons.firebaseapp.com",
  projectId: "jpneons",
  storageBucket: "jpneons.appspot.com",
  messagingSenderId: "9335153294",
  appId: "1:9335153294:web:5aca489d56dfaec8829fdf",
  measurementId: "G-6V4F0J49HK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };
