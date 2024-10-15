// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzjkn2bSvwPnmNsivH6m4e5ykP7aNwsqw",
  authDomain: "admindashboard-794c7.firebaseapp.com",
  projectId: "admindashboard-794c7",
  storageBucket: "admindashboard-794c7.appspot.com",
  messagingSenderId: "491487297848",
  appId: "1:491487297848:web:8f6fc259e0cb93b90e01cd",
  measurementId: "G-TZVHD318SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);