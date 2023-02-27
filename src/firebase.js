import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBoxbNBIOGGZdXkNizGU50S3jHrZROy4yw",
  authDomain: "fb-munara.firebaseapp.com",
  projectId: "fb-munara",
  storageBucket: "fb-munara.appspot.com",
  messagingSenderId: "449709258803",
  appId: "1:449709258803:web:4d447ce387ce1e252a0b46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const auth = getAuth(app);