const PLACEHOLDER_IMAGE = "./assets/placeholder.gif";
const SLIDES_COUNT = 3;

const ContentViewer = (): string => {
  const slides = Array.from(
    { length: SLIDES_COUNT },
    () => `
      <div class="slider__slide">
        <img class="content-viewer__photo" src="${PLACEHOLDER_IMAGE}" alt="Изображение">
      </div>
    `,
  ).join("");

  return `
    <section class="content-viewer">
      <div class="slider" data-slider>
        <div class="slider__track" data-slider-track>
          ${slides}
        </div>
      </div>
      <div class="slider__counter" data-slider-counter>1 / ${SLIDES_COUNT}</div>
      <button class="content-viewer__next" type="button" data-slider-next>Дальше</button>
    </section>
  `;
};

export default ContentViewer;
