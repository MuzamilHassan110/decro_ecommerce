import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ1pUw-FNDGq4cfIHKiRtOqnmwNO4LqvM",
  authDomain: "fir-82ae3.firebaseapp.com",
  databaseURL: "https://fir-82ae3-default-rtdb.firebaseio.com",
  projectId: "fir-82ae3",
  storageBucket: "fir-82ae3.firebasestorage.app",
  messagingSenderId: "999575156698",
  appId: "1:999575156698:web:f0b8ebaf8be43f30dd32e3"
};

const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);