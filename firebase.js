// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXcAoWdCM8yz7HSQkn2nufOWnnAl-hBX0",
  authDomain: "fir-auth-10f10.firebaseapp.com",
  projectId: "fir-auth-10f10",
  storageBucket: "fir-auth-10f10.appspot.com",
  messagingSenderId: "870140403714",
  appId: "1:870140403714:web:8671595bfd1317338c471b"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };