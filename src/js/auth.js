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

const forms = document.querySelector('.forms')
onAuthStateChanged(auth, async(user)=>{
    if(user){
        forms.classList.add('hide-content')
        window.location.href = './main.html';
    }else{
        forms.classList.remove('hide-content')
        console.log(user)
    }
})
