import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzkTZFol3R1N1EH_A3HfNB5v-nGfyDsLg",
  authDomain: "metaxolsprojects.firebaseapp.com",
  databaseURL: "https://metaxolsprojects-default-rtdb.firebaseio.com",
  projectId: "metaxolsprojects",
  storageBucket: "metaxolsprojects.appspot.com",
  messagingSenderId: "475366295461",
  appId: "1:475366295461:web:74509afa45f8b31bfaca4c"
};

const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);