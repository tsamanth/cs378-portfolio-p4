// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxcSotNN5JLy2E2_QCrZulcKMmY9-43Es",
  authDomain: "cs378-portfolio-p4-bb8a3.firebaseapp.com",
  projectId: "cs378-portfolio-p4-bb8a3",
  storageBucket: "cs378-portfolio-p4-bb8a3.appspot.com",
  messagingSenderId: "1071268990430",
  appId: "1:1071268990430:web:317f827e89ef2dbadf214f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);