import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js"

const signupForm = document.querySelector('.sign-up-form')

signupForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const signUpEmail = signupForm['signUp-email'].value
    const signUpPassword = signupForm['signUp-password'].value  
    try {
        const userDataSingUp = await createUserWithEmailAndPassword(auth,signUpEmail,signUpPassword);
        console.log(userDataSingUp)
        console.log(signUpEmail, signUpPassword)
        showMessage("Welcome user"+ " "+ userDataSingUp.user.email);

    } catch (error) {
        console.log(error.code)
        if(error.code === 'auth/email-already-in-use'){
            showMessage('The email is already in use', 'error')
        }else if(error.code === 'auth/invalid-email'){
            showMessage('The email is invalid', 'error')
        }else if(error.code === 'auth/weak-password'){
            showMessage('The password is to weak', 'error')
        }else if(error.code){
            showMessage(error.code, 'error')
        }
    }
    signupForm.reset();
   
})
