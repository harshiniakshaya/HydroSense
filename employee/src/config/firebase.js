import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from  "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBpn4rB1DDacu86jC-UmBXbK49Fkq6Doz0",
  authDomain: "water-flow-54850.firebaseapp.com",
  databaseURL: "https://water-flow-54850-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "water-flow-54850",
  storageBucket: "water-flow-54850.appspot.com",
  messagingSenderId: "1004117718807",
  appId: "1:1004117718807:web:fc06e6ea8611bb71bfe952",
  measurementId: "G-5TR33H5PBP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
