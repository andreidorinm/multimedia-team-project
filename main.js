import './style.scss';
import modelLoader from './loaders/modelLoader.js';
import progressBar from './components/progressBar.js';
import injectBackgroundText from './helpers/injectBackgroundText.js';

document.querySelector('.container-progress-bar').innerHTML = `
<div class="aesthetic-windows-95-loader">
    <div id="my-progress">
      <div id="my-bar"></div>
    </div>
  </div>
  <div class="aesthetic-windows-95-button">
    <div id="btn-click-me">
     <span class="btn-click-me-text">hai la cafelutza</span>
    </div>
  </div>
`;

document.querySelector('#threejs');
//add an event for barmove
document.querySelector('#btn-click-me').addEventListener('click', progressBar);

modelLoader();
injectBackgroundText();
