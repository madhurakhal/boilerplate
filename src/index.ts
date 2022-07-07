import { BoxBufferGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, ShaderMaterial, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// shaders files
import shader from "./shaders/fragment.fs.glsl";


const scene = new Scene();
const camera = new PerspectiveCamera(45, window.innerWidth/ window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const boxGeometry = new BoxBufferGeometry(1,1,1);

const boxMaterial = new ShaderMaterial({
    fragmentShader: shader
});

const box = new Mesh(
    boxGeometry,
    boxMaterial
);

scene.add(box);
camera.position.z = 5;
document.body.appendChild(renderer.domElement);


const orbitControl = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    orbitControl.update();
    renderer.render(scene, camera);
}
animate();