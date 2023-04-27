import { authFunction } from '../lib/config/auth';

export const signup = (onNavigate) => {
  const signupSection = document.createElement('section');
  const signupForm = document.createElement('form');
  const userLabel = document.createElement('label');
  const userInput = document.createElement('input');
  const emailLabel = document.createElement('label');
  const emailError = document.createElement('span');
  const emailInput = document.createElement('input');
  const passwordLabel = document.createElement('label');
  const passwordInput = document.createElement('input');
  const passwordError = document.createElement('span');
  const registerBtn = document.createElement('button');
  const returnArticle = document.createElement('article');
  const hasAccount = document.createElement('p');
  const hasAccountLink = document.createElement('a');

  signupSection.classList.add('signUp-section');
  signupForm.classList.add('signUp-form');
  userLabel.classList.add('form');
  emailLabel.classList.add('form');
  emailError.classList.add('errormessage');
  passwordLabel.classList.add('form');
  passwordError.classList.add('errormessage');
  registerBtn.classList.add('btnRegister');
  returnArticle.classList.add('return-home');

  userInput.setAttribute('type', 'text');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'userEmail');
  passwordInput.setAttribute('type', 'password');
  emailInput.setAttribute('id', 'userPassword');
  emailError.setAttribute('id', 'errorEmailMessage');
  passwordError.setAttribute('id', 'errorPassMessage');
  hasAccountLink.setAttribute('id', 'link-signUp');
  registerBtn.setAttribute('type', 'submit');

  userLabel.textContent = 'Nombre de Usuario';
  emailLabel.textContent = 'Correo Electronico';
  passwordLabel.textContent = 'Contraseña';
  registerBtn.textContent = 'Registrarse';
  hasAccount.textContent = '¿Ya tienes cuenta?';

  registerBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    authFunction(emailInput, passwordInput, onNavigate);
  });

  hasAccountLink.addEventListener('click', () => {
    onNavigate('/signin');
  });

  returnArticle.appendChild(hasAccount);
  returnArticle.appendChild(hasAccountLink);
  signupForm.appendChild(userLabel);
  signupForm.appendChild(userInput);
  signupForm.appendChild(emailLabel);
  signupForm.appendChild(emailInput);
  signupForm.appendChild(emailError);
  signupForm.appendChild(passwordLabel);
  signupForm.appendChild(passwordInput);
  signupForm.appendChild(passwordError);
  signupForm.appendChild(registerBtn);
  signupForm.appendChild(returnArticle);

  signupSection.appendChild(signupForm);

  return signupSection;
};

/*  section.innerHTML = `
  <form class="signUp-form">
    <label class="form"> Nombre de Usuario </label>
    <input type="text" >
    <label class="form"> Correo Electronico </label>
    <input type="email" id="userEmail">
    <span id="errorEmailMessage" class="errormessage"></span>
    <label class="form"> Contraseña </label>
    <input type="password" id="userPassword">
    <span id="errorPassMessage" class="errormessage"></span>
    <button class="btnRegister" type="submit">Registrarse</button>
    <article class="return-home">
      <p>¿Ya tienes cuenta?</p><a href="#" id="link-signUp">Ingresa aqui</a>
    </article>
  </form>

</section>`;

   */
