// TODO: Replace the following with your app's Firebase project configuration
import home from '../templates/home';
import signUp from '../templates/signUp';
import verification from '../templates/verification';

const routes = {
  '/home': home,
  '/signup': signUp,
  '/verification': verification,
};


const router = async () => {
  const content = null || document.getElementById('content');
  let request = window.location.hash.slice(1).toLowerCase().split('/')[1];
  let template = routes[`/${request}`];
  if (template) {
    content.innerHTML = await template;
  } else {
    content.innerHTML = 'La página solicitada no existe';
  }
};

// const router = async () => {
//   const content = null || document.getElementById('content');

//   const render = routes;
//   content.innerHTML = await render()
// };
export default router;
