import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC58CKKwtvpm325K3NmuuJC1rkTdHuKDhA",
  authDomain: "disney-4c89d.firebaseapp.com",
  projectId: "disney-4c89d",
  storageBucket: "disney-4c89d.appspot.com",
  messagingSenderId: "1094207592825",
  appId: "1:1094207592825:web:830a6c2eb5b497449237a8",
  measurementId: "G-VE0ZJXP89B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
