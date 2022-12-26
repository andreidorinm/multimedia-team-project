import './style.scss';
import { modelLoader } from './loaders/modelLoader.js';
import { barMove } from './components/progressBar.js';

document.querySelector('.container-progress-bar').innerHTML = `
    <div class="my-progress">
      <div id="my-bar"></div>
    </div>
    <div class="button"></div >
`;

document.querySelector('#threejs').innerHTML = `

`;

//add an event for barmove
document.querySelector('.button').addEventListener('click', barMove);

modelLoader();
