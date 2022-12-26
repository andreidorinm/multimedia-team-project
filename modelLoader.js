import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function modelLoader() {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  //camera that looks at our object
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(5, 5, 2.5);

  // nice ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // controls for orbiting around object
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', () => renderer.render(scene, camera));
  controls.target.set(0, 0, 0);
  controls.update();

  //load the gltf model
  const loader = new GLTFLoader();
  loader.load(
    'models/cafea.glb',
    (gltf) => {
      const model = gltf.scene;
      model.position.set(0, 0, 0);
      scene.add(model);
      renderer.render(scene, camera);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
}
