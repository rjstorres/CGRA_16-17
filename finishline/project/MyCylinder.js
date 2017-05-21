/**
 * MyCylinder
 * @constructor
 */
 function MyCylinder(scene, slices, stacks, stackheight, wide) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;
	this.stackheight = stackheight;
	this.wide = wide;

 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.initBuffers = function() {
 	



	//Declaracao dos arrays
 	
	this.vertices = [];
	this.indices = [];
	this.normals = [];
	this.texCoords = [];

	var teta = ((360*degToRad)/this.slices);


//Vertices e Normals

	for(i=0; i <= this.slices; i++){
		var ang1 = teta*i;
		for(j=0; j <= this.stacks; j++){
			this.vertices.push(Math.cos(ang1)*this.wide,Math.sin(ang1)*this.wide,j*this.stackheight) ;	
			 this.normals.push(Math.cos(ang1)*this.wide,Math.sin(ang1)*this.wide,0);
			 this.texCoords.push(i,j);
		}
	}
	for(i=0; i <= this.slices; i++){
		var ang2 = teta*i-(180*degToRad);
		for(j=0; j <= this.stacks; j++){
			this.vertices.push(Math.cos(teta*i)*this.wide,Math.sin(teta*i)*this.wide,j*this.stackheight) ;	
			 this.normals.push(Math.cos(ang2)*this.wide,Math.sin(ang2)*this.wide,0);
			 this.texCoords.push(i,j);
		}
	};




//Indices

	for(i=0; i<this.slices; i++){
		for(j=0; j<this.stacks;j++){
			var stage1 = i*(this.stacks+1)+j;
			var stage2 = (i+1)*(this.stacks+1)+j;
			this.indices.push(0+stage1,0+stage2,1+stage2);
			this.indices.push(0+stage1,1+stage2,1+stage1);
		}
	};
	for(i=0; i<=this.slices; i++){
		for(j=0; j<this.stacks;j++){
			//var stage1 = i*(this.stacks+1)+j;
			//var stage2 = (i+1)*(this.stacks+1)+j;
			var stage1 = (this.stacks+1)*(this.slices)+i*(this.stacks+1)+j;
			var stage2 = (this.stacks+1)*(this.slices)+(i+1)*(this.stacks+1)+j;
			this.indices.push(0+stage1,1+stage2,0+stage2);
			this.indices.push(0+stage1,1+stage1,1+stage2);
		}
	};



 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };


