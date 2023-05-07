const openSignUp = document.querySelector('.sign-up');
const signUp = document.querySelector('.window-signup');

var openLogIn = document.querySelector('.log-in');
const openLogIn2 = document.querySelector('.log-in2')
const logIn = document.querySelector('.window-login');

const openRecoverPassword = document.querySelector('.recover-password');
const recoverPassword = document.querySelector('.window-recoverpassword');


export function modal(click, add, remove, title){
    click.addEventListener('click', (e)=>{
        e.preventDefault();
        add.classList.toggle('modal-show');
        remove.classList.remove('modal-show');
        document.title = title
    });
}

modal(openSignUp,signUp,logIn,"Sign Up to Beuty")
modal(openLogIn,logIn,signUp,"Log in to Beuty")
modal(openLogIn2,logIn,recoverPassword,"Log in to Beuty")
modal(openRecoverPassword,recoverPassword,logIn,"Recover Password")


