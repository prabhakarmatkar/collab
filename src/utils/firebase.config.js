import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBibQ6gV1-oxFoaq7y9PxtxuQWhPbmGIFw",
    authDomain: "collab-befbd.firebaseapp.com",
    projectId: "collab-befbd",
    storageBucket: "collab-befbd.appspot.com",
    messagingSenderId: "721648574547",
    appId: "1:721648574547:web:4b454cbe9a9772dc30a6a6"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const firebaseDB = firebaseApp.firestore();
  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebaseDB,auth,googleAuthProvider}