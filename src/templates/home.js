export const home = () => {
  const container = document.querySelector('#container-content');

  const section = document.createElement('section');
  section.classList.add('home-section');
  section.innerHTML = `
    <article class="home-image">
      <img src="./images/woman-cat-dog.png">
    </article>
    <article class="logo">
      <img src="images/logo.png" alt="logo"/>
    </article>
    <article class="home-description">
      <h1>Bienvenidx a <span class="peta">Peta</span><span class="gram">gram</span></h1>
      <h2>Nuestra comunidad está dedicada a crear un espacio seguro y acogedor para que todos puedan compartir sus experiencias y celebrar el amor y la alegria que nuestras mascotas traen a nuestras vidas. ¡Únete a nosotros y comparte tu amor hoy mismo!</h2>
      <article class="btn-container">
        <button type="button" class="btnSignUp">Registrate</button>
        <button type="button" class="btnSignIn">Ingresa</button>
      </article>
    </article>
    <article>
      <button type="button" class="btnSignUp">Regístrate</button>
      <button type="button" class="btnSignIn">Ingresa</button>
    </article>
  `;

  const btnSignIn = section.querySelector('.btnSignIn');
  const btnSignUp = section.querySelector('.btnSignUp');
  const article = section.querySelector('.btn-container');
  const articleHome = section.querySelector('.home-description');
  article.appendChild(btnSignUp);
  article.appendChild(btnSignIn);

  articleHome.appendChild(article);
  container.appendChild(section);

  return container;
};
