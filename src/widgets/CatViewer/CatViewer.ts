const CAT_IMAGE = "./assets/cat.jpg";
const SLIDES_COUNT = 3;

const CatViewer = (): string => {
  const slides = Array.from(
    { length: SLIDES_COUNT },
    () => `
      <div class="slider__slide">
        <img class="cat-viewer__photo" src="${CAT_IMAGE}" alt="Фото котика">
      </div>
    `,
  ).join("");

  return `
    <section class="cat-viewer">
      <div class="slider" data-slider>
        <div class="slider__track" data-slider-track>
          ${slides}
        </div>
      </div>
      <div class="slider__counter" data-slider-counter>1 / ${SLIDES_COUNT}</div>
      <button class="cat-viewer__next" type="button" data-slider-next>Дальше</button>
    </section>
  `;
};

export default CatViewer;
