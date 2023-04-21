export const btnSignUp = document.createElement('button');

export const signup = () => {
  const container = document.querySelector('#container-content');

  const section = document.createElement('section');
  section.classList.add('home-section');
  section.innerHTML = `
<section class="signUp-section" id="signUp-section">
 
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
  </form>
    
</section>`;
  // En esta parte copie y pegue la misma estructura de nodos que aparece en home,porque este
  // template necesita tener un nodo para que pueda renderizarse, y como me dio flojera crear
  // uno nuevo se lo deje asi xd;
  const btnSignIn = document.createElement('button');
  btnSignIn.classList.add('btnSignIn');
  btnSignIn.textContent = 'Ingresa';
  btnSignUp.classList.add('btnSignUn');
  btnSignUp.textContent = 'Registrate';
  const article = document.createElement('article');
  article.classList.add('btn-article');
  article.appendChild(btnSignUp);
  article.appendChild(btnSignIn);

  const div = document.createElement('div');
  div.appendChild(section);
  div.appendChild(article);

  container.appendChild(div);

  return container;
};
