/**
 * @jest-environment jsdom
 */
import { home } from '../src/templates/home';
import { signup } from '../src/templates/signUp';

// authFunction = jest.fn();

// const mockAuthFunction = jest.fn();
// jest.mock('../src/lib/config/auth', () => ({
//   authFunction: mockAuthFunction,
// }));

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

  it('el botón de registrarse debe llamar a la authFunction cuando se hace click', async () => {
    const authFunction = jest.fn();
    const onNavigate = jest.fn();
    const signupSection = signup();
    const registerBtn = signupSection.querySelector('.btnRegister');
    const emailInput = signupSection.querySelector('#userEmail');
    const passwordInput = signupSection.querySelector('#userPassword');
    const emailError = signupSection.querySelector('#errorEmailMessage');
    const passwordError = signupSection.querySelector('#errorPassMessage');
    registerBtn.click();
    expect(authFunction).toHaveBeenCalledWith(
      emailInput,
      passwordInput,
      onNavigate,
      emailError,
      passwordError,
    );
  });
  //   mockAuthFunction.mockResolvedValueOnce();
  //   registerBtn.click();
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   expect(mockAuthFunction).toHaveBeenCalledWith(
  //     emailInput.value,
  //     passwordInput.value,
  //     onNavigate,
  //     emailError,
  //     passwordError,
  //   );
  //   mockAuthFunction.mockRestore();
  // });

  it('debe navegar a SignUp al hacer click en el boton de ingresar', () => {
    const onNavigate = jest.fn();
    const signupSection = signup(onNavigate);
    const signInLink = signupSection.querySelector('#link-signUp');
    signInLink.click();
    expect(onNavigate).toHaveBeenCalledWith('/signin');
  });
});
