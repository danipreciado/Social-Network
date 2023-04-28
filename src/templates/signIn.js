import { googleLogin } from '../lib/config/auth';

export const signIn = (onNavigate) => {
  const signInSection = document.createElement('section');
  const articleForm = document.createElement('article');
  const signInForm = document.createElement('form');
  const emailLabel = document.createElement('label');
  const emailInput = document.createElement('input');
  const spanErrorEmail = document.createElement('span');
  const passwordLabel = document.createElement('label');
  const passwordInput = document.createElement('input');
  const spanErrorPass = document.createElement('span');
  const btnContainerSignUp = document.createElement('article');
  const btnLogin = document.createElement('button');
  const btnGoogle = document.createElement('button');
  const containerLinkSignIn = document.createElement('article');
  const askingText = document.createElement('p');
  const linkToSignUp = document.createElement('a');

  articleForm.classList.add('container-form');
  signInSection.classList.add('signIn-section');
  signInForm.classList.add('signIn-form');
  emailLabel.classList.add('form');
  spanErrorEmail.classList.add('errorMessage');
  btnContainerSignUp.classList.add('btn-container_signIn');
  btnLogin.classList.add('btnLogin');
  btnGoogle.classList.add('btnGoogle');
  passwordLabel.classList.add('form');
  containerLinkSignIn.classList.add('btn-container_signIn');

  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'loginUserEmail');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('id', 'loginUserPassword');
  spanErrorEmail.setAttribute('id', 'errorEmailMessage');
  spanErrorPass.setAttribute('id', 'errorPassMessage');
  linkToSignUp.setAttribute('id', 'link-signIn');
  btnLogin.setAttribute('type', 'submit');
  btnGoogle.setAttribute('type', 'button');

  emailLabel.textContent = 'Correo Electronico';
  passwordLabel.textContent = 'Contraseña';
  btnLogin.textContent = 'Ingresa';
  btnGoogle.textContent = 'Ingresa con Google';
  askingText.textContent = '¿No tienes cuenta? ';
  linkToSignUp.textContent = 'Registrate aquí';

  btnGoogle.addEventListener('click', () => {
    googleLogin(onNavigate);
  });

  linkToSignUp.addEventListener('click', () => {
    onNavigate('/signup');
  });

  signInForm.appendChild(emailLabel);
  signInForm.appendChild(emailInput);
  signInForm.appendChild(passwordLabel);
  signInForm.appendChild(passwordInput);
  signInForm.appendChild(spanErrorEmail);
  signInForm.appendChild(spanErrorPass);
  btnContainerSignUp.appendChild(btnGoogle);
  btnContainerSignUp.appendChild(btnLogin);
  containerLinkSignIn.appendChild(askingText);
  containerLinkSignIn.appendChild(linkToSignUp);

  signInForm.appendChild(articleForm);
  signInForm.appendChild(btnContainerSignUp);
  signInForm.appendChild(containerLinkSignIn);

  signInSection.appendChild(signInForm);
  return signInSection;
};

//   section.innerHTML = `

//   <form class="signIn-form">

//     <label class="form"> Correo Electronico </label>
//     <input type="email" id="loginUserEmail">
//     <span id="errorEmailMessage" class="errormessage"></span>
//     <label class="form"> Contraseña </label>
//     <input type="password" id="loginUserPassword">
//     <span id="errorPassMessage" class="errormessage"></span>
//     <article class="btn-container_signIn">
//       <button class="btnLogin" type="submit">Ingresa</button>
//       <button class="btnGoogle" type="button"> Ingresa con Google </button>
//     </article>
//     <article class="return-home">
//       <p>¿No tienes cuenta?</p><a href="#" id="link-signIn">Registrate aqui</a>
//     </article>
//   </form>

// </section>`;
