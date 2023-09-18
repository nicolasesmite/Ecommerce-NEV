import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJu-hmno4smLO26TLwYX3TQFFcdzdyAfA",
  authDomain: "jakemate-6e892.firebaseapp.com",
  projectId: "jakemate-6e892",
  storageBucket: "jakemate-6e892.appspot.com",
  messagingSenderId: "117673521408",
  appId: "1:117673521408:web:9afb6a329bfacb87d743e5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const db = getFirestore(app);

//Using firebase services

export const onSignIn = async ({ email, password }) => {
  try {
    let res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

let googleProvider = new GoogleAuthProvider();

export const loginGoogle = async () => {
  const res = await signInWithPopup(auth, googleProvider);
};

export const logOut = () => {
  signOut(auth);
};

export const signUp = async ({ email, password }) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(res);
  }
};
