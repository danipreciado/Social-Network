import { home } from './templates/home';
import { signIn } from './templates/signIn';
import { signup } from './templates/signUp';
import verification from './templates/verification';
import { page404 } from './templates/page404';
import { wall } from './templates/wall';
// import { authFunction, googleLogin } from './lib/config/auth';

const root = document.getElementById('content');
const routes = [
  { path: '/', component: home },
  { path: '/signup', component: signup },
  { path: '/verification', component: verification },
  { path: '/page404', component: page404 },
  { path: '/signin', component: signIn },
  { path: '/wall', component: wall },
];

const defaultRoute = '/';

function onNavigate(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    if (hash === '/signin' || hash === '/signup') {
      // elimina todos sus hijos. No duplica home cuando navegas entre modales;
      while (root.childNodes.length > 0) {
        root.removeChild(root.lastChild);
      }
      root.appendChild(home(onNavigate));
    } else {
      while (root.firstChild) {
        root.removeChild(root.firstChild);
      }
    }
    root.appendChild(route.component(onNavigate));
  } else {
    onNavigate('/page404');
  }
}
// window.onpopstate = () => {
//   onNavigate(window.location.pathname);
// };

window.addEventListener('popstate', () => {
  const path = window.location.pathname;
  onNavigate(path);
});

onNavigate(window.location.pathname || defaultRoute);
// const onAuthSuccess = (pathname) => {
//   /* root.removeChild(root.firstChild); */
//   // aqui también agregue clearContent y comenté lo de arriba
//   clearContent();
//   onNavigate(pathname);
// };

// function authSignUp() {
//   onNavigate('/signup');
//   console.log(root.childNodes);
//   const btnRegister = document.querySelector('.signUp-form');
//   const email = document.getElementById('userEmail');
//   const password = document.getElementById('userPassword');

//   authFunction(btnRegister, email, password, onAuthSuccess);

/*   .then(() => onNavigate('/verification'))
    .catch((error) => console.error(error)); */
// authFunction(btnRegister, email, password,);
// console.log(authFunction);
// btnRegister.addEventListener('submit', () => {
//   onNavigate('/verification');
/* console.log('se lee o no?'); */
// }
// Comente esto porque no se estaba usando
/* function close() {
  const closeBtn = document.querySelector('.close');
  // const modal = document.querySelector('.signUp-section');

  closeBtn.addEventListener('click', () => {
    // modal.style.display = 'none';
    // window.history.back();
    onAuthSuccess('/');
  });
} */

// function linkSignInFunction() {
//   const linkSignIn = document.querySelector('#link-signIn');
//   if (linkSignIn) {
//     linkSignIn.addEventListener('click', () => {
//       root.removeChild(root.firstChild);
//       onNavigate('/signin');
//       console.log(root.childNodes);
//     });
//   }
// }

// function linkSignUpFunction() {
//   const linkSignUp = document.querySelector('#link-signUp');
//   if (linkSignUp) {
//     linkSignUp.addEventListener('click', () => {
//       authSignUp();
//     });
//   }
// }

// /* function signUpScreen() {
//   authSignUp();
//   close();
// } */

// const btnSignUp = document.querySelector('.btnSignUp');
// if (btnSignUp) {
//   btnSignUp.addEventListener('click', () => {
//     onNavigate('/signup');
//     linkSignUpFunction();
//   });
// }
// let btnGoogle = document.querySelector('.btnGoogle');
// if (btnGoogle) {
//   btnGoogle.addEventListener('click', () => {
//     console.log('registra el click?');
//     googleLogin();
//     // onNavigate('/signin');
//   });
// }
// function googleEvent() {
//   btnGoogle = document.querySelector('.btnGoogle');
//   if (btnGoogle) {
//     btnGoogle.addEventListener('click', () => {
//       console.log('registra el click?');
//       googleLogin(onNavigate);
//     });
//   }
// }

// const btnSignIn = document.querySelector('.btnSignIn');
// if (btnSignIn) {
//   btnSignIn.addEventListener('click', () => {
//     onNavigate('/signin');
//     googleEvent();
//     linkSignInFunction();
//   });
// }

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
