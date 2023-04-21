export const signup = () => {
  const container = document.querySelector('#container-content');

  const section = document.createElement('section');
  section.classList.add('home-section');
  section.innerHTML = `
<section class="signUp-section" id="signUp-section">
 
  <form class="signUp-form">
    <a href="/" class="close">&times;</a>  <!-- &times es una entidad de caracteres HTML que representa el símbolo "×" -->
    <label class="form"> Nombre de Usuario </label>
    <input type="text" >
    <label class="form"> Correo Electronico </label> 
    <input type="email" id="userEmail">
    <label class="form"> Contraseña </label>
    <input type="password" id="userPassword">
    <button class="btnRegister" type="submit">Registrarse</button>
    <article class="return-home">
      <p>¿Ya tienes cuenta?</p> <a href="#">Ingresa aqui</a>
    </article>
  </form>
    
</section>`;

  const btnRegister = section.querySelector('.btnRegister');
  const div = document.createElement('div');
  const form = section.querySelector('.signUp-form');
  const close = section.querySelector('.close');

  form.appendChild(btnRegister);
  form.appendChild(close);
  div.appendChild(section);

  container.appendChild(div);

  return container;
};
