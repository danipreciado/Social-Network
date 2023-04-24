export const onNavigate = (pathname) => {
  const root = document.getElementById('content');
  const routes = {
    '/': home,
    '/signup': signup,
    '/verification': verification,
  };

  window.history.pushState({}, pathname, window.location.origin + pathname);

  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};
