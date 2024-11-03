
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAkKllMDLXynjHbpvJu_KGr_6bGNzn1sIU",
  authDomain: "todo-app-19-08-2024.firebaseapp.com",
  projectId: "todo-app-19-08-2024",
  storageBucket: "todo-app-19-08-2024.appspot.com",
  messagingSenderId: "770406799178",
  appId: "1:770406799178:web:6e403b19f41335b66953b3",
  measurementId: "G-DE6NJD80NG"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const firestore = getFirestore(app)