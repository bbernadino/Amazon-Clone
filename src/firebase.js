import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALYzRj60r_zqg8xJuHScyQBfq4l3HII2g",
  authDomain: "clone-feb1e.firebaseapp.com",
  databaseURL: "https://clone-feb1e.firebaseio.com",
  projectId: "clone-feb1e",
  storageBucket: "clone-feb1e.appspot.com",
  messagingSenderId: "546893131510",
  appId: "1:546893131510:web:b2e2b6a7a488fc5bf106d7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
