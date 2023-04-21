export const signup = () => {
  const container = document.querySelector('#container-content');

  const section = document.createElement('section');
  section.classList.add('signUp-section');
  section.innerHTML = `
 
  <form class="signUp-form">
    <span class="close">&times;</span>  <!-- &times es una entidad de caracteres HTML que representa el símbolo "×" -->
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
  </form>`;

  const btnRegister = section.querySelector('.btnRegister');
  btnRegister.addEventListener('submit', () => {
    onNavigate('/verification');
  });

  const article = document.createElement('article');
  article.classList.add('btn-article');
  article.appendChild(btnRegister);

  const div = document.createElement('div');
  section.appendChild(article);
  div.appendChild(section);

  container.appendChild(div);

  return container;
};
