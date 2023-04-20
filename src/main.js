// Este es el punto de entrada de tu aplicacion
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './lib/config/firebaseconfig';
import router from './lib/routes';
import signup from './templates/signUp';

// const form = document.querySelector('.signUp-form');
const parser = new DOMParser();
const temp = parser.parseFromString(signup, 'text/html').documentElement;
const form = temp.querySelector('.signUp-form');
const userEmail = temp.querySelector('#userEmail');
const userPassword = temp.querySelector('#userPassword');
// const signupSection = document.querySelector('.signUp-section');
// const btnSignUp = document.querySelector('.btnSignUp');
// const span = document.getElementsByClassName('close')[0];
// const verificationSection = document.querySelector('.verification-section');
// const homeSection = document.querySelector('.home-section');

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

// function showModal() {
//   signupSection.style.display = 'block';
// }
// btnSignUp.addEventListener('click', showModal);
// function hiddenModal() {
//   signupSection.style.display = 'none';
// }
// span.addEventListener('click', hiddenModal);

// function verificationDisplay() {
//   homeSection.style.display = 'none';
//   signupSection.style.display = 'none';
//   verificationSection.style.display = 'flex';
// }

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = userEmail.value;
  const password = userPassword.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      /* console.log(userCredential); */
      // verificationDisplay();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
});
