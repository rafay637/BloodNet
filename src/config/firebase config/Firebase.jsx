// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-kDQEOvb5z2nXlETaCkc8eIYc1NufNqo",
    authDomain: "hackathon-3ef85.firebaseapp.com",
    projectId: "hackathon-3ef85",
    storageBucket: "hackathon-3ef85.appspot.com",
    messagingSenderId: "1017473653291",
    appId: "1:1017473653291:web:7376b9eccadb569f9d686e",
    measurementId: "G-YC43WR8GCY"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);
// const analytics = getAnalytics(firebase_app);

export { firebase_app, auth };