import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCiHYCghLYDwF9Qj7M7l2Ed3eWcDJVNSg4",
  authDomain: "simple-online-shop-dfe40.firebaseapp.com",
  projectId: "simple-online-shop-dfe40",
  storageBucket: "simple-online-shop-dfe40.appspot.com",
  messagingSenderId: "782504788875",
  appId: "1:782504788875:web:e895a8acd1829541bde58e",
  measurementId: "G-P3TQPYMEKX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { app, auth, db };
