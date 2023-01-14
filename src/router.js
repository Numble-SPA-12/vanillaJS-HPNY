import { Edit, Home, NotFound, Post, Upload } from "./pages/index.js";

const root = document.querySelector("#app");

const routes = [
  { path: "/", component: Home },
  { path: "/post/:id", component: Post },
  { path: "/upload", component: Upload },
  { path: "/edit/:id", component: Edit },
];

const render = (path) => {
  const matchedRoutes = routes.map((route) => {
    const isMatch = path.match(pathToRegex(route.path));
    return { route, isMatch };
  });

  const match = matchedRoutes.find(
    (matchedRoute) => matchedRoute.isMatch !== null
  );

  match ? new match.route.component(root) : new NotFound(root);
};

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

export const navigateTo = (path) => {
  window.history.pushState({}, "", window.location.origin + path);
  render(path);
};

export const initializeRouter = () => {
  window.addEventListener("DOMContentLoaded", () => {
    render(window.location.pathname);
  });
};
