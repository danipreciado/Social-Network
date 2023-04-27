export const wall = () => {
  const wallSection = document.createElement('section');
  const wallHeader = document.createElement('header');
  const hamburgerContainer = document.createElement('article');
  const hamburgerImg = document.createElement('img');
  const logoContainer = document.createElement('article');
  const logoImgContainer = document.createElement('article');
  const logoImg = document.createElement('img');
  const logoSpanContainer = document.createElement('article');
  const peta = document.createElement('span');
  const gram = document.createElement('span');
  const profileContainer = document.createElement('article');
  const profileImg = document.createElement('img');
  const wallMain = document.createElement('main');
  const postInputSection = document.createElement('section');
  const postArticle = document.createElement('article');
  const postForm = document.createElement('form');
  const inputLabel = document.createElement('label');
  const postInput = document.createElement('input');
  const postBtn = document.createElement('button');
  const postsSection = document.createElement('section');
  const postsArticle = document.createElement('article');
  const postHeaderDiv = document.createElement('div');
  const userImage = document.createElement('img');
  const userNameHeader = document.createElement('p');
  const postContent = document.createElement('div');
  const postText = document.createElement('p');
  const postFooter = document.createElement('div');
  const reactions = document.createElement('div');
  const dogReaction = document.createElement('img');
  const dogReactionCount = document.createElement('p');
  const catReaction = document.createElement('img');
  const catReactionCount = document.createElement('p');
  const commentPostBtn = document.createElement('button');

  const userImage2 = document.createElement('img');
  /* const userNameHeader2 = document.createElement('p'); */
  const postContent2 = document.createElement('div');
  /* const postText2 = document.createElement('p'); */

  wallSection.classList.add('wall-section');
  hamburgerContainer.classList.add('hamburger');
  logoContainer.classList.add('logo-container');
  logoImgContainer.classList.add('wall-logo');
  logoSpanContainer.classList.add('logo-span');
  peta.classList.add('peta');
  gram.classList.add('gram');
  profileContainer.classList.add('profilePic');
  wallMain.classList.add('container-wall');
  postInputSection.classList.add('post-input');
  postArticle.classList.add('your-post');
  postInput.classList.add('your-postinput');
  postBtn.classList.add('btnyour-post');
  postsSection.classList.add('posts-section');
  postsArticle.classList.add('post');
  postHeaderDiv.classList.add('post-header');
  userImage.classList.add('user-image');
  postContent.classList.add('post-content');
  postFooter.classList.add('post-bottom');
  reactions.classList.add('reactions');
  commentPostBtn.classList.add('btnComment');
  userImage2.classList.add('user-image');
  postContent2.classList.add('post-content');

  hamburgerImg.setAttribute('src', 'images/hamburguer.png');
  hamburgerImg.setAttribute('alt', 'hamburger');
  logoImg.setAttribute('src', 'images/logo.png');
  logoImg.setAttribute('alt', 'logo');
  logoImg.setAttribute('width', '83px');
  logoImg.setAttribute('height', '77px');
  profileImg.setAttribute('src', 'images/profile-img.png');
  profileImg.setAttribute('alt', 'profile picture');
  inputLabel.setAttribute('for', 'your-postinput');

  peta.textContent = 'Peta';
  gram.textContent = 'gram';

  hamburgerContainer.appendChild(hamburgerImg);
  logoImgContainer.appendChild(logoImg);
  logoSpanContainer.appendChild(peta);
  logoSpanContainer.appendChild(gram);
  logoContainer.appendChild(logoImgContainer);
  logoContainer.appendChild(logoSpanContainer);
  profileContainer.appendChild(profileImg);
  wallHeader.append(hamburgerContainer, logoContainer, profileContainer);
  //  main-section post input

  postForm.append(inputLabel, postInput, postBtn);
  postArticle.appendChild(postForm);
  postInputSection.appendChild(postArticle);

  //  post section

  postHeaderDiv.append(userImage, userNameHeader);
  postContent.appendChild(postText);

  reactions.append(dogReaction, dogReactionCount, catReaction, catReactionCount);
  postFooter.appendChild(reactions);
  postFooter.appendChild(commentPostBtn);
  postsArticle.appendChild(postHeaderDiv, postContent, postFooter);
  wallMain.append(postInputSection, postInputSection);
  wallSection.append(wallHeader, wallMain);
  return wallSection;
};
