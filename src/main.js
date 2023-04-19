// Este es el punto de entrada de tu aplicacion
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './lib/config/firebaseconfig';

const userEmail = document.querySelector('#userEmail');
const userPassword = document.querySelector('#userPassword');
const form = document.querySelector('.signUp-form');
const signupSection= document.querySelector('.signUp-section');
const btnSignUp = document.querySelector('.btnSignUp');
const span = document.getElementsByClassName('close')[0];
const verificationSection = document.querySelector('.verification-section');
const homeSection = document.querySelector('.home-section');



btnSignUp.addEventListener('click', showModal)
function showModal(){
  signupSection.style.display='block'
  
};
span.addEventListener('click', hiddenModal)
function hiddenModal(){
  signupSection.style.display='none';
};

function verificationDisplay(){
  homeSection.style.display='none'
  signupSection.style.display='none';
  verificationSection.style.display='flex';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = userEmail.value;
  const password = userPassword.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      /* console.log(userCredential); */
      verificationDisplay();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
 
});
