import { signInWithPopup } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js"

const facebookBtn = document.querySelector('#logIn-with-facebook')

facebookBtn.addEventListener('click', async () =>{
    const provider = new FacebookAuthProvider();
    try {
        const dataUserFacebook = await signInWithPopup(auth, provider)
        console.log(dataUserFacebook)

    } catch (error){
        if(error.code === "auth/user-not-found"){
            showMessage("The user not found", "error")
        }else if(error.code === "auth/wrong-password"){
            showMessage("The password is invalid", "error")            
        }else if(error.code === "auth/account-exists-with-different-credential"){
            showMessage("The account exists with differents credentials")
        }else{
            showMessage(error.message, "error")
        }
        console.log(error) 
    }
})