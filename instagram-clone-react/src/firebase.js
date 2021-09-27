import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyABCNj3pG4Dq3iCMg0NC28AVIraRDZXsZc",
    authDomain: "instagram-clone-react-1fd85.firebaseapp.com",
    projectId: "instagram-clone-react-1fd85",
    storageBucket: "instagram-clone-react-1fd85.appspot.com",
    messagingSenderId: "913883425337",
    appId: "1:913883425337:web:f823ac52b017643ebbbbe8",
    measurementId: "G-H97YDFFDGC"
});

const db = firebaseapp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

  //export default db;
