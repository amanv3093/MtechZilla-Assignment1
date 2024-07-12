import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFJkD5ai0OkQZZO2Rr_ykHT4cJnrcSzGs",
  authDomain: "mtechzilla-1eeeb.firebaseapp.com",
  projectId: "mtechzilla-1eeeb",
  storageBucket: "mtechzilla-1eeeb.appspot.com",
  messagingSenderId: "24998252573",
  appId: "1:24998252573:web:637661bb98e390a5e4f6f4",
  measurementId: "G-WHTVFTKMKW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
};
