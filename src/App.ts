import CatViewer from "./widgets/CatViewer/CatViewer.js";

const App = (): string => {
  return `
    <main class="app">
      <h1 class="app__title">Котики</h1>
      ${CatViewer()}
    </main>
  `;
};

export default App;
