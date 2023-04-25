import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseconfig';

// function errorMessages(errorCode, errorEmailMessage, errorPassMessage) {
//   if (errorCode === 'auth/email-already-in-use') {
//     errorEmailMessage.innerHTML = 'Este correo ya ha sido registrado';
//   } else if (errorCode === 'auth/weak-password') {
//     errorPassMessage.innerHTML = 'Escribe una contraseña más larga';
//   } else if (errorCode === 'auth/invalid-email') {
//     errorEmailMessage.innerHTML = 'Escribe un correo valido';
//   } else if (errorCode === 'auth/missing-password') {
//     errorPassMessage.innerHTML = 'Escribe una contraseña valida';
//   }
// }

export function authFunction(signup, userEmail, userPassword, onAuthSuccess) {
  // const errorEmailMessage = document.querySelector('#errorEmailMessage');
  // const errorPassMessage = document.querySelector('#errorPassMessage');
  signup.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = userEmail.value;
    const password = userPassword.value;
    // errorEmailMessage.innerHTML = '';
    // errorPassMessage.innerHTML = '';

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
        console.log(user);
        onAuthSuccess('/verification');
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        // errorMessages(errorCode, errorEmailMessage, errorPassMessage);
      });
  });
}
