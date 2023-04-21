import home from './templates/home';
import { signup } from './templates/signUp';
import verification from './templates/verification';

const root = document.getElementById('content');
const routes = {
  '/': home,
  '/signup': signup,
  '/verification': verification,
};
export const onNavigate = (pathname) => {
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

root.appendChild(component());
// const signupRoute = signup;
// const routes = {
//   '/': home,
//   '/signup': signupRoute,
//   '/verification': verification,
// };
// const router = async () => {
//   const content = null || document.getElementById('content');
//   const message = 'ERROR 404';
//   const hash = getHash();
//   const route = await resolveRoutes(hash);
//   const render = routes[route] ? routes[route] : message;
//   content.appendChild(render());
// };
// const router = async (pathname = window.location.pathname) => {
//   const content = null || document.getElementById('content');
//   const template = routes[pathname];
//   if (template) {
//     content.innerHTML = await template();
//   } else {
//     content.innerHTML = 'La página solicitada no existe';
//   }
// };

// export const onNavigate = (pathname) => {
//   window.history.pushState({}, pathname, window.location.origin + pathname);

//   router(pathname);
// };

// const onNavigate = (pathname) => {
//   window.history.pushState({}, pathname, window.location.origin + pathname);
//   router();
// };

// window.addEventListener('load', router);
// window.addEventListener('changestate', router);
// export { onNavigate };

// export default router;

// window.addEventListener('load', router);
// window.addEventListener('changehash', router);
