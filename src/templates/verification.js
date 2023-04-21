export const verification = () => {
  const section = document.createElement('section');
  section.classList.add('verification-section');
  section.innerHTML = `<section class="verification-section">
    <article class="pets-images">
   
    <img class="item-a" src="images/perrito1.png" alt="perrito1"/>
    <img class="item-b" src="images/animalito2.png" alt="animalito2"/>
    <img class="item-c" src="images/animalito3.png" alt="animalito3"/>
    <img class="item-d" src="images/animalito4.png" alt="animalito4"/>
    <img class="item-e" src="images/animalito5.png" alt="animalito5"/>
    <img class="item-d" src="images/animalito6.png" alt="animalito6"/>
    <img class="item-f" src="images/animalito7.png" alt="animalito7"/>
    <img class="item-j" src="images/animalito8.png" alt="animalito8"/>
    <img class="item-f" src="images/animalito9.png" alt="animalito9"/>
    </article>
    <article class="verification-logo">
      <img src="images/logo.png" alt="logo"/>
    </article>
    <article class="verification-container">
      <img class="verification-desktop" src="images/girl-cat-reading.png" alt="girl-cat-reading"/>
      <article class="verification-message">
      <span class="thanks-message" >¡Gracias por unirte a <span class="peta">Peta</span><span class="gram">gram</span>, la red social para mascotas!.</span>
      <span class="verify-message">Necesitamos que verifiques tu correo electrónico para completar tu registro. </span>
      <article class="signIn-link">
        <span>¿Ya verificaste la cuenta?</span> <span class="signIn"> Ingresa aquí</span>
      </article>
    </article>
    </article>
  </section>`;

  return section;
};
