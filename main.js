import './style.scss';
import { modelLoader } from './3dModelLoader.js';

document.querySelector('#app').innerHTML = `
  <div>

  </div>
`;

modelLoader();
