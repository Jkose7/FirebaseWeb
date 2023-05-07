import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const loginForm = document.querySelector('.log-in-form')
const textRecover = document.querySelector('.text-recover')

loginForm.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const loginEmail = loginForm['logIn-email'].value;
    const loginPassword = loginForm['logIn-password'].value;
    try{
        const userDataLogIn = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        console.log(userDataLogIn)
        showMessage("Welcome to Beuty" + " " + userDataLogIn.user.email)
        //window.location.href = './index.html'
        loginForm.reset();
    }catch(error){
        if(error.code === "auth/user-not-found"){
            showMessage("The user not found", "error")
        }else if(error.code === "auth/wrong-password"){
            showMessage("The password is invalid", "error")
            textRecover.style.color = "red";
        }else{
            showMessage(error.message, "error")
        }
        console.log(error)     
    }
})
