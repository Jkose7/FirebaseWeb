import { signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js"

const logOut = document.querySelector('.log-out')

logOut.addEventListener('click', (e)=>{
    e.preventDefault();
    signOut(auth);
    showMessage("Logged out")
})