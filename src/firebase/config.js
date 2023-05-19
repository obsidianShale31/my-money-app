import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmDAakvBLMgHZQJHpNW2HhjmynRQ3GFe8",
    authDomain: "mymoney-bd7d9.firebaseapp.com",
    projectId: "mymoney-bd7d9",
    storageBucket: "mymoney-bd7d9.appspot.com",
    messagingSenderId: "682614731713",
    appId: "1:682614731713:web:3e87839ae639c474fdb540"
  };

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp }