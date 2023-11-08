import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs4OELdUVHM0VcyV1sok650W4yVmiTmJQ",
  authDomain: "mynotes-47f36.firebaseapp.com",
  projectId: "mynotes-47f36",
  storageBucket: "mynotes-47f36.appspot.com",
  messagingSenderId: "273143821078",
  databaseURL: "https://mynotes-47f36-default-rtdb.firebaseio.com",
  appId: "1:273143821078:web:47f2ea40c0708611e95637",
  measurementId: "G-F60Y318RW8",
};
// Initialize firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//  apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     appId: process.env.REACT_APP_APP_ID,
//      measurementId: process.env.REACT_APP_MEASUREMENT_ID,
