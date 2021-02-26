import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDra2Sot0H30t9ePCmuSkceNbsYmNeFozc",
  authDomain: "barter-system-e88dd.firebaseapp.com",
  projectId: "barter-system-e88dd",
  storageBucket: "barter-system-e88dd.appspot.com",
  messagingSenderId: "31417074484",
  appId: "1:31417074484:web:e65ab4a2f2ec9792b61b61"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
