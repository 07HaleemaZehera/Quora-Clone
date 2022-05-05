// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import{} from 'firebase/auth'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1jOsfhz1BD6QCdGpbnqVMy_IAZd9V8Qo",
  authDomain: "quora-clone-ef83f.firebaseapp.com",
  projectId: "quora-clone-ef83f",
  storageBucket: "quora-clone-ef83f.appspot.com",
  messagingSenderId: "637402659475",
  appId: "1:637402659475:web:7e6a3b5eade9950078eb66",
  measurementId: "G-DZ6FT411BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider()
// const analytics = getAnalytics(app);

export {auth, provider};