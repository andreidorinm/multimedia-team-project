import './style.scss';
import { modelLoader } from './modelLoader.js';

document.querySelector('#app').innerHTML = `
  <div>
  </div>
`;

modelLoader();
