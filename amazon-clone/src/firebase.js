import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDnSJ1nOdicumZ3EeAlwF3YgPucIPiJS9M",
    authDomain: "challenge-adf09.firebaseapp.com",
    databaseURL: "https://challenge-adf09.firebaseio.com",
    projectId: "challenge-adf09",
    storageBucket: "challenge-adf09.appspot.com",
    messagingSenderId: "379513530647",
    appId: "1:379513530647:web:a105ecdf9119810439ef52"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};