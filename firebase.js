import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_L9Tkoha7_sZK-pQ7C4_YdxODnOwTOrI",
  authDomain: "scrimba-react-notes-fb092.firebaseapp.com",
  projectId: "scrimba-react-notes-fb092",
  storageBucket: "scrimba-react-notes-fb092.appspot.com",
  messagingSenderId: "873191898548",
  appId: "1:873191898548:web:51db263d67c7c932bc86e1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCOllection = collection(db, "notes");
