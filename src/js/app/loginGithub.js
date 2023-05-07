import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js"

const githubBtn = document.querySelector('#logIn-with-github')

githubBtn.addEventListener('click', async () =>{
    const provider = new GithubAuthProvider();
    try {
        const dataUserGithub = await signInWithPopup(auth, provider)
        console.log(dataUserGithub)

    } catch (error){
        showMessage(error.message,"error")
        console.log(error)
    }
})