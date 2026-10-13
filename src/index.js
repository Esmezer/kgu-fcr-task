import App from './App.js';


const render = () => {
    const appRoot = document.querySelector('#app');
    
    appRoot.innerHTML = App();
}

window.onload = render;