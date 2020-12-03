import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCY0HmRigKstyfXZj8XPbL3sdvEijru998",
    authDomain: "water-log-70e3a.firebaseapp.com",
    databaseURL: "https://water-log-70e3a.firebaseio.com",
    projectId: "water-log-70e3a",
    storageBucket: "water-log-70e3a.appspot.com",
    messagingSenderId: "248924992087",
    appId: "1:248924992087:web:7073a3dda9234ca34ea912"
};

firebase.initializeApp(firebaseConfig);

export default firebase;