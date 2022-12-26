import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function load() {
  const manager = new THREE.LoadingManager();
  manager.onStart = function (url, itemsLoaded, itemsTotal) {
    
  };

  manager.onLoad = function () {};

  manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    console.log(
      'Loading file: ' +
        url +
        '.\nLoaded ' +
        itemsLoaded +
        ' of ' +
        itemsTotal +
        ' files.'
    );
  };

  manager.onError = function (url) {
    console.log('There was an error loading ' + url);
  };

  const loader = new GLTFLoader(manager);
  loader.load('/models/alfa.glb', function (object) {
    console.log(object);
  });
}
