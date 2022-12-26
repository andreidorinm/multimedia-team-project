import './style.scss';
import { modelLoader } from './3dModelLoader.js';
import { load } from './loader';

document.querySelector('#app').innerHTML = `
  <div>

  </div>
`;

modelLoader();
load();
