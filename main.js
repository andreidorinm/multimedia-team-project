import './style.scss';
import modelLoader from './loaders/modelLoader.js';
import progressBar from './components/progressBar.js';
import injectBackgroundText from './helpers/injectBackgroundText.js';
import memePage from './pages/memePage';

document.querySelector('.container-progress-bar').innerHTML = `
<div class="windows-95-loader">
    <div id="my-progress">
      <div id="my-bar">
      </div>
    </div>
  </div>
  <div class="windows-95-button">
    <div id="btn-click-me">
     <span class="btn-click-me-text">hai la cafelutza</span>
    </div>
  </div>
`;

document.querySelector('#threejs');
//add an event for barmove
document.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    memePage();
  }
});

document.querySelector('#btn-click-me').addEventListener('click', progressBar);

modelLoader();
injectBackgroundText();
