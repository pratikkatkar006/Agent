// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyA1e2w2-tJn1Fe_m1cluLGtH0MMWHDK8L8",
//     authDomain: "project-f3cc2.firebaseapp.com",
//     databaseURL: "https://project-f3cc2-default-rtdb.firebaseio.com",
//     projectId: "project-f3cc2",
//     storageBucket: "project-f3cc2.appspot.com",
//     messagingSenderId: "401937021009",
//     appId: "1:401937021009:web:bffd2a65ea2de7f5f22070"
//   };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { database, auth, provider };


// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase , ref, push, set } from "firebase/database";
import { getStorage } from "firebase/storage"; // Add this import

const firebaseConfig = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app); // Initialize storage

export { auth, database, storage , ref, push, set }; // Add storage to exports






