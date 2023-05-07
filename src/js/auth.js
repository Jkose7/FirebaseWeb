import './app/signupForm.js'
import './app/loginForm.js'
import './app/loginGoogle.js'
import './app/loginFacebook.js'
import './app/loginGithub.js'
import './app/showMessage.js'
import './app/modalWindows.js'
import './app/firebase.js'
import './app/resetPassword.js'

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './app/firebase.js'

onAuthStateChanged(auth, async(user)=>{
    if(user){
        window.location.href = './main.html';
    }else{
        console.log('false')
     }
 })
