import App from "./App.js";

const render = (): void => {
  const appRoot = document.querySelector<HTMLDivElement>("#app");

  if (appRoot) {
    appRoot.innerHTML = App();
  }
};

window.onload = render;
