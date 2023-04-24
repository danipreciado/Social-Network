export const page404 = () => {
  const container = document.querySelector('#container-content');

  const section = document.createElement('section');
  section.classList.add('home-section');
  section.innerHTML = `
  <section class="pageNotFound">
    <article class="cat404">
      <img src="./images/cat_bookshelf.png" alt="cat404"/>
    </article>
        <article class ="description-pageNotFound">
            <h1>Woops! 404 Page not found</h1>
        </article>
        <article class="container-btn_pageNotFound">
        <button type="button" class="btn-pageNotfound">Home</button>
        </article>
        <article class="dog404">
            <img src="images/dog_404.png" alt="dog404"/>
        </article>
    </section>
  `;
  container.appendChild(section);
  return container;
};
