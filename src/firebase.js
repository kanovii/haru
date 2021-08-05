import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDlYm0tcdkvm5Tum9P9JPjlIOj-ft9BFPk",
    authDomain: "haru-796f0.firebaseapp.com",
    projectId: "haru-796f0",
    storageBucket: "haru-796f0.appspot.com",
    messagingSenderId: "528960554106",
    appId: "1:528960554106:web:9e0a2598abaadf240fe7c3"
  };
  firebase.initializeApp(firebaseConfig);
  export const authService = firebase.auth();
  export const firebaseInstance = firebase;
  export const dbService = firebase.firestore();