import home from '../templates/home';
import signup from '../templates/signUp';
import verification from '../templates/verification';
import getHash from './getHash';
import resolveRoutes from './resolveRoutes';

const routes = {
  '/': home,
  '/signup': signup,
  '/verification': verification,
};

const router = async () => {
  const content = null || document.getElementById('content');
  const message = 'ERROR 404';
  const hash = getHash();
  const route = await resolveRoutes(hash);
  const render = routes[route] ? routes[route] : message;
  content.innerHTML = await render;
};
export default router;
