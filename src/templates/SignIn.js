
export const signIn = () => {
  const singInSection = document.createElement('section');
  const signInForm = document.createElement('form');
  const emailLabel = document.createElement('label');
  const emailInput = document.createElement('input');
  const spanErrorEmail = document.createElement('span');
  const passwordLabel = document.createElement('label')
  const passwordInput = document.createElement ('input');
  const spanErrorPass = document.createElement ('span');
  const btnContainerSignUp = document.createElement('article')
  const btnLogin = document.createElement('button');
  const btnGoogle = document.createElement('button');
  const containerLinkSignIn = document.createElement('article')
  const askingText = document.createElement('p')
  const linkToSignUp = document.createElement('a')

  
  signInSection.classList.add('signIn-section');
  signInForm.classList.add('signIn-form');
  emailLabel.classList.add('form'); 
  spanErrorEmail.classList.add('errorMessage');
  btnContainerSignUp.classList.add('return-home');

  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'loginUserEmail');
  spanErrorEmail.setAttribute('id', 'errorEmailMessage');
  linkToSignUp.setAttribute('id','link-signIn');HOLA 



  btnLogin.setAttribute('class', 'btnLogin');
  btnLogin.setAttribute('type', 'button');
  btnGoogle.setAttribute('class','btnGoogle')
  btnGoogle.setAttribute('type','button')

  
  section.innerHTML = `
 
  <form class="signIn-form">
    
    <label class="form"> Correo Electronico </label> 
    <input type="email" id="loginUserEmail">
    <span id="errorEmailMessage" class="errormessage"></span>
    <label class="form"> Contraseña </label>
    <input type="password" id="loginUserPassword">
    <span id="errorPassMessage" class="errormessage"></span>
    <article class="btn-container_signIn">
      <button class="btnLogin" type="submit">Ingresa</button>
      <button class="btnGoogle" type="button"> Ingresa con Google </button>
    </article>
    <article class="return-home">
      <p>¿No tienes cuenta?</p><a href="#" id="link-signIn">Registrate aqui</a>
    </article>
  </form>
    
</section>`;

  const form = section.querySelector('.signIn-form');
  const btnLogin = section.querySelector('.btnLogin');
  const btnGoogle = section.querySelector('.btnGoogle');
  const article = section.querySelector('.btn-container_signIn');
  const linkSignIn = section.querySelector('#link-signIn');
  const div = document.createElement('div');
  const letter = document.createElement('p');

  form.appendChild(linkSignIn);
  article.appendChild(btnLogin);
  article.appendChild(btnGoogle);
  form.appendChild(letter);
  div.appendChild(section);
  form.appendChild(article);

  container.appendChild(div);

  return container;
};
