var container;
var camera, scene, renderer;
var uniforms;

setTimeout(init, 300);
setTimeout(animate, 400);


function init() {
  console.log(frage);

  container = document.getElementById( 'container' );

  camera = new THREE.Camera();
  camera.position.z = 1;

  scene = new THREE.Scene();

  var geometry = new THREE.PlaneBufferGeometry( 2, 2 );

  uniforms = {
      u_time: { type: "f", value: 1.0 },
      u_resolution: { type: "v2", value: new THREE.Vector2() },
      u_mouse: { type: "v2", value: new THREE.Vector2() }
  };

  var material = new THREE.ShaderMaterial( {
      uniforms: uniforms,
      vertexShader:verte.data,
      fragmentShader:frage.data
    //  vertexShader: document.getElementById( 'vertexShader' ).textContent,
    //  fragmentShader: document.getElementById( 'fragmentShader' ).textContent
  });

    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );

    container.appendChild( renderer.domElement );

    onWindowResize();
    window.addEventListener( 'resize', onWindowResize, false );

    document.onmousemove = function(e){
      uniforms.u_mouse.value.x = e.pageX
      uniforms.u_mouse.value.y = e.pageY
    }
}

function onWindowResize( event ) {
    renderer.setSize( 2000, 2000);
    uniforms.u_resolution.value.x = 2000;
    uniforms.u_resolution.value.y = 2000;
}

function animate() {
    requestAnimationFrame( animate );
    render();
}

function render() {
    uniforms.u_time.value += 0.01;
    renderer.render( scene, camera );
}
