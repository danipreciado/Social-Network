// Este es el punto de entrada de tu aplicacion
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './lib/config/firebaseconfig';

/* myFunction(); */

const signUpSection = document.getElementById('signUp-section');
const form = document.createElement('form');
const labelUser = document.createElement('label');
const labelPassword = document.createElement('label');
const userEmail = document.createElement('input');
const userPassword = document.createElement('input');
const submitBtn = document.createElement('button');

userEmail.setAttribute('type', 'email');
userPassword.setAttribute('type', 'password');
labelUser.appendChild(userEmail);
labelPassword.appendChild(userPassword);
submitBtn.setAttribute('type', 'submit');

form.appendChild(labelUser);
form.appendChild(labelPassword);
form.appendChild(submitBtn);
signUpSection.appendChild(form);
signUpSection.style.display = 'flex';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = userEmail.value;
  const password = userPassword.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      /* console.log(userCredential); */
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
});
