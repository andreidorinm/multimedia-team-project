import './style.scss';
import modelLoader from './loaders/modelLoader.js';
import progressBar from './components/progressBar.js';

document.querySelector('.container-progress-bar').innerHTML = `
    <div class="my-progress">
      <div id="my-bar"></div>
    </div>
    <div class="btn-click-me">
     <span class="btn-click-me-text">hai la cafelutza</span>
    </div>
`;

document.querySelector('#threejs').innerHTML = `

`;

//add an event for barmove
document.querySelector('.btn-click-me').addEventListener('click', progressBar);

modelLoader();
