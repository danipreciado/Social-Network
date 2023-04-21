import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseconfig';

export function authFunction(signup, userEmail, userPassword, onAuthSuccess) {
  signup.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = userEmail.value;
    const password = userPassword.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        onAuthSuccess('/verification');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  });
}
