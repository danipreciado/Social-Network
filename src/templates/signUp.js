const container = document.querySelector('#container-content2');
export const signup = () => {
  const section = document.createElement('section');
  section.classList.add('signUp-section');
  section.innerHTML = `
 
  <form class="signUp-form">
    <a href="/" class="close">&times;</a>  <!-- &times es una entidad de caracteres HTML que representa el símbolo "×" -->
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

  const btnRegister = section.querySelector('.btnRegister');
  const div = document.createElement('div');
  const form = section.querySelector('.signUp-form');
  const close = section.querySelector('.close');
  const linkSignUp = section.querySelector('#link-signUp');

  form.appendChild(linkSignUp);
  form.appendChild(btnRegister);
  form.appendChild(close);
  div.appendChild(section);

  container.appendChild(div);

  return container;
};
