import { authFunction2 } from './mocks';

jest.mock('../src/lib/config/auth.js');

// Definir los valores para el email y la contraseña
// const email = 'test@example.com';
// const password = 'test123';

// Crear el test usando Jest
test('authFunction2 resolves with a user object with valid parameters', async () => {
  expect.assertions(1);
  try {
    const user = await authFunction2({ value: 'email@email.com' }, { value: 'password123' });
    expect(user).toBeDefined();
  } catch (error) {
    throw new Error('The authFunction2 function should not reject with valid parameters');
  }
});
test('createUserWithEmailAndPassword throws an error with invalid email and password', async () => {
  expect.assertions(1);
  try {
    // Llamar a la función authFunction2 con un email y una contraseña inválidos
    await authFunction2('email', 'pass');

    // Si la función no devuelve ningún error, lanzar una excepción
    // eslint-disable-next-line max-len
    // throw new Error('The createUserWithEmailAndPassword function should throw an error with invalid email and password');
  } catch (error) {
    // Comprobar que el mensaje de error es el esperado
    expect(error.message).toEqual('Firebase: Error (auth/admin-restricted-operation).');
  }
});

// const authFunction = (email, password) => new Promise((resolve, reject) => {
//   if (!email || !password) {
//     PromiseRejectionEvent('error');
//   }
//   resolve('Bien!');
// });

// test('authFunction', async () => {
//   await (createaccount('email', '')).resolves.toBe('error');
// });
