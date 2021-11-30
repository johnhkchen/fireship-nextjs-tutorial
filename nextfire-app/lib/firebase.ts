// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4GTjsUKD-R0e5fr6A2u-XLdNoZ-DCLBA",
    authDomain: "nextfire-tutorial-d17ae.firebaseapp.com",
    projectId: "nextfire-tutorial-d17ae",
    storageBucket: "nextfire-tutorial-d17ae.appspot.com",
    messagingSenderId: "112875094532",
    appId: "1:112875094532:web:299d7348674be9ce65eb51",
    measurementId: "G-BSEKGZVH9S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);