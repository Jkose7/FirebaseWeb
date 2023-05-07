import './firebase.js'
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './firebase.js'

onAuthStateChanged(auth, async(user)=>{
    if(user){
        window.location.href = './main.html';
    }else{
        window.location.href = './auth.html';
    }
})
