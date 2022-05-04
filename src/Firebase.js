import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAxjq9ny30snhp80pmJh0IuTU5JfqQ1wqY",
    authDomain: "shop24h-38f29.firebaseapp.com",
    projectId: "shop24h-38f29",
    storageBucket: "shop24h-38f29.appspot.com",
    messagingSenderId: "801069171692",
    appId: "1:801069171692:web:5834fe659af5c96b7b36c9",
    measurementId: "G-KV5H2YFDX7"
  }
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();