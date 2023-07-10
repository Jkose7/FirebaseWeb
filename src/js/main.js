import './app/firebase.js'
import './app/logout.js'
//import '../../index.js'
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './app/firebase.js'
const content = document.querySelector('.hide-content')


onAuthStateChanged(auth, async(user)=>{
  try{
    const userToken = user.accessToken;
    if(userToken){
      content.classList.remove('hide-content')
      console.log(user)
    }else{
      content.classList.add('hide-content')
    }
  }catch(error){
    console.log(error)
    window.location.href = './auth.html'
  }
})






