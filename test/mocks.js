import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../src/lib/config/firebaseconfig';

export function authFunction2(userEmail, userPassword) {
  const email = userEmail.value;
  const password = userPassword.value;

  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user)
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      throw error;
    });
}

// OTRA VERSION
// export const createaccount = (email, password) => new Promise((resolve, reject) => {
//   if (password < 6) {
//     reject(new Error('auth/weak-password'));
//   }
//   if (!email.includes('@')) {
//     reject(new Error('invalid email'));
//   }
//   resolve('Success');
// });

// export function authFunction(signup, userEmail, userPassword, onAuthSuccess) {
//   // const errorEmailMessage = document.querySelector('#errorEmailMessage');
//   // const errorPassMessage = document.querySelector('#errorPassMessage');
//   signup.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const email = userEmail.value;
//     const password = userPassword.value;
//     // errorEmailMessage.innerHTML = '';
//     // errorPassMessage.innerHTML = '';

//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         // eslint-disable-next-line no-unused-vars
//         const user = userCredential.user;
//         onAuthSuccess('/verification');
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         console.log(errorCode);
//         // errorMessages(errorCode, errorEmailMessage, errorPassMessage);
//       });
//   });
// }
