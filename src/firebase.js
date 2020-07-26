import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDy39LpwupprUdn0Ck_5_K2Gyh3kW1lwtk",
    authDomain: "react-appcrud.firebaseapp.com",
    databaseURL: "https://react-appcrud.firebaseio.com",
    projectId: "react-appcrud",
    storageBucket: "react-appcrud.appspot.com",
    messagingSenderId: "352769802403",
    appId: "1:352769802403:web:426cfd2fa404cb0989bf16",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();