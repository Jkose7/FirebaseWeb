import './app/firebase.js'
import './app/logout.js'

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './app/firebase.js'
import { showMessage } from "./app/showMessage.js"

onAuthStateChanged(auth, async(user)=>{
    if(user){
        console.log(user)
        if(user.displayName === null){
            showMessage("Welcome to Beuty"+" "+user.email)  
        }else{
            showMessage("Welcome to Beuty"+" "+user.displayName)
        }
    }else{
        window.location.href = './auth.html';
    }
})


