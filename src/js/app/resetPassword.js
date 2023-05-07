import { sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js"
import { modal } from './modalWindows.js'

const emailInput = document.querySelector('.recover-form')
const newPassword = document.querySelector('.window-newpassword')
const recoverPassword = document.querySelector('.window-recoverpassword');

emailInput.addEventListener('submit', async(e) =>{
    e.preventDefault();
    const emailSend = emailInput['emailRegistered'].value
    try{
        const resetPassword = await sendPasswordResetEmail(auth, emailSend)
        console.log(resetPassword)
        newPassword.classList.toggle('modal-show');
        recoverPassword.classList.remove('modal-show');
        //window.location.href = './prueba.html';
    }catch(error){
        if(error.code === 'auth/user-not-found'){
            showMessage('User not found', "error")
        }else if(error.code === 'auth/invalid-email', "error"){
            showMessage('Invalid email')
        }else{
            console.log(error.message)
        }
    }
})

