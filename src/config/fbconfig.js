import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlKUrMJTCh-xniJOfbuX5gxB0mPrutAFo",
  authDomain: "standardiziedtest.firebaseapp.com",
  databaseURL: "https://standardiziedtest.firebaseio.com",
  projectId: "standardiziedtest",
  storageBucket: "standardiziedtest.appspot.com",
  messagingSenderId: "801288573854",
  appId: "1:801288573854:web:0c7dbbc7905c4e68873c8f",
  measurementId: "G-FC4X48K8W9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;
