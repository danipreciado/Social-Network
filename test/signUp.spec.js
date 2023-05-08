/**
 * @jest-environment jsdom
 */

import { signup } from '../src/templates/signUp';

describe('signup', () => {
  let container;
  const onNavigate = jest.fn();
  const registerUserWithEmailAndPassword = jest.fn();

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('displays error message for invalid email', () => {
    container.appendChild(signup(onNavigate));

    const emailInput = container.querySelector('#userEmail');
    const passwordInput = container.querySelector('#userPassword');
    const userInput = container.querySelector('#user-input');
    const registerBtn = container.querySelector('.btnRegister');

    emailInput.value = 'invalid email';
    passwordInput.value = 'password';
    userInput.value = 'username';

    registerBtn.click();

    expect(registerUserWithEmailAndPassword).toHaveBeenCalledWith(
      emailInput,
      passwordInput,
      userInput,
    );
  });
});
