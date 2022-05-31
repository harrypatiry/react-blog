// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "react-blog-8a046.firebaseapp.com",
  projectId: "react-blog-8a046",
  storageBucket: "react-blog-8a046.appspot.com",
  messagingSenderId: "463386413750",
  appId: "1:463386413750:web:c9f669ecc389310b8fb417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();