
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()


const firebaseAuth = getAuth(app)
const firebaseStore = getFirestore(app)

export {
  firebaseAuth,
  firebaseStore,
  app
}

export const fireBaseErrors = {
  "Firebase: Error (auth/email-already-in-use).": "A user with this email already exist",
  "Firebase: Error (auth/user-not-found).": "Invalid email or password",
  "Firebase: Error (auth/wrong-password).": "Invalid email or password",
}