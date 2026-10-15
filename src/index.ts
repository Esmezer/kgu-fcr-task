import App from "./App.js";

const setupIpViewer = (root: HTMLElement): void => {
  const button = root.querySelector<HTMLButtonElement>("[data-ip-show]");
  const result = root.querySelector<HTMLElement>("[data-ip-result]");

  if (!button || !result) {
    return;
  }

  button.addEventListener("click", () => {
    result.classList.add("ip-viewer__result_error");
    result.textContent = "Ошибка: API ещё не подключён";
  });
};

const render = (): void => {
  const appRoot = document.querySelector<HTMLDivElement>("#app");

  if (!appRoot) {
    return;
  }

  appRoot.innerHTML = App();
  setupIpViewer(appRoot);
};

window.onload = render;
