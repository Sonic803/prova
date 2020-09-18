THREE.Cache.enabled = true;

var loader = new THREE.FileLoader();

//load a text file and output the result to the console
loader.load(
	// resource URL
	'../shader1.js',

	// onLoad callback
	function ( data ) {
		// output the text to the console
		console.log( data )
    verte=data;
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.error( 'An error happened' );
	}
);


loader.load(
	// resource URL
	'../shader2.js',

	// onLoad callback
	function ( data ) {
		// output the text to the console
		console.log( data )
    frage=data;
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.error( 'An error happened' );
	}
);
