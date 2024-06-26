import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

//Using firebase services

export const onSignIn = async ({ email, password }) => {
  try {
    let res = await signInWithEmailAndPassword(auth, email, password);

    return res;
  } catch (error) {}
};

export const logOut = () => {
  signOut(auth);
};

export const signUp = async ({ email, password }) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);

    return res;
  } catch (error) {}
};

export const forgotPassword = async (email) => {
  let res = await sendPasswordResetEmail(auth, email);
  return res;
};
