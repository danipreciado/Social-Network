import { home } from './templates/home';
import { signup } from './templates/signUp';
import { verification } from './templates/verification';

const root = document.getElementById('content');
export const routes = {
  '/': home,
  '/signup': signup,
  '/verification': verification,
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.appendChild(component());
};

root.appendChild(component());

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const btnSignUp = document.querySelector('.btnSignUp');
btnSignUp.addEventListener('click', () => {
  onNavigate('/signup');
});
