import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBKJJ1PH7C2aDdeLqnS1Y5FYRTNKJJpBto",
    authDomain: "portfolio-55f1d.firebaseapp.com",
    projectId: "portfolio-55f1d",
    storageBucket: "portfolio-55f1d.appspot.com",
    messagingSenderId: "12666009479",
    appId: "1:12666009479:web:b535241508417fe2db8522",
    measurementId: "G-NXCWYY4FCC"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);