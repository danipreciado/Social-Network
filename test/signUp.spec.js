/**
 * @jest-environment jsdom
 */

import { signup } from '../src/templates/signUp.js';
import { googleLogin, registerUserWithEmailAndPassword } from '../src/lib/config/auth.js';
import { errorMessages } from '../src/lib/index.js';

jest.mock('../src/lib/config/auth', () => ({
  googleLogin: jest.fn(),
  login: jest.fn(),
  registerUserWithEmailAndPassword: jest.fn(),
}));

describe('signup', () => {
  it('signup debe ser una función', () => {
    expect(typeof signup).toBe('function');
  });
  it('existe un botón de registrarse', () => {
    const container = document.createElement('section');
    container.append(signup());
    const btnRegister = container.querySelector('.btnRegister');
    expect(btnRegister).not.toBe(null);
  });
  it('debe navegar a SignIn al hacer click en el boton de ingresar', () => {
    const onNavigate = jest.fn();
    const signupSection = signup(onNavigate);
    const signInLink = signupSection.querySelector('#link-signIn');
    signInLink.click();
    expect(onNavigate).toHaveBeenCalledWith('/signin');
  });
  it('should call registerUserWithEmailAndPassword when register button is clicked', () => {
    const container = document.createElement('section');
    container.append(signup());
    const registerBtn = container.querySelector('.btnRegister');
    const emailInput = container.querySelector('#userEmail');
    const passwordInput = container.querySelector('#userPassword');
    const input = container.querySelector('#user-input');
    registerUserWithEmailAndPassword.mockResolvedValueOnce();
    emailInput.value = 'test@example.com';
    passwordInput.value = 'password';
    input.value = 'user';
    registerBtn.click();
    // eslint-disable-next-line max-len
    expect(registerUserWithEmailAndPassword).toHaveBeenCalledWith(emailInput.value, passwordInput.value, input.value);
  });
  it('debe navegar a Home al hacer click en el boton cerrar', () => {
    const onNavigate = jest.fn();
    const signupSection = signup(onNavigate);
    const closeBtn = signupSection.querySelector('.close-signUp');
    // Click the close button
    closeBtn.click();
    // Check that onNavigate was called with the correct argument
    expect(onNavigate).toHaveBeenCalledWith('/');
  });
  it('googleLogin debe ser llamado cuando se hace click en el botón de Google', () => {
    const onNavigate = jest.fn();
    const signupSection = signup(onNavigate);
    const btnGoogle = signupSection.querySelector('.btnGoogle');
    btnGoogle.click();
    expect(googleLogin).toHaveBeenCalledWith(onNavigate);
  });
});
describe('errorMessages', () => {
  it('displays the correct error message for auth/email-already-in-use', () => {
    const emailErrorMessage = document.createElement('span');
    const passwordErrorMessage = document.createElement('span');
    errorMessages('auth/email-already-in-use', emailErrorMessage, passwordErrorMessage);
    expect(emailErrorMessage.textContent).toBe('Este correo ya ha sido registrado');
    expect(passwordErrorMessage.textContent).toBe('');
  });
  it('displays the correct error message for auth/weak-password', () => {
    const emailErrorMessage = document.createElement('span');
    const passwordErrorMessage = document.createElement('span');
    errorMessages('auth/weak-password', emailErrorMessage, passwordErrorMessage);
    expect(emailErrorMessage.textContent).toBe('');
    expect(passwordErrorMessage.textContent).toBe('Escribe una contraseña más larga');
  });
  it('displays the correct error message for auth/invalid-email', () => {
    const emailErrorMessage = document.createElement('span');
    const passwordErrorMessage = document.createElement('span');
    errorMessages('auth/invalid-email', emailErrorMessage, passwordErrorMessage);
    expect(emailErrorMessage.textContent).toBe('Escribe un correo valido');
    expect(passwordErrorMessage.textContent).toBe('');
  });
  it('displays the correct error message for auth/missing-password', () => {
    const emailErrorMessage = document.createElement('span');
    const passwordErrorMessage = document.createElement('span');
    errorMessages('auth/missing-password', emailErrorMessage, passwordErrorMessage);
    expect(emailErrorMessage.textContent).toBe('');
    expect(passwordErrorMessage.textContent).toBe('Escribe una contraseña valida');
  });
  it('displays the correct error message for auth/user-not-found', () => {
    const emailErrorMessage = document.createElement('span');
    const passwordErrorMessage = document.createElement('span');
    errorMessages('auth/user-not-found', emailErrorMessage, passwordErrorMessage);
    expect(emailErrorMessage.textContent).toBe('Email no registrado');
    expect(passwordErrorMessage.textContent).toBe('');
  });
  it('displays the correct error message for auth/wrong-password', () => {
    const emailErrorMessage = document.createElement('span');
    const passwordErrorMessage = document.createElement('span');
    errorMessages('auth/wrong-password', emailErrorMessage, passwordErrorMessage);
    expect(emailErrorMessage.textContent).toBe('');
    expect(passwordErrorMessage.textContent).toBe('Contraseña incorrecta');
  });
});
it('googleLogin debe ser llamado cuando se hace click en el botón de Google', () => {
  const onNavigate = jest.fn();
  const signupSection = signup(onNavigate);
  const btnGoogle = signupSection.querySelector('.btnGoogle');
  btnGoogle.click();
  expect(googleLogin).toHaveBeenCalledWith(onNavigate);
});
