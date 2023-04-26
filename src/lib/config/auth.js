/* eslint-disable no-unused-vars */
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
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
        console.log('its inside');

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

const provider = new GoogleAuthProvider();
export const googleLogin = (onNavigate) => {
  console.log('ENTRO');
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      onNavigate('/wall');
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};
