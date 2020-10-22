import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAoYHnQRJ8Zwv66WOdhVa5pek755lH9ruo",
    authDomain: "fir-6ef8b.firebaseapp.com",
    databaseURL: "https://fir-6ef8b.firebaseio.com",
    projectId: "fir-6ef8b",
    storageBucket: "fir-6ef8b.appspot.com",
    messagingSenderId: "1025574579542",
    appId: "1:1025574579542:web:ebe2654fc68a5597593af7",
    measurementId: "G-9FMYN9WKXK"
  };


  const fire = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = fire.firestore();

  export {db,auth};
