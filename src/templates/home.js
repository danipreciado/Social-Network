const home = () => {
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
    </article>
  `;

  const btnSignUp = document.createElement('button');
  btnSignUp.classList.add('btnSignUp');
  btnSignUp.textContent = 'Regístrate';
  btnSignUp.addEventListener('click', () => {
  //   // onNavigate('/signup');
    console.log('Hola');
  });
  const btnSignIn = document.createElement('button');
  btnSignIn.classList.add('btnSignIn');
  btnSignIn.textContent = 'Ingresa';

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
export default home;
