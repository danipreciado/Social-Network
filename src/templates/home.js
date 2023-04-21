const home = () => {
  const view = `
    <section class="home-section">
        <article class="home-image">
          <img src="./images/woman-cat-dog.png">
        </article>
        <article class="logo">
          <img src="images/logo.png" alt="logo"/>
        </article>
        <article class="home-description">
          <h1>Bienvenidx a <span class="peta">Peta</span><span class="gram">gram</span></h1>
          <h2>Nuestra comunidad está dedicada a crear un espacio seguro y acogedor para que todos puedan compartir sus experiencias y celebrar el amor y la alegria que nuestras mascotas traen a nuestras vidas. ¡Únete a nosotros y comparte tu amor hoy mismo!</h2>
          <article class="home-buttons">
            <button class ="btnSignUp" id="btnsign" >Registrarme</button>
            <button class ="btnSignIn">Ingresar</button>
          </article>
        </article>
      </section>
      `;
  return view;
};
export default home;
