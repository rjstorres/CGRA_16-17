/**
 * MyCircle
 * @constructor
 */
 /*
  function MyCircle(scene, slices, radius) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.radius = radius;

 	this.initBuffers();
 };

 MyCircle.prototype = Object.create(CGFobject.prototype);
 MyCircle.prototype.constructor = MyCircle;

 MyCircle.prototype.initBuffers = function() {
 	
	//Declaracao dos arrays
 	
	this.vertices = [];
	this.indices = [];
	this.normals = [];
	this.texCoords = [];

	var teta = ((360*degToRad)/this.slices);

	this.vertices.push(0,0,0);
	this.normals.push(-1,0,0);
	this.texCoords.push(0.5,0.5);

	for(i=0; i < this.slices; i++){
		var ang1 = teta*i;
			this.vertices.push(Math.cos(ang1)*this.radius,Math.sin(ang1)*this.radius,0) ;	
			this.normals.push(-1,0,0);
	}
	this.vertices.push(0,0,0);
	this.normals.push(1,0,0);
	for(i=0; i < this.slices; i++){
	//	var ang2 = teta*i-(180*degToRad);
			this.vertices.push(Math.cos(teta*i)*this.radius,Math.sin(teta*i)*this.radius,0) ;	
			 this.normals.push(1,0,0);
	};

	for(i=0; i < this.slices; i++){
		var ang1 = teta*i;
		if(i<this.slices/4){
			this.texCoords.push(0.5+Math.cos(ang1)/2,0.5-Math.sin(ang1)/2);
		}
		if(i>=this.slices/4 && i<this.slices/2){
			this.texCoords.push(0.5-Math.cos(ang1)/-2,0.5-Math.sin(ang1)/2);
		}
		if(i>=this.slices/2 && i<3*this.slices/4){
			this.texCoords.push(0.5-Math.cos(ang1)/-2,0.5+Math.sin(ang1)/-2);
		}
		if(i>=3*this.slices/4){
			this.texCoords.push(0.5+Math.cos(ang1)/2,0.5+Math.sin(ang1)/-2);
		}
	}

	this.texCoords.push(1.5,1.5);
	for(i=0; i < this.slices; i++){
		var ang1 = teta*i;
		if(i<this.slices/4){
			this.texCoords.push(1+0.5+Math.cos(ang1)/2,1+0.5-Math.sin(ang1)/2);
		}
		if(i>=this.slices/4 && i<this.slices/2){
			this.texCoords.push(1+0.5-Math.cos(ang1)/-2,1+0.5-Math.sin(ang1)/2);
		}
		if(i>=this.slices/2 && i<3*this.slices/4){
			this.texCoords.push(1+0.5-Math.cos(ang1)/-2,1+0.5+Math.sin(ang1)/-2);
		}
		if(i>=3*this.slices/4){
			this.texCoords.push(1+0.5+Math.cos(ang1)/2,1+0.5+Math.sin(ang1)/-2);
		}
	}


	for(i=0; i<this.slices-1; i++){
		this.indices.push(0,1+i,2+i);
	};
	this.indices.push(0,this.slices,1);
	for(j=0; j<this.slices-1; j++){
//	    var thing = this.slices+1+j;
	    var thing = this.slices+1+j;
		this.indices.push(this.slices+1,2+thing,1+thing);
	};
	this.indices.push(this.slices+1,this.slices+2,this.slices*2+1);




 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();

 }*/

 /**
 * MyCircle
 * @constructor
 */
  function MyCircle(scene, slices, radius) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.radius = radius;

 	this.initBuffers();
 };

 MyCircle.prototype = Object.create(CGFobject.prototype);
 MyCircle.prototype.constructor = MyCircle;

 MyCircle.prototype.initBuffers = function() {
 	
	//Declaracao dos arrays
 	
	this.vertices = [];
	this.indices = [];
	this.normals = [];
	this.texCoords = [];

	var teta = ((360*degToRad)/this.slices);

	this.vertices.push(0,0,0);
	this.normals.push(0,0,1);
	this.texCoords.push(0.5,0.5);

	for(i=0; i < this.slices; i++){
		var ang1 = teta*i;
			this.vertices.push(Math.cos(ang1)*this.radius,Math.sin(ang1)*this.radius,0) ;	
			this.normals.push(0,0,1);
	}
	this.vertices.push(0,0,0);
	this.normals.push(0,0,-1);
	for(i=0; i < this.slices; i++){
	//	var ang2 = teta*i-(180*degToRad);
			this.vertices.push(Math.cos(teta*i)*this.radius,Math.sin(teta*i)*this.radius,0) ;	
			 this.normals.push(0,0,-1);
	};

	for(i=0; i < this.slices; i++){
		var ang1 = teta*i;
		if(i<this.slices/4){
			this.texCoords.push(0.5+Math.cos(ang1)/2,0.5-Math.sin(ang1)/2);
		}
		if(i>=this.slices/4 && i<this.slices/2){
			this.texCoords.push(0.5-Math.cos(ang1)/-2,0.5-Math.sin(ang1)/2);
		}
		if(i>=this.slices/2 && i<3*this.slices/4){
			this.texCoords.push(0.5-Math.cos(ang1)/-2,0.5+Math.sin(ang1)/-2);
		}
		if(i>=3*this.slices/4){
			this.texCoords.push(0.5+Math.cos(ang1)/2,0.5+Math.sin(ang1)/-2);
		}
	}

	this.texCoords.push(1.5,1.5);
	for(i=0; i < this.slices; i++){
		var ang1 = teta*i;
		if(i<this.slices/4){
			this.texCoords.push(1+0.5+Math.cos(ang1)/2,1+0.5-Math.sin(ang1)/2);
		}
		if(i>=this.slices/4 && i<this.slices/2){
			this.texCoords.push(1+0.5-Math.cos(ang1)/-2,1+0.5-Math.sin(ang1)/2);
		}
		if(i>=this.slices/2 && i<3*this.slices/4){
			this.texCoords.push(1+0.5-Math.cos(ang1)/-2,1+0.5+Math.sin(ang1)/-2);
		}
		if(i>=3*this.slices/4){
			this.texCoords.push(1+0.5+Math.cos(ang1)/2,1+0.5+Math.sin(ang1)/-2);
		}
	}


	for(i=0; i<this.slices-1; i++){
		this.indices.push(0,1+i,2+i);
	};
	this.indices.push(0,this.slices,1);
	for(j=0; j<this.slices-1; j++){
//	    var thing = this.slices+1+j;
	    var thing = this.slices+1+j;
		this.indices.push(this.slices+1,2+thing,1+thing);
	};
	this.indices.push(this.slices+1,this.slices+2,this.slices*2+1);




 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();

 }