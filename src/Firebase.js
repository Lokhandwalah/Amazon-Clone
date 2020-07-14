import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBEQdtSRlYws6lVCPmdGJDEXrplsNgTWxw",
  authDomain: "clone-9cf1b.firebaseapp.com",
  databaseURL: "https://clone-9cf1b.firebaseio.com",
  projectId: "clone-9cf1b",
  storageBucket: "clone-9cf1b.appspot.com",
  messagingSenderId: "872923104239",
  appId: "1:872923104239:web:7ae2afed88c04d35ed2c1a",
  measurementId: "G-Q8ZSD5ETNL"
});

// const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
