import ContentViewer from "./widgets/ContentViewer/ContentViewer.js";

const App = (): string => {
  return `
    <main class="app">
      <h1 class="app__title">Галерея</h1>
      ${ContentViewer()}
    </main>
  `;
};

export default App;
