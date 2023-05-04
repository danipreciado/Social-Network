/**
 * @jest-environment jsdom
 */

import { home } from '../src/templates/home.js';
import { signup } from '../src/templates/signUp.js';
import { signIn } from '../src/templates/signIn.js';
import { authFunction, googleLogin, login } from '../src/lib/config/auth.js';

jest.mock('../src/lib/config/auth', () => ({
  authFunction: jest.fn(),
  googleLogin: jest.fn(),
  login: jest.fn(),
}));

describe('home', () => {
  it('home debe ser una función', () => {
    expect(typeof home).toBe('function');
  });

  it('existe un botón signup', () => {
    const container = document.createElement('section');
    container.append(home());
    const btnSignUp = container.querySelector('.btnSignUp');
    expect(btnSignUp).not.toBe(null);
  });

  test('navega a la sección signUp', () => {
    const container = document.createElement('section');
    const onNavigate = jest.fn();
    container.append(home(onNavigate));
    const btnSignUp = container.querySelector('.btnSignUp');
    btnSignUp.click();
    expect(onNavigate).toHaveBeenCalledWith('/signup');
  });

  it('existe un botón signin', () => {
    const container = document.createElement('section');
    container.append(home());
    const bottonLogin = container.querySelector('.btnSignIn');
    expect(bottonLogin).not.toBe(null);
  });

  test('navega a la sección signIn', () => {
    const container = document.createElement('section');
    const onNavigate = jest.fn();
    container.append(home(onNavigate));
    const btnSignIn = container.querySelector('.btnSignIn');
    btnSignIn.click();
    expect(onNavigate).toHaveBeenCalledWith('/signin');
  });
});

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

  it('authFunction debe ser llamado cuando se hace click en el botón de registrarse', () => {
    const onNavigate = jest.fn();
    const signupSection = signup(onNavigate);
    const btnRegister = signupSection.querySelector('.btnRegister');
    const emailInput = signupSection.querySelector('#userEmail');
    const passwordInput = signupSection.querySelector('#userPassword');
    const emailError = signupSection.querySelector('#errorEmailMessage');
    const passwordError = signupSection.querySelector('#errorPassMessage');
    const userInput = signupSection.querySelector('#user-input');

    // Click the register button
    btnRegister.click();

    // Check that authFunction was called with the correct arguments
    expect(authFunction).toHaveBeenCalledWith(
      emailInput,
      passwordInput,
      onNavigate,
      emailError,
      passwordError,
      userInput,
    );
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
    const onNavigate = jest.fn();
    const signInSection = signIn(onNavigate);
    const btnLogin = signInSection.querySelector('.btnLogin');
    const emailInput = signInSection.querySelector('#loginUserEmail');
    const passwordInput = signInSection.querySelector('#loginUserPassword');
    const spanErrorEmail = signInSection.querySelector('#errorEmailMessage');
    const spanErrorPass = signInSection.querySelector('#errorPassMessage');

    // Click the register button
    btnLogin.click();
    // Check that authFunction was called with the correct arguments
    expect(login).toHaveBeenCalledWith(
      onNavigate,
      emailInput,
      passwordInput,
      spanErrorEmail,
      spanErrorPass,
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
