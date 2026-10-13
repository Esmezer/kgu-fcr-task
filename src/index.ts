import App from "./App.js";

let currentSlide = 0;

const setupSlider = (root: HTMLElement): void => {
  const track = root.querySelector<HTMLElement>("[data-slider-track]");
  const counter = root.querySelector<HTMLElement>("[data-slider-counter]");
  const next = root.querySelector<HTMLElement>("[data-slider-next]");

  if (!track || !next) {
    return;
  }

  const total = track.children.length;

  next.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % total;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    if (counter) {
      counter.textContent = `${currentSlide + 1} / ${total}`;
    }
  });
};

const render = (): void => {
  const appRoot = document.querySelector<HTMLDivElement>("#app");

  if (!appRoot) {
    return;
  }

  appRoot.innerHTML = App();
  setupSlider(appRoot);
};

window.onload = render;
