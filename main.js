import './style.scss';
import './node_modules/aesthetic-css/aesthetic.css';
import modelLoader from './loaders/modelLoader.js';
import progressBar from './components/progressBar.js';
import elemHandler from './handlers/elemHandler';
import memePage from './pages/memePage';

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

document.querySelector('#threejs').innerHTML = `

`;

//add an event for barmove

modelLoader();
memePage();
