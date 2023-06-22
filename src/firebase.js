import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-RJVcGr36uhs-jGDwnpg_wbvFs-oLVHg",
  authDomain: "react-doc-7b5f4.firebaseapp.com",
  projectId: "react-doc-7b5f4",
  storageBucket: "react-doc-7b5f4.appspot.com",
  messagingSenderId: "449679563023",
  appId: "1:449679563023:web:d2ade4b7260d580e1f467a",
};

const firedb = firebase.initializeApp(firebaseConfig);

export default firedb.database().ref();
