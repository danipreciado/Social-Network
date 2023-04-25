const container = document.querySelector('#container-content');
export const signIn = () => {
  const section = document.createElement('section');
  section.classList.add('signUp-section');
  section.innerHTML = `
 
  <form class="signUp-form">
    <a href="/" class="close">&times;</a>  <!-- &times es una entidad de caracteres HTML que representa el símbolo "×" -->
    <label class="form"> Correo Electronico </label> 
    <input type="email" id="loginUserEmail">
    <span id="errorEmailMessage" class="errormessage"></span>
    <label class="form"> Contraseña </label>
    <input type="password" id="loginUserPassword">
    <span id="errorPassMessage" class="errormessage"></span>
    <button class="btnLogin" type="submit">Ingresa</button>
    <button class="btnGoogle" type="button"> Ingresa con Google </button>
    <article class="return-home">
      <p>¿No tienes cuenta?</p><a href="#">Registrate aqui</a>
    </article>
  </form>
    
</section>`;

  const btnLogin = section.querySelector('.btnLogin');
  const btnGoogle = section.querySelector('.btnGoogle');
  const div = document.createElement('div');
  const letter = document.createElement('p');
  const form = section.querySelector('.signUp-form');
  const close = section.querySelector('.close');
  form.appendChild(btnLogin);
  form.appendChild(letter);
  form.appendChild(btnGoogle);
  form.appendChild(close);
  div.appendChild(section);

  container.appendChild(div);

  return container;
};
