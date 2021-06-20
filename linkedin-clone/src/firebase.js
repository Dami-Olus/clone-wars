import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBvJ8_5o6Pslq2cs8K3jxtJnQ9B757o0dw",
  authDomain: "linkedin-clone-9e664.firebaseapp.com",
  projectId: "linkedin-clone-9e664",
  storageBucket: "linkedin-clone-9e664.appspot.com",
  messagingSenderId: "960423072217",
  appId: "1:960423072217:web:370876aa1b86560904c9c8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };