import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "loginecommerce-203b1.firebaseapp.com",
  projectId: "loginecommerce-203b1",
  storageBucket: "loginecommerce-203b1.firebasestorage.app",
  messagingSenderId: "143652938974",
  appId: "1:143652938974:web:5fbc1f9a215c7e740b4e4f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}