/**
 * @jest-environment jsdom
 */

import { signIn } from '../src/templates/signIn.js';
import { errorMessages } from '../src/lib/index.js';
import { googleLogin, login } from '../src/lib/config/auth.js';

jest.mock('../src/lib/config/auth', () => ({
  googleLogin: jest.fn(),
  login: jest.fn(),
}));

describe('signIn', () => {
  it('signIn debe ser una función', () => {
    expect(typeof signIn).toBe('function');
  });

  it('existe un botón de ingresar', () => {
    const container = document.createElement('section');
    container.append(signIn());
    const btnLogin = container.querySelector('.btnLogin');
    expect(btnLogin).not.toBe(null);
  });

  it('debe navegar a SignUp al hacer click en el boton de Registrarse', () => {
    const onNavigate = jest.fn();
    const signInSection = signIn(onNavigate);
    const signUpLink = signInSection.querySelector('#link-signUp');
    signUpLink.click();
    expect(onNavigate).toHaveBeenCalledWith('/signup');
  });

  it('login debe ser llamado cuando se hace click en el botón de Ingresar', () => {
    const container = document.createElement('section');
    container.append(signIn());
    const btnLogin = container.querySelector('.btnLogin');
    const emailInput = container.querySelector('#loginUserEmail');
    const passwordInput = container.querySelector('#loginUserPassword');
    login.mockResolvedValueOnce();
    emailInput.value = 'test@example.com';
    passwordInput.value = 'password';
    // Click the register button
    btnLogin.click();
    // Check that authFunction was called with the correct arguments
    expect(login).toHaveBeenCalledWith(
      emailInput.value,
      passwordInput.value,
    );
  });
  it('debe navegar a Home al hacer click en el boton cerrar', () => {
    const onNavigate = jest.fn();
    const signInSection = signIn(onNavigate);
    const closeBtn = signInSection.querySelector('.close-signIn');

    // Click the close button
    closeBtn.click();

    // Check that onNavigate was called with the correct argument
    expect(onNavigate).toHaveBeenCalledWith('/');
  });
  it('googleLogin debe ser llamado cuando se hace click en el botón de Google', () => {
    const onNavigate = jest.fn();
    const signInSection = signIn(onNavigate);
    const btnGoogle = signInSection.querySelector('.btnGoogle');
    btnGoogle.click();
    expect(googleLogin).toHaveBeenCalledWith(onNavigate);
  });
});

describe('errorMessages', () => {
  it('Muestra el mensaje de error correcto para auth/email-already-in-use.', () => {
    const emailErrorMessage = document.createElement('span');
    const passwordErrorMessage = document.createElement('span');

    errorMessages('auth/email-already-in-use', emailErrorMessage, passwordErrorMessage);

    expect(emailErrorMessage.textContent).toBe('Este correo ya ha sido registrado');
    expect(passwordErrorMessage.textContent).toBe('');
  });

  it('Muestra el mensaje de error correcto para auth/weak-password.', () => {
    const emailErrorMessage = document.createElement('span');
    const passwordErrorMessage = document.createElement('span');

    errorMessages('auth/weak-password', emailErrorMessage, passwordErrorMessage);

    expect(emailErrorMessage.textContent).toBe('');
    expect(passwordErrorMessage.textContent).toBe('Escribe una contraseña más larga');
  });
});
