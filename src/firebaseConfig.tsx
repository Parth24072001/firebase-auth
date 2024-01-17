import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQ1AJPB-ji-J8_tVNop5iMSOCFBodcLno",
  authDomain: "demoo-e6a26.firebaseapp.com",
  projectId: "demoo-e6a26",
  storageBucket: "demoo-e6a26.appspot.com",
  messagingSenderId: "704120862197",
  appId: "1:704120862197:web:87506de6a0c214ce7a5cbc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
