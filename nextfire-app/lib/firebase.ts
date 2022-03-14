import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB4GTjsUKD-R0e5fr6A2u-XLdNoZ-DCLBA",
    authDomain: "nextfire-tutorial-d17ae.firebaseapp.com",
    projectId: "nextfire-tutorial-d17ae",
    storageBucket: "nextfire-tutorial-d17ae.appspot.com",
    messagingSenderId: "112875094532",
    appId: "1:112875094532:web:299d7348674be9ce65eb51",
    measurementId: "G-BSEKGZVH9S"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();