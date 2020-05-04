import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyD3ZrYNm2t9DN__oWt94NtFyEniHKi_GQs",
    authDomain: "expensify-77a6e.firebaseapp.com",
    databaseURL: "https://expensify-77a6e.firebaseio.com",
    projectId: "expensify-77a6e",
    storageBucket: "expensify-77a6e.appspot.com",
    messagingSenderId: "769206677967",
    appId: "1:769206677967:web:0018d70848b897e11f62ba"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, db, googleAuthProvider } 

















        

 




 
