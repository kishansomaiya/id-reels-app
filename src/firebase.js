// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCz3wYqN5Q8rtXwEr9E2Nxzal2-L0Drk7U",
    authDomain: "insta-reelsclone.firebaseapp.com",
    projectId: "insta-reelsclone",
    storageBucket: "insta-reelsclone.appspot.com",
    messagingSenderId: "66438591022",
    appId: "1:66438591022:web:d58b324367dabb20f765bf",
    measurementId: "G-E5K115QBBJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;