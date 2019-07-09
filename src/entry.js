/**
 * entry.js
 * 
 * This is the first file loaded. It sets up the Renderer, 
 * Scene and Camera. It also starts the render loop and 
 * handles window resizes.
 * 
 */

// import { WebGLRenderer, PerspectiveCamera, Scene, Vector3, PointLight, Object3D, Mesh, MeshBasicMaterial } from 'three';
import * as THREE from 'three';

import SeedScene from './objects/Scene.js';

import './stylesheets/style.scss';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera();
const renderer = new THREE.WebGLRenderer({ antialias: true });
const seedScene = new SeedScene();

let mouseX = 0, mouseY = 0;

// scene
scene.add(seedScene);

// camera
// camera.position.set(6,3,-500);

camera.lookAt(new THREE.Vector3(0, 0, 0));
camera.setFocalLength(100);

let camera_null = new THREE.Object3D();
scene.add(camera_null);
camera_null.add(camera);
camera.position.set(1300, 0, 0);
camera.lookAt(camera_null.position);

// renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000, 1);

//lights
let sphere = new THREE.SphereBufferGeometry(0.5, 16, 8);
let light1 = new THREE.PointLight(0xff0040, 2, 200);
light1.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xff0040 })));
scene.add(light1);

let light2 = new THREE.PointLight(0x0040ff, 2, 200);
light2.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x0040ff })));
scene.add(light2);

// render loop
const onAnimationFrameHandler = (timeStamp) => {
  renderer.render(scene, camera);

  var time = Date.now() * 0.0005;

  light1.position.x = Math.sin(time * 0.7) * 150;
  light1.position.y = Math.cos(time * 0.5) * 180;
  light1.position.z = Math.cos(time * 0.3) * 150;

  light2.position.x = Math.cos(time * 0.3) * 150;
  light2.position.y = Math.sin(time * 0.5) * 130;
  light2.position.z = Math.sin(time * 0.7) * 150;


  camera_null.rotation.y = map(mouseX, 0, window.innerWidth, Math.PI * 0.6, Math.PI * 0.4);
  camera_null.rotation.x = map(mouseY, 0, window.innerHeight, -Math.PI * 0.1, Math.PI * 0.1);

  // camera.position.x += ( mouseX - camera.position.x ) * .05;
  // camera.position.y += ( - mouseY - camera.position.y ) * .05;

  seedScene.update && seedScene.update(timeStamp);
  window.requestAnimationFrame(onAnimationFrameHandler);
}
window.requestAnimationFrame(onAnimationFrameHandler);

// resize
const windowResizeHanlder = () => {
  const { innerHeight, innerWidth } = window;
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
};
windowResizeHanlder();
window.addEventListener('resize', windowResizeHanlder);

// dom
document.body.style.margin = 0;
document.body.appendChild(renderer.domElement);



// get mouseX and mouseY
document.addEventListener('mousemove', onDocumentMouseMove, false);

function onDocumentMouseMove(event) {
  // mouseX = ( event.clientX - windowHalfX ) / 2;
  // mouseY = ( event.clientY - windowHalfY ) / 2;
  mouseX = event.clientX;
  mouseY = event.clientY;
}

const normalize = (val, max, min) => (val - min) / (max - min);

/**
 * Re-maps a number from one range to another.
 * <br><br>
 * In the first example above, the number 25 is converted from a value in the
 * range of 0 to 100 into a value that ranges from the left edge of the
 * window (0) to the right edge (width).
 *
 * @method map
 * @param  {Number} value  the incoming value to be converted
 * @param  {Number} start1 lower bound of the value's current range
 * @param  {Number} stop1  upper bound of the value's current range
 * @param  {Number} start2 lower bound of the value's target range
 * @param  {Number} stop2  upper bound of the value's target range
 * @param  {Boolean} [withinBounds] constrain the value to the newly mapped range
 * @return {Number}        remapped number
 */

const map = (n, start1, stop1, start2, stop2, withinBounds) => {
  let newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval;
  }
  if (start2 < stop2) {
    return this.constrain(newval, start2, stop2);
  } else {
    return this.constrain(newval, stop2, start2);
  }
};