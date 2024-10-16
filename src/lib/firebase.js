import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "discord-java-fcd1e.firebaseapp.com",
  projectId: "discord-java-fcd1e",
  storageBucket: "discord-java-fcd1e.appspot.com",
  messagingSenderId: "446967954544",
  appId: "1:446967954544:web:883557cdf3fe77aeb348b5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()