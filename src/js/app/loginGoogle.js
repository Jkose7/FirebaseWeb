import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js"

const googleBtn = document.querySelector('#logIn-with-google')

googleBtn.addEventListener('click', async ()=>{
    const provider = new GoogleAuthProvider();
    try {
        const dataUserGoogle = await signInWithPopup(auth, provider)
        console.log(dataUserGoogle)

    } catch (error){
        showMessage(error.message,"error")
        console.log(error)
    }
})