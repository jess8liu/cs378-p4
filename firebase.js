// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-yQMV6PkkaNFv0Po1M84x6-fsArhKyQM",
  authDomain: "cs378-p4-7fff3.firebaseapp.com",
  databaseURL: "https://cs378-p4-7fff3-default-rtdb.firebaseio.com",
  projectId: "cs378-p4-7fff3",
  storageBucket: "cs378-p4-7fff3.appspot.com",
  messagingSenderId: "1096310045139",
  appId: "1:1096310045139:web:cb91f6e4d36f58804c9726",
  measurementId: "G-4613K9GCCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);