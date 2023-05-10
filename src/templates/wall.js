import { onSnapshot, query, orderBy } from 'firebase/firestore';
import { auth, colRef } from '../lib/config/firebaseconfig.js';
import {
  posting,
  deletePost,
  editPost,
  like,
  dislike,
  likecat,
  dislikecat,
} from '../lib/config/posts.js';
import { signOutUser } from '../lib/config/auth.js';

export const wall = (onNavigate) => {
  const wallSection = document.createElement('section');
  const header = document.createElement('header');
  const hamburguerArticle = document.createElement('article');
  const hamburguerImage = document.createElement('img');
  const logoContainerArticle = document.createElement('article');
  const wallLogoArticle = document.createElement('article');
  const logoImage = document.createElement('img');
  const logoSpanArticle = document.createElement('article');
  const petaSpan = document.createElement('span');
  const gramSpan = document.createElement('span');
  const profilePicArticle = document.createElement('article');
  const profilePicImage = document.createElement('img');
  const main = document.createElement('main');
  const postInputSection = document.createElement('section');
  const yourPostArticle = document.createElement('article');
  const form = document.createElement('form');
  const label = document.createElement('label');
  const br = document.createElement('br');
  const input = document.createElement('input');
  const containerbutton = document.createElement('article');
  const button = document.createElement('button');
  const pawnImage = document.createElement('img');
  const postsSection = document.createElement('section');
  const post1 = document.createElement('article');
  const post1Header = document.createElement('div');
  const userImg1 = document.createElement('img');
  const user1Name = document.createElement('p');
  const post1Content = document.createElement('div');
  const post1Text = document.createElement('p');
  const post1Bottom = document.createElement('div');
  const reactions1 = document.createElement('div');
  const dogReaction1 = document.createElement('img');
  const dogReactionCount1 = document.createElement('p');
  const catReaction1 = document.createElement('img');
  const catReactionCount1 = document.createElement('p');

  const sectionMenu = document.createElement('section');
  const btnCloseMenu = document.createElement('button');

  const sectionPerfilMenu = document.createElement('section');
  const btnPerfilMenu = document.createElement('button');
  const imgPerfilMenu = document.createElement('img');

  const sectionMuroMenu = document.createElement('section');
  const btnMuroMenu = document.createElement('button');
  const imgMuroMenu = document.createElement('img');

  const sectionAmigxsMenu = document.createElement('section');
  const imgAmigxsMenu = document.createElement('img');
  const btnAmigxsMenu = document.createElement('button');

  const sectionLogout = document.createElement('section');
  const btnLogout = document.createElement('button');
  const imgLogout = document.createElement('img');

  const sectionBtnMenu = document.createElement('section');

  sectionBtnMenu.classList.add('section-btn-menu');
  sectionLogout.classList.add('section-logout');
  btnLogout.classList.add('btn-logout');
  btnLogout.textContent = 'Cerrar sesión';
  wallSection.classList.add('wall-section');
  hamburguerArticle.classList.add('hamburger');
  logoContainerArticle.classList.add('logo-container');
  wallLogoArticle.classList.add('wall-logo');
  logoSpanArticle.classList.add('logo-span');
  petaSpan.classList.add('peta');
  gramSpan.classList.add('gram');
  profilePicArticle.classList.add('profilePic');
  main.classList.add('container-wall');
  postInputSection.classList.add('post-input');
  yourPostArticle.classList.add('your-post');
  form.classList.add('form-yourpost');
  input.classList.add('your-postInput');
  containerbutton.classList.add('containerbutton');
  button.classList.add('btnyour-post');
  postsSection.classList.add('posts-section');

  sectionMenu.classList.add('section-menu');
  btnCloseMenu.classList.add('btn-close-menu');
  sectionPerfilMenu.classList.add('section-perfil-menu');
  imgPerfilMenu.classList.add('img-perfil-menu');
  imgMuroMenu.classList.add('img-muro-menu');
  imgAmigxsMenu.classList.add('img-amigxs-menu');
  btnPerfilMenu.classList.add('btn-menu');
  btnMuroMenu.classList.add('btn-menu');
  btnAmigxsMenu.classList.add('btn-menu');
  imgLogout.classList.add('img-signout');

  imgPerfilMenu.src = 'images/cat-porfile-menu.png';
  imgMuroMenu.src = 'images/cat-muro-menu.png';
  imgAmigxsMenu.src = 'images/amigxs-menu.png';
  imgLogout.src = 'images/signout-dog.png';

  imgPerfilMenu.width = '60';
  imgPerfilMenu.height = '60';
  imgMuroMenu.width = '60';
  imgMuroMenu.height = '60';
  imgAmigxsMenu.width = '60';
  imgAmigxsMenu.height = '60';
  imgLogout.width = '60';
  imgLogout.height = '60';

  btnCloseMenu.innerHTML = '&times;';
  btnPerfilMenu.innerHTML = 'Perfil';
  btnMuroMenu.innerHTML = 'Muro';
  btnAmigxsMenu.innerHTML = 'Amigxs';

  btnPerfilMenu.appendChild(imgPerfilMenu);
  btnMuroMenu.appendChild(imgMuroMenu);
  btnAmigxsMenu.appendChild(imgAmigxsMenu);
  btnLogout.appendChild(imgLogout);

  sectionPerfilMenu.append(btnPerfilMenu);
  sectionMuroMenu.append(btnMuroMenu);
  sectionAmigxsMenu.append(btnAmigxsMenu);
  sectionLogout.append(btnLogout);

  sectionBtnMenu.append(
    sectionPerfilMenu,
    sectionMuroMenu,
    sectionAmigxsMenu,
  );

  sectionMenu.append(
    btnCloseMenu,
    sectionBtnMenu,
    sectionLogout,
  );

  post1.className = 'post';
  post1Header.className = 'post-header';
  userImg1.className = 'user-image';
  post1Content.className = 'post-content';
  post1Bottom.className = 'post-bottom';
  reactions1.className = 'reactions';
  hamburguerImage.src = 'images/hamburguer.png';
  hamburguerImage.alt = 'hamburguer';
  logoImage.src = 'images/logo.png';
  logoImage.alt = 'logo';
  logoImage.width = '83';
  logoImage.height = '77';
  petaSpan.innerText = 'Peta';
  gramSpan.innerText = 'gram';
  profilePicImage.src = 'images/profile-img.png';
  profilePicImage.alt = 'profile picture';
  label.htmlFor = 'your-postinput';
  label.innerText = '¡Hola de nuevo, usuarix!';
  input.type = 'text';
  input.id = 'your-postinput';
  input.name = 'your-postinput';
  input.placeholder = 'Escribe algo sobre tus mascotas...';
  pawnImage.src = 'images/pawn.png';
  pawnImage.alt = 'pawn';
  userImg1.src = 'images/user1.png';
  userImg1.alt = 'profile picture';
  user1Name.textContent = 'Fulanitx escribió:';
  post1Text.textContent = '¡Hola a todxs! Dale like si a tu mascota le gusta el pollito.';
  dogReaction1.src = 'images/dog.png';
  dogReaction1.alt = 'dog reaction';
  dogReactionCount1.textContent = '10';
  catReaction1.src = 'images/cat.png';
  catReaction1.alt = 'cat reaction';
  catReactionCount1.textContent = '18';

  hamburguerArticle.appendChild(hamburguerImage);
  header.appendChild(hamburguerArticle);
  wallLogoArticle.appendChild(logoImage);
  logoContainerArticle.appendChild(wallLogoArticle);
  logoSpanArticle.appendChild(petaSpan);
  logoSpanArticle.appendChild(gramSpan);
  logoContainerArticle.appendChild(logoSpanArticle);
  header.appendChild(logoContainerArticle);
  profilePicArticle.appendChild(profilePicImage);
  header.appendChild(profilePicArticle);
  button.appendChild(pawnImage);
  button.appendChild(document.createTextNode('Publicar'));
  form.appendChild(label);
  form.appendChild(br);
  form.appendChild(input);
  form.appendChild(br.cloneNode());
  containerbutton.appendChild(button);
  form.appendChild(containerbutton);
  yourPostArticle.appendChild(form);
  postInputSection.appendChild(yourPostArticle);
  main.appendChild(postInputSection);
  post1Header.appendChild(userImg1);
  post1Header.appendChild(user1Name);
  post1Content.appendChild(post1Text);
  reactions1.appendChild(dogReaction1);
  reactions1.appendChild(dogReactionCount1);
  reactions1.appendChild(catReaction1);
  reactions1.appendChild(catReactionCount1);

  const commentBtn1 = document.createElement('button');
  commentBtn1.className = 'btnComment';
  commentBtn1.type = 'button';
  const commentBtnIcon1 = document.createElement('img');
  commentBtnIcon1.src = 'images/post-pawn.png';
  const commentBtnText1 = document.createTextNode('Comentar');
  commentBtn1.appendChild(commentBtnIcon1);
  commentBtn1.appendChild(commentBtnText1);
  post1Bottom.appendChild(reactions1);
  post1Bottom.appendChild(commentBtn1);
  post1.appendChild(post1Header);
  post1.appendChild(post1Content);
  post1.appendChild(post1Bottom);
  const post2 = document.createElement('article');
  post2.className = 'post';
  const post2Header = document.createElement('div');
  post2Header.className = 'post-header';
  const userImg2 = document.createElement('img');
  userImg2.className = 'user-image';
  userImg2.src = 'images/user2.png';
  userImg2.alt = 'profile picture';
  const user2Name = document.createElement('p');
  user2Name.textContent = 'Fulanitx escribió:';
  post2Header.appendChild(userImg2);
  post2Header.appendChild(user2Name);
  const post2Content = document.createElement('div');
  post2Content.className = 'post-content';
  const post2Text = document.createElement('p');
  post2Text.textContent = 'Les recomiendo estos lugares pet-friendly: Patazonia, TacoFriends y Cinemalitos.';
  post2Content.appendChild(post2Text);
  const post2Bottom = document.createElement('div');
  post2Bottom.className = 'post-bottom';
  const reactions2 = document.createElement('div');
  reactions2.className = 'reactions';
  const dogReaction2 = document.createElement('img');
  dogReaction2.src = 'images/dog.png';
  dogReaction2.alt = 'dog reaction';
  const dogReactionCount2 = document.createElement('p');
  dogReactionCount2.textContent = '2';
  const catReaction2 = document.createElement('img');
  catReaction2.src = 'images/cat.png';
  catReaction2.alt = 'cat reaction';
  const catReactionCount2 = document.createElement('p');
  catReactionCount2.textContent = '18';
  reactions2.appendChild(dogReaction2);
  reactions2.appendChild(dogReactionCount2);
  reactions2.appendChild(catReaction2);
  reactions2.appendChild(catReactionCount2);
  const commentBtn2 = document.createElement('button');
  commentBtn2.className = 'btnComment';
  commentBtn2.type = 'button';
  const commentBtnIcon2 = document.createElement('img');
  commentBtnIcon2.src = 'images/post-pawn.png';
  const commentBtnText2 = document.createTextNode('Comentar');
  commentBtn2.appendChild(commentBtnIcon2);
  commentBtn2.appendChild(commentBtnText2);
  post2Bottom.appendChild(reactions2);
  post2Bottom.appendChild(commentBtn2);
  post2.appendChild(post2Header);
  post2.appendChild(post2Content);
  post2.appendChild(post2Bottom);
  postsSection.append(post1, post2);
  main.appendChild(postsSection);
  wallSection.append(sectionMenu, header, main);

  hamburguerArticle.addEventListener('click', () => {
    sectionMenu.classList.toggle('active');
  });

  btnCloseMenu.addEventListener('click', () => {
    sectionMenu.classList.toggle('active');
  });

  // create confirmation modal
  const confirmationModal = document.createElement('div');
  confirmationModal.className = 'confirmationModal';
  confirmationModal.style.display = 'none';

  const confirmationMessage = document.createElement('p');
  confirmationMessage.textContent = '¿Segurx que deseas eliminar esta publicación?';
  const confirmDog = document.createElement('img');
  confirmDog.src = 'images/dogConfirm.png';

  const confirmBtn = document.createElement('button');
  confirmBtn.className = 'confirmBtn';
  confirmBtn.textContent = 'Eliminar';

  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'cancelBtn';
  cancelBtn.textContent = 'Cancelar';

  confirmationModal.appendChild(confirmationMessage);
  confirmationModal.appendChild(confirmDog);
  confirmationModal.appendChild(confirmBtn);
  confirmationModal.appendChild(cancelBtn);
  wallSection.appendChild(confirmationModal);

  const editModal = document.createElement('div');
  editModal.className = 'editModal';
  editModal.style.display = 'none';
  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.className = 'editInput';

  const confirmEditBtn = document.createElement('button');
  confirmEditBtn.className = 'confirmBtn';
  confirmEditBtn.textContent = 'Editar';

  const cancelEditBtn = document.createElement('button');
  cancelEditBtn.className = 'cancelBtn';
  cancelEditBtn.textContent = 'Cancelar';

  editModal.appendChild(editInput);
  editModal.appendChild(confirmEditBtn);
  editModal.appendChild(cancelEditBtn);
  wallSection.appendChild(editModal);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const postText = input.value.trim();
    if (postText !== '') {
      posting(input, form);
      // .then(() => {
      //   window.location.reload();
      // });
    }
  });

  btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser()
      .then(() => {
        // Email verification sent successfully
        onNavigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  // const q = query(colRef, orderBy('timestamp', 'desc'));
  // getDocs(q)
  //   .then((snapshot) => {
  // const postsArr = [];
  // snapshot.docs.forEach((doc) => {
  //   postsArr.push({ ...doc.data(), id: doc.id });
  // });
  const orderedQuery = query(colRef, orderBy('timestamp', 'desc'));
  onSnapshot(orderedQuery, (querySnapshot) => {
    postsSection.innerHTML = '';
    querySnapshot.forEach((pos) => {
      const post = document.createElement('article');
      post.className = 'post';

      const postHeader = document.createElement('div');
      postHeader.className = 'post-header';

      const userImage = document.createElement('img');
      userImage.className = 'user-image';
      userImage.src = 'images/user1.png';
      userImage.alt = 'profile picture';
      postHeader.appendChild(userImage);

      const userNameElem = document.createElement('p');
      userNameElem.textContent = `${pos.data().userid} escribió: `;
      postHeader.appendChild(userNameElem);

      const dotContainer = document.createElement('article');
      const moreOptionsimg = document.createElement('img');
      const frameOptions = document.createElement('div');

      frameOptions.className = 'frame-options';
      moreOptionsimg.src = 'images/dot-menu.png';
      moreOptionsimg.alt = 'more-options';
      moreOptionsimg.className = 'more_options-img';
      dotContainer.className = 'dot-container';
      dotContainer.append(moreOptionsimg, frameOptions);

      moreOptionsimg.addEventListener('click', () => {
        frameOptions.classList.toggle('active');
      });

      const editBtn = document.createElement('button');
      editBtn.className = 'option1';
      editBtn.textContent = 'Editar';
      editBtn.addEventListener('click', () => {
        console.log(`pos id after click${pos.id}`);
        // Mostrar modal de edición
        editInput.value = pos.data().text;
        editModal.style.display = 'block';
        confirmEditBtn.addEventListener('click', () => {
          console.log(`confirmEditBtn clicked for post ${pos.id}`);
          editPost(pos.id, editInput.value);
          // Esconder el modal de cofirmación
          editModal.style.display = 'none';
          // Remover el event listener para que no se llame editPost() de nuevo
        }, {
          // This will invoke the event once and de-register it afterward
          once: true,
        });

        // Esconder el modal de confirmación si el usuario da click en cancelar
        cancelEditBtn.addEventListener('click', () => {
          editModal.style.display = 'none';
        });
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.className = 'option2';
      deleteButton.addEventListener('click', () => {
        // Mostrar modal mensaje de confirmación

        confirmationModal.style.display = 'block';

        confirmBtn.addEventListener('click', () => {
          deletePost(pos.id);
          /*  .then(() => {
              window.location.reload();
            }); */
          // Esconder el modal de cofirmación
          confirmationModal.style.display = 'none';
        });

        // Esconder el modal de confirmación si el usuario da click en cancelar
        cancelBtn.addEventListener('click', () => {
          confirmationModal.style.display = 'none';
        });
      });

      if (pos.data().userid === auth.currentUser.displayName) {
        frameOptions.appendChild(editBtn);
        frameOptions.appendChild(deleteButton);
        postHeader.appendChild(dotContainer);
      }

      const postContent = document.createElement('div');
      postContent.className = 'post-content';

      const postText = document.createElement('p');
      postContent.appendChild(postText);

      const postBottom = document.createElement('div');
      postBottom.className = 'post-bottom';

      const reactions = document.createElement('div');
      reactions.className = 'reactions';

      const dogReaction = document.createElement('img');
      dogReaction.src = 'images/dog.png';
      dogReaction.alt = 'dog reaction';
      reactions.appendChild(dogReaction);

      const dogReactionCount = document.createElement('div');
      dogReactionCount.setAttribute('id', 'divlike');
      dogReactionCount.textContent = pos.data().likes.length;

      const catReactionCount = document.createElement('div');
      catReactionCount.setAttribute('id', 'divlikecat');
      catReactionCount.textContent = pos.data().likescat.length;

      reactions.appendChild(dogReactionCount);

      const catReaction = document.createElement('img');
      catReaction.src = 'images/cat.png';
      catReaction.alt = 'cat reaction';
      reactions.appendChild(catReaction);
      reactions.appendChild(catReactionCount);

      dogReaction.addEventListener('click', () => {
        const user = auth.currentUser.uid;
        const likes = pos.data().likes;
        // si el usuario da like los suma
        if (!likes.includes(user)) {
          like(pos.id);
        } else {
          // dislike resta el me gusta
          dislike(pos.id);
        }
      });

      catReaction.addEventListener('click', () => {
        const user = auth.currentUser.uid;
        const likes = pos.data().likescat;
        // si el usuario da like los suma
        if (!likes.includes(user)) {
          console.log('ENTRA LIKE');
          likecat(pos.id);
        } else {
          // dislike resta el me gusta
          console.log('ENTRA DISLIKE');
          dislikecat(pos.id);
        }
      });
      const commentBtn = document.createElement('button');
      commentBtn.className = 'btnComment';
      commentBtn.type = 'button';

      const commentBtnIcon = document.createElement('img');
      commentBtnIcon.src = 'images/post-pawn.png';
      commentBtnIcon.alt = 'comment';
      commentBtn.appendChild(commentBtnIcon);
      const btnText = document.createTextNode('Comentar');
      commentBtn.appendChild(btnText);
      postBottom.appendChild(reactions);
      postBottom.appendChild(commentBtn);

      post.appendChild(postHeader);
      postText.textContent = pos.data().text;
      post.appendChild(postContent);
      post.appendChild(postBottom);

      postsSection.appendChild(post);
    });
  });
  // .catch((err) => {
  //   console.log(err.message);
  // });
  return wallSection;
};
