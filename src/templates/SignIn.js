const container = document.querySelector('#container-content3');
export const signIn = () => {
  const section = document.createElement('section');
  section.classList.add('signIn-section');
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
