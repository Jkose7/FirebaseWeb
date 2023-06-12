// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN_c5bgRsl52Z9Jd1shNpEqS-dq4PytAI",
  authDomain: "mobile-first-practice.firebaseapp.com",
  projectId: "mobile-first-practice",
  storageBucket: "mobile-first-practice.appspot.com",
  messagingSenderId: "110603131339",
  appId: "1:110603131339:web:22278b48bf9963b818be4e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


