import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0cMTLhoj6wWi1BUqR_iDXJEIq5KQlx3o",
  authDomain: "clone-9ddd0.firebaseapp.com",
  databaseURL: "https://clone-9ddd0.firebaseio.com",
  projectId: "clone-9ddd0",
  storageBucket: "clone-9ddd0.appspot.com",
  messagingSenderId: "6668594463",
  appId: "1:6668594463:web:76539fae1236e27fa6d42a",
  measurementId: "G-6EGW37TZQT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
