export const home = (onNavigate) => {
  // const container = document.querySelector('#container-content');
  const sectionhome = document.createElement('section');
  const articleHomeImage = document.createElement('article');
  const imgHome = document.createElement('img');
  const articleLogo = document.createElement('article');
  const imgLogo = document.createElement('img');
  const articleHomeDescription = document.createElement('article');
  const h1HomeDescription = document.createElement('h1');
  const spanPeta = document.createElement('span');
  const spanGram = document.createElement('span');
  const h2HomeDescription = document.createElement('h2');
  const articleBtnContainer = document.createElement('article');
  const btnSignUpHome = document.createElement('button');
  const btnSignInHome = document.createElement('button');

  sectionhome.classList.add('home-section');
  articleHomeImage.classList.add('home-image');
  articleLogo.classList.add('logo');
  articleHomeDescription.classList.add('home-description');
  articleBtnContainer.classList.add('btn-container');
  btnSignUpHome.classList.add('btnSignUp');
  btnSignInHome.classList.add('btnSignIn');
  spanPeta.classList.add('peta');
  spanGram.classList.add('gram');

  imgHome.setAttribute('alt', 'home-img');
  imgHome.setAttribute('src', 'images/woman-cat-dog.png');
  btnSignUpHome.setAttribute('type', 'button');
  btnSignInHome.setAttribute('type', 'button');
  imgLogo.setAttribute('alt', 'logo-img');
  imgLogo.setAttribute('src', 'images/logo.png');

  btnSignUpHome.textContent = 'Registrate';
  btnSignInHome.textContent = 'Ingresa';
  spanPeta.textContent = 'Peta';
  spanGram.textContent = 'gram';
  h1HomeDescription.textContent = 'Bienvenidx a ';
  h2HomeDescription.textContent = 'Nuestra comunidad está dedicada a crear un espacio seguro y acogedor para que todos puedan compartir sus experiencias y celebrar el amor y la alegria que nuestras mascotas traen a nuestras vidas. ¡Únete a nosotros y comparte tu amor hoy mismo!';
  btnSignInHome.addEventListener('click', () => {
    onNavigate('/signin');
  });
  btnSignInHome.addEventListener('click', () => {
    onNavigate('/signup');
  });

  articleHomeImage.appendChild(imgHome);
  articleLogo.appendChild(imgLogo);
  h1HomeDescription.appendChild(spanPeta);
  h1HomeDescription.appendChild(spanGram);
  articleHomeDescription.appendChild(h1HomeDescription);
  articleHomeDescription.appendChild(h2HomeDescription);
  articleBtnContainer.appendChild(btnSignInHome);
  articleBtnContainer.appendChild(btnSignUpHome);
  articleHomeDescription.appendChild(articleBtnContainer);
  sectionhome.appendChild(articleHomeImage);
  sectionhome.appendChild(articleLogo);
  sectionhome.appendChild(articleHomeDescription);

  return sectionhome;
};

// section.innerHTML = `
//   <article class="home-image">
//     <img src="./images/woman-cat-dog.png">
//   </article>
//   <article class="logo">
//     <img src="images/logo.png" alt="logo"/>
//   </article>
//   <article class="home-description">
//     <h1>Bienvenidx a <span class="peta">Peta</span><span class="gram">gram</span></h1>
// eslint-disable-next-line max-len
//     <h2>Nuestra comunidad está dedicada a crear un espacio seguro y acogedor para que todos puedan compartir sus experiencias y celebrar el amor y la alegria que nuestras mascotas traen a nuestras vidas. ¡Únete a nosotros y comparte tu amor hoy mismo!</h2>
//     <article class="btn-container">
//       <button type="button" class="btnSignUp">Registrate</button>
//       <button type="button" class="btnSignIn">Ingresa</button>
//     </article>
//   </article>
// `;

// const btnSignIn = section.querySelector('.btnSignIn');
// const btnSignUp = section.querySelector('.btnSignUp');
// const article = section.querySelector('.btn-container');
// const articleHome = section.querySelector('.home-description');
// article.appendChild(btnSignUp);
// article.appendChild(btnSignIn);

// articleHome.appendChild(article);
// container.appendChild(section);
