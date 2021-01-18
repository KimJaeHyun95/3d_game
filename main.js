let renderer, scene, camera, controls;
let WIDTH, HEIGHT;
let sphere, skyMesh, spotLight;
let stumbling_block1, stumbling_block2, stumbling_block3, stumbling_block4, stumbling_block5, stumbling_block6, stumbling_block7, stumbling_block8, stumbling_block9, stumbling_block10, stumbling_block11, stumbling_block12, stumbling_block13;
let step = 0;
let x_speed = 3 + 2 * Math.random();
let y_speed = 0;
let z_speed = 0;
stageResize();
init();

function aftergame() {
	camera.lookAt(sphere.position.x, sphere.position.y, sphere.position.z);


	camera.updateProjectionMatrix();
	renderer.render(scene, camera);
	requestAnimationFrame(aftergame);
}

function init() {
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(WIDTH, HEIGHT);
	document.body.appendChild(renderer.domElement);
	
	//배경을 우주사진으로
	let imageLoader = new THREE.TextureLoader();
	imageLoader.load("space.jpg", function(data){
		let material_univ = new THREE.MeshBasicMaterial({
			map : data,
			side : THREE.BackSide
		})
		let geometry_univ = new THREE.SphereGeometry(500,32,32);

		mesh = new THREE.Mesh(geometry_univ, material_univ);
		scene.add(mesh);
	});

	//조명 생성
	scene = new THREE.Scene();	
	let light = new THREE.HemisphereLight(0xc0daf5, 0xc0daf5, .3);
	light.position.set(-50, 50, -50);
	scene.add(light);

	spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(600, 60, 60);
	scene.add(spotLight);
	spotLight.position.set(-700, 60, 60);
	scene.add(spotLight);

	//공 생성
	let sphereGeometry = new THREE.SphereGeometry(4, 32, 32);
	let sphereMeterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
	sphere = new THREE.Mesh(sphereGeometry, sphereMeterial);
	sphere.castShadow = true;
	sphere.position.x = -500;
	sphere.position.y = 4;
	sphere.position.z = 0;
	scene.add(sphere);

	camera = new THREE.PerspectiveCamera(55, WIDTH / HEIGHT, .1, 1000);
	camera.position.set(sphere.position.x, sphere.position.y + 20, sphere.position.z);

	//바닥면 생성
	let planeGeometry = new THREE.PlaneGeometry(1000, 50, 1, 1);
	let planeMaterial = new THREE.MeshPhongMaterial({ color: 0x2222ff });
	let plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.receiveShadow = true;
	plane.rotation.x = -0.5 * Math.PI;
	scene.add(plane);

	//장애물 생성
	let cubeGeometry = new THREE.BoxGeometry(1, 10, 40);
	let cubeMeterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
	stumbling_block1 = new THREE.Mesh(cubeGeometry, cubeMeterial);
	stumbling_block1.castShadow = true;
	stumbling_block1.position.x = -300;
	stumbling_block1.position.y = 5;
	stumbling_block1.position.z = 5;
	scene.add(stumbling_block1);

	cubeGeometry = new THREE.BoxGeometry(40, 10, 10);
	cubeMeterial = new THREE.MeshPhongMaterial({ color: 0xffff00 });
	stumbling_block2 = new THREE.Mesh(cubeGeometry, cubeMeterial);
	stumbling_block2.castShadow = true;
	stumbling_block2.position.x = -100;
	stumbling_block2.position.y = 5;
	stumbling_block2.position.z = 0;
	scene.add(stumbling_block2);

	cubeGeometry = new THREE.BoxGeometry(40, 10, 10);
	cubeMeterial = new THREE.MeshPhongMaterial({ color: 0xffff00 });
	stumbling_block3 = new THREE.Mesh(cubeGeometry, cubeMeterial);
	stumbling_block3.castShadow = true;
	stumbling_block3.position.x = 0;
	stumbling_block3.position.y = 5;
	stumbling_block3.position.z = 0;
	scene.add(stumbling_block3);

	cubeGeometry = new THREE.BoxGeometry(1, 20, 10);
	cubeMeterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
	stumbling_block4 = new THREE.Mesh(cubeGeometry, cubeMeterial);
	stumbling_block4.castShadow = true;
	stumbling_block4.position.x = 200;
	stumbling_block4.position.y = 20;
	stumbling_block4.position.z = -20;
	scene.add(stumbling_block4);

	cubeGeometry = new THREE.BoxGeometry(1, 20, 10);
	cubeMeterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
	stumbling_block5 = new THREE.Mesh(cubeGeometry, cubeMeterial);
	stumbling_block5.castShadow = true;
	stumbling_block5.position.x = 200;
	stumbling_block5.position.y = 20;
	stumbling_block5.position.z = -10;
	scene.add(stumbling_block5);


	cubeGeometry = new THREE.BoxGeometry(1, 20, 10);
	cubeMeterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
	stumbling_block6 = new THREE.Mesh(cubeGeometry, cubeMeterial);
	stumbling_block6.castShadow = true;
	stumbling_block6.position.x = 200;
	stumbling_block6.position.y = 20;
	stumbling_block6.position.z = 0;
	scene.add(stumbling_block6);

	cubeGeometry = new THREE.BoxGeometry(1, 20, 10);
	cubeMeterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
	stumbling_block7 = new THREE.Mesh(cubeGeometry, cubeMeterial);
	stumbling_block7.castShadow = true;
	stumbling_block7.position.x = 200;
	stumbling_block7.position.y = 20;
	stumbling_block7.position.z = 10;
	scene.add(stumbling_block7);

	cubeGeometry = new THREE.BoxGeometry(1, 20, 10);
	cubeMeterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
	stumbling_block8 = new THREE.Mesh(cubeGeometry, cubeMeterial);
	stumbling_block8.castShadow = true;
	stumbling_block8.position.x = 200;
	stumbling_block8.position.y = 20;
	stumbling_block8.position.z = 20;
	scene.add(stumbling_block8);

	sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
	sphereMeterial = new THREE.MeshPhongMaterial({ color: 0x00ffff });
	stumbling_block9 = new THREE.Mesh(sphereGeometry, sphereMeterial);
	stumbling_block9.castShadow = true;
	stumbling_block9.position.x = 400;
	stumbling_block9.position.y = 0;
	stumbling_block9.position.z = -20;
	scene.add(stumbling_block9);

	sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
	sphereMeterial = new THREE.MeshPhongMaterial({ color: 0x00ffff });
	stumbling_block10 = new THREE.Mesh(sphereGeometry, sphereMeterial);
	stumbling_block10.castShadow = true;
	stumbling_block10.position.x = 400;
	stumbling_block10.position.y = 0;
	stumbling_block10.position.z = -10;
	scene.add(stumbling_block10);

	sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
	sphereMeterial = new THREE.MeshPhongMaterial({ color: 0x00ffff });
	stumbling_block11 = new THREE.Mesh(sphereGeometry, sphereMeterial);
	stumbling_block11.castShadow = true;
	stumbling_block11.position.x = 400;
	stumbling_block11.position.y = 0;
	stumbling_block11.position.z = 0;
	scene.add(stumbling_block11);

	sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
	sphereMeterial = new THREE.MeshPhongMaterial({ color: 0x00ffff });
	stumbling_block12 = new THREE.Mesh(sphereGeometry, sphereMeterial);
	stumbling_block12.castShadow = true;
	stumbling_block12.position.x = 400;
	stumbling_block12.position.y = 0;
	stumbling_block12.position.z = 10;
	scene.add(stumbling_block12);

	sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
	sphereMeterial = new THREE.MeshPhongMaterial({ color: 0x00ffff });
	stumbling_block13 = new THREE.Mesh(sphereGeometry, sphereMeterial);
	stumbling_block13.castShadow = true;
	stumbling_block13.position.x = 400;
	stumbling_block13.position.y = 0;
	stumbling_block13.position.z = 20;
	scene.add(stumbling_block13);

	render();
	guiSet();
}

function guiSet() {

	let gui = new dat.GUI();

	let cam = gui.addFolder('Camera');
	cam.add(camera.position, 'x', -500, 500).listen();
	cam.add(camera.position, 'y', -500, 500).listen();
	cam.add(camera.position, 'z', -500, 500).listen();
	cam.add(camera, 'fov', 1, 150).listen();
	cam.open();


}

function render() {
	//isGAMEOVER가 true이면 render()이 종료
	if (isGAMEOVER()) {
		alert("fail");
		aftergame();
		return;
	}


	camera.lookAt(sphere.position.x + 30, sphere.position.y, sphere.position.z);
	
	//카메라 움직임
	camera.position.set(sphere.position.x - 30, sphere.position.y + 40, sphere.position.z * 2 / 3);

	//장애물 움직임
	step += 0.1;
	stumbling_block2.position.z = 20 * Math.sin(step);
	stumbling_block3.position.z = -20 * Math.sin(step);

	stumbling_block4.position.y = 20 - 10 * Math.sin(step);
	stumbling_block5.position.y = 20 + 10 * Math.sin(step);
	stumbling_block6.position.y = 20 - 10 * Math.sin(step);
	stumbling_block7.position.y = 20 + 10 * Math.sin(step);
	stumbling_block8.position.y = 20 - 10 * Math.sin(step);

	stumbling_block9.position.y = -20 * Math.sin(step);
	stumbling_block9.position.z = -20 * Math.cos(step);
	stumbling_block10.position.y = -10 * Math.sin(step);
	stumbling_block10.position.z = -10 * Math.cos(step);
	stumbling_block12.position.y = 10 * Math.sin(step);
	stumbling_block12.position.z = 10 * Math.cos(step);
	stumbling_block13.position.y = 20 * Math.sin(step);
	stumbling_block13.position.z = 20 * Math.cos(step);

	//공 움직임
	if (sphere.position.z > 25) {
		sphere.position.x += 1.5;
		y_speed += 1;
		sphere.position.y -= y_speed * y_speed / 500;
		sphere.position.z += 1;
		if (sphere.position.y < -200) {
			alert("fail");
			return;
		}
	} else if (sphere.position.z < -25) {
		sphere.position.x += 1.5;
		y_speed += 1;
		sphere.position.y -= y_speed * y_speed / 500;
		sphere.position.z -= 1;
		if (sphere.position.y < -200) {
			alert("fail");
			return;
		}
	} else {
		sphere.position.x += x_speed;
		sphere.position.z += z_speed;

		if (z_speed > 0.1) {
			z_speed *= 0.9;
		} else if (z_speed < 0.1) {
			z_speed *= 0.9;
		} else {
			z_speed = 0;
		}
	}

	camera.updateProjectionMatrix();
	renderer.render(scene, camera);

	if (sphere.position.x > 495) {
		alert("win");
		return;
	}
	//redering이 계속 반복되게 해준다.
	requestAnimationFrame(render);

}

//화면 크기가 조절 될 떄 자연스러운 움직임을 주는 함수실행
window.addEventListener('resize', stageResize);

function stageResize() {
	WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;

	if (renderer != undefined) {
		renderer.setSize(WIDTH, HEIGHT);
		camera.aspect = WIDTH / HEIGHT;
		camera.updateProjectionMatrix();
	}
}


//방향키(좌,우)를 이용하여 공을 움직임, m키를 눌러 배경음 on/off
window.addEventListener('keydown', event => {
	if (event.keyCode == '37') {
		z_speed -= 0.7;
	}
	else if (event.keyCode == '39') {
		z_speed += 0.7;
	}
	else if (event.keyCode == '77') {
		sound();
	}

})
