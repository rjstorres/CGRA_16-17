/**
 * MyFin
 * @constructor
 */
 function MyFin(scene) {
 	CGFobject.call(this,scene);

    this.minS = 0;
    this.maxS = 1;
    this.minT = 0;
    this.maxT = 1;

 	this.initBuffers();
 };

 MyFin.prototype = Object.create(CGFobject.prototype);
 MyFin.prototype.constructor = MyFin;

 MyFin.prototype.initBuffers = function() {
 	this.vertices = [
 	//front trapezium
 	-0.789, -0.5, 0,
 	0.789, -0.5, 0,
 	-0.5, 0.5, 0,
 	0.5, 0.5, 0,

    //back trapezium
 	-0.789, -0.5, -0.1,
 	0.789, -0.5, -0.1,
 	-0.5, 0.5, -0.1,
 	0.5, 0.5, -0.1,

    //top face
 	-0.5, 0.5, 0,
 	0.5, 0.5, 0,
    -0.5, 0.5, -0.1,
    0.5, 0.5, -0.1,

    //bottom face
    -0.789, -0.5, -0.1,
    0.789, -0.5, -0.1,
    -0.789, -0.5, 0,
    0.789, -0.5, 0,

    //left face
    -0.789, -0.5, 0,
    -0.5, 0.5, 0,
    -0.789, -0.5, -0.1,
    -0.5, 0.5, -0.1,

    //right face
    0.5, 0.5, 0,
    0.789, -0.5, 0,
    0.5, 0.5, -0.1,
    0.789, -0.5, -0.1


 	];

 	this.indices = [
 	0, 1, 2, 
 	3, 2, 1,

 	4,6,5,
 	7,5,6,

 	8,9,10,
 	11,10,9,

 	12,13,14,
 	15,14,13,

 	16,17,18,
 	19,18,17,

 	20,21,22,
 	23,22,21
 	];

 	this.primitiveType = this.scene.gl.TRIANGLES;

    this.normals = [
    0,0,1,
    0,0,1,
    0,0,1,
    0,0,1,

    0,0,-1,
    0,0,-1,
    0,0,-1,
    0,0,-1,

    0,1,0,
    0,1,0,
    0,1,0,
    0,1,0,

    0,-1,0,
    0,-1,0,
    0,-1,0,
    0,-1,0,

    Math.cos(120*degToRad),Math.sin(120*degToRad),0,
    Math.cos(120*degToRad),Math.sin(120*degToRad),0,
    Math.cos(120*degToRad),Math.sin(120*degToRad),0,
    Math.cos(120*degToRad),Math.sin(120*degToRad),0,

    Math.cos(30*degToRad),Math.sin(30*degToRad),0,
    Math.cos(30*degToRad),Math.sin(30*degToRad),0,
    Math.cos(30*degToRad),Math.sin(30*degToRad),0,
    Math.cos(30*degToRad),Math.sin(30*degToRad),0
    ];

    /////  TEXTURES  ///// 

  this.texCoords = [
     this.minS, this.maxT,
     this.maxS, this.maxT,
     this.minS, this.minT,
     this.maxS, this.minT,

     this.minS, this.maxT,
     this.maxS, this.maxT,
     this.minS, this.minT,
     this.maxS, this.minT,

     this.minS, this.maxT,
     this.maxS, this.maxT,
     this.minS, this.minT,
     this.maxS, this.minT,

     this.minS, this.maxT,
     this.maxS, this.maxT,
     this.minS, this.minT,
     this.maxS, this.minT,

     this.minS, this.maxT,
     this.maxS, this.maxT,
     this.minS, this.minT,
     this.maxS, this.minT,

     this.minS, this.maxT,
     this.maxS, this.maxT,
     this.minS, this.minT,
     this.maxS, this.minT,
    ];

 	this.initGLBuffers();
 };

