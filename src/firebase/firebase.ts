
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  projectId: process.env.FIREBASE_projectId,
  storageBucket: process.env.FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
  appId: process.env.FIREBASE_appId
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const firebaseAuth = getAuth(app)
const firebaseStore = getFirestore(app)

export {
  firebaseAuth,
  firebaseStore,
  app
}