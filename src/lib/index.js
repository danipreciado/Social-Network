export function errorMessages(errorCode, emailErrorMessage, passwordErrorMessage) {
  if (errorCode === 'auth/email-already-in-use') {
    emailErrorMessage.textContent = 'Este correo ya ha sido registrado';
  } else if (errorCode === 'auth/weak-password') {
    passwordErrorMessage.textContent = 'Escribe una contraseña más larga';
  } else if (errorCode === 'auth/invalid-email') {
    emailErrorMessage.textContent = 'Escribe un correo valido';
  } else if (errorCode === 'auth/missing-password') {
    passwordErrorMessage.textContent = 'Escribe una contraseña valida';
  } else if (errorCode === 'auth/user-not-found') {
    emailErrorMessage.textContent = 'Email no registrado';
  } else if (errorCode === 'auth/wrong-password') {
    passwordErrorMessage.textContent = 'Contraseña incorrecta';
  }
}
