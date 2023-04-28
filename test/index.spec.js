/**
 * @jest-environment jsdom
 */
import { home } from '../src/templates/home';
import { signup } from '../src/templates/signUp';

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

  it('should call the authFunction with the correct arguments when the register button is clicked', async () => {
    // Definir los mocks y las variables necesarias
    const authFunction = jest.fn(() => Promise.resolve());
    const onNavigate = jest.fn();
    const signupSection = signup(authFunction);
    const registerBtn = signupSection.querySelector('.btnRegister');
    const emailInput = signupSection.querySelector('#userEmail');
    const passwordInput = signupSection.querySelector('#userPassword');
    const emailError = signupSection.querySelector('#errorEmailMessage');
    const passwordError = signupSection.querySelector('#errorPassMessage');

    // Simular los valores de entrada del usuario
    emailInput.value = 'emeeail@gmail.com';
    passwordInput.value = 'password123';

    // Simular el evento de click en el botón de registro
    registerBtn.click();

    // Comprobar que se ha llamado a authFunction con los argumentos correctos
    expect(authFunction).toHaveBeenCalledWith(
      emailInput.value,
      passwordInput.value,
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
