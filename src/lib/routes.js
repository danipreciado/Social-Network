// TODO: Replace the following with your app's Firebase project configuration
import home from '../templates/home';
import signUp from '../templates/signUp';
import verification from '../templates/verification';

const routes = {
  '/': home,
  '/signup': signUp,
  '/verification': verification,
};
const router = async (pathname = window.location.pathname) => {
  const content = null || document.getElementById('content');
  const template = routes[pathname];
  if (template) {
    content.innerHTML = await template();
  } else {
    content.innerHTML = 'La página solicitada no existe';
  }
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

  router(pathname);
};

window.addEventListener('popstate', () => {
  router();
});
export default router;

/* const router = async () => {
  const content = null || document.getElementById('content');
  const template = routes[window.location.pathname];
  if (template) {
    content.innerHTML = await template();
  } else {
    content.innerHTML = 'La página solicitada no existe';
  }
};
export default router; */

/* const router = async () => {
  const content = null || document.getElementById('content');
  const render = routes;
  content.innerHTML = await render();
};
export default router; */

/* const root = document.getElementById('content'); */

/* const router = async () => {
  const content = null || document.getElementById('content');
  let request = window.location.hash.slice(1).toLowerCase().split('/')[1];
  let template = routes[`/${request}`];
  if (template) {
    content.innerHTML = await template;
  } else {
    content.innerHTML = 'La página solicitada no existe';
  }
}; */

/* export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.appendChild(component());
};

root.appendChild(component()); */
