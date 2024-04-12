import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2dnuyk2Y1Kl9xOal_1Kp_VxyqGMvo6-M",
  authDomain: "artbongo-project.firebaseapp.com",
  projectId: "artbongo-project",
  storageBucket: "artbongo-project.appspot.com",
  messagingSenderId: "13641894930",
  appId: "1:13641894930:web:8b4fb82f1182637a7a9ccb",
  measurementId: "G-DS22927DDL"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};