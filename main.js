import './style.css';
import * as THREE from 'three';
//import { BlendingEquation } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

//setup
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);


//Geometry and Materials
const geometry = new THREE.TorusGeometry(10,1,16,100);
const material = new THREE.MeshStandardMaterial( {color: 0x03c2fc} );
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg');
const jupiterNormal = new THREE.TextureLoader().load('JupNorm.jpg');
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
  map: jupiterTexture,
  normalMap: jupiterNormal,
  })
);

scene.add(jupiter);

//Lighting
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(25,25,25);

scene.add(pointLight);

const ambientLight =  new THREE.AmbientLight(0xffffff);

scene.add(ambientLight);

//Helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper);
//scene.add(gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

//AddStars
function addStar(){
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff});
  const star = new THREE.Mesh ( geometry, material );
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));
  star.position.set(x, y, z);
  scene.add( star );

}

Array(200).fill().forEach(addStar);

//Background
const spaceTexture = new THREE.TextureLoader().load('galaxy.jpg');
scene.background = spaceTexture;


//Animation
function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();

  renderer.render(scene, camera);

}


animate();