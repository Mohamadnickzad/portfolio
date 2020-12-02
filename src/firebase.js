import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVOUYNSW0F8jSug9zL43_gnsMeBLNncEY",
    authDomain: "clone-f37ce.firebaseapp.com",
    databaseURL: "https://clone-f37ce.firebaseio.com",
    projectId: "clone-f37ce",
    storageBucket: "clone-f37ce.appspot.com",
    messagingSenderId: "246008530681",
    appId: "1:246008530681:web:29425a01e9af672a334428",
    measurementId: "G-Y7W3XSZRTG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth} ;