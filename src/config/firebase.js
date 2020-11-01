import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyD-GGRGPdePQ5QTgPjgoR1Nd8MD72uEt4U",
    authDomain: "react1-6d12c.firebaseapp.com",
    databaseURL: "https://react1-6d12c.firebaseio.com",
    projectId: "react1-6d12c",
    storageBucket: "react1-6d12c.appspot.com",
    messagingSenderId: "693803219112",
    appId: "1:693803219112:web:35418ffa5570a385df2a9d",
    measurementId: "G-Z7F5BSGM0H"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);