/**
 * MyPrism
 * @constructor
 */
 function MyPrism(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	//this.quad = new MyQuad(this.scene);
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() {
 	



	//Declaracao dos arrays
 	
	this.vertices = [];
	this.indices = [];
	this.normals = [];



	/////// Faces externas /////


	/// Vertices ///

/*	for(i=0; i < this.slices; i++){	
		var teta = ((360*degToRad)/this.slices);
	//	vertices.push(Math.cos(teta*i),Math.sin(teta*i),0) ;
	//	vertices.push(Math.cos(teta*(i+1)),Math.sin(teta*(i+1)),0) ;
		for(j=0; j <= this.stacks; j++){
	//		var s = 1/this.stacks;
	//		var d = this.stacks;
			this.vertices.push(Math.cos(teta*i),Math.sin(teta*i),j) ;
			this.vertices.push(Math.cos(teta*(i+1)),Math.sin(teta*(i+1)),j) ;
		}
	};*/

	for(i=0; i < this.slices; i++){	
		var teta = ((360*degToRad)/this.slices);
		this.vertices.push(Math.cos(teta*i),Math.sin(teta*i),0) ;
		this.vertices.push(Math.cos(teta*(i+1)),Math.sin(teta*(i+1)),0) ;
		for(j=1; j < this.stacks; j++){
	//		var s = 1/this.stacks;
	//		var d = this.stacks;
			this.vertices.push(Math.cos(teta*i),Math.sin(teta*i),j/5) ;
			this.vertices.push(Math.cos(teta*(i+1)),Math.sin(teta*(i+1)),j/5) ;
			this.vertices.push(Math.cos(teta*i),Math.sin(teta*i),j/5) ;
			this.vertices.push(Math.cos(teta*(i+1)),Math.sin(teta*(i+1)),j/5) ;
		}
		this.vertices.push(Math.cos(teta*i),Math.sin(teta*i),this.stacks/5) ;
		this.vertices.push(Math.cos(teta*(i+1)),Math.sin(teta*(i+1)),this.stacks/5) ;
	}

		for(i=0; i < this.slices; i++){	
		var teta = ((360*degToRad)/this.slices);
		this.vertices.push(Math.cos(teta*i),Math.sin(teta*i),0) ;
		this.vertices.push(Math.cos(teta*(i+1)),Math.sin(teta*(i+1)),0) ;
		for(j=1; j < this.stacks; j++){
	//		var s = 1/this.stacks;
	//		var d = this.stacks;
			this.vertices.push(Math.cos(teta*i),Math.sin(teta*i),j/5) ;
			this.vertices.push(Math.cos(teta*(i+1)),Math.sin(teta*(i+1)),j/5) ;
			this.vertices.push(Math.cos(teta*i),Math.sin(teta*i),j/5) ;
			this.vertices.push(Math.cos(teta*(i+1)),Math.sin(teta*(i+1)),j/5) ;
		}
		this.vertices.push(Math.cos(teta*i),Math.sin(teta*i),this.stacks/5) ;
		this.vertices.push(Math.cos(teta*(i+1)),Math.sin(teta*(i+1)),this.stacks/5) ;
	};



	/// Indices ///

/*	for(i=0; i < this.slices; i++){
//	for(i=0; i < this.slices*2; i++){
		for(j=0; j <= this.stacks; j++){
		var stage = 4*i;
		this.indices.push(0+stage,1+stage,3+stage);
		this.indices.push(0+stage,3+stage,2+stage);
		}
	}
	for(i=0; i < this.slices; i++){
		var stage2 = stage+4*i;
		this.indices.push(3+stage2,1+stage2,0+stage2);
		this.indices.push(2+stage2,3+stage2,0+stage2);
	};*/

/*	var stage = 0;
	for(i=0; i < this.slices; i++){
		for(j=0; j <= this.stacks; j++){
			this.indices.push(0+stage,1+stage,3+stage);
			this.indices.push(0+stage,3+stage,2+stage);
			stage = stage + 4;
		}
	}

	var stage2=stage;
	//var stage2=this.indices.length-1;
	for(i=0; i < this.slices; i++){
		for(j=0; j <= this.stacks; j++){
			this.indices.push(3+stage2,1+stage2,0+stage2);
			this.indices.push(2+stage2,3+stage2,0+stage2);
			stage2 = stage2 + 4;
		}
	};*/
	

	//////////////////////////////////////////////////////////
	for(i=0; i<this.slices; i++){
		for(j=0;j<this.stacks;j++){
			var stage = 4*j+4*this.stacks*i;
			this.indices.push(0+stage,1+stage,3+stage);
			this.indices.push(0+stage,3+stage,2+stage);
		}
	}
	for(k=0; k<this.slices; k++){
		for(l=0;l<this.stacks;l++){
		//	var stage4 = 4*this.slices + 4*this.stacks + 4*l + 4*this.stacks*k;
			var stage3 = 4*this.slices*this.stacks + 4*l + 4*this.stacks*k;
			this.indices.push(3+stage3,1+stage3,0+stage3);
			this.indices.push(2+stage3,3+stage3,0+stage3);
		}
	};







	/// Normals ///

/*	for(a=0;a<this.slices;a++){
		for(b=0;b<this.stacks;b++){
			var teta = ((360*degToRad)/this.slices);
			var c = ((teta*a +teta*(a+1))/2);
			this.normals.push(Math.cos(c),Math.sin(c),0);
			this.normals.push(Math.cos(c),Math.sin(c),0);
			this.normals.push(Math.cos(c),Math.sin(c),0);
			this.normals.push(Math.cos(c),Math.sin(c),0);
		}
	}
	for(a=0;a<this.slices;a++){
		for(b=0;b<this.stacks;b++){
			var delta = ((360*degToRad)/this.slices);
			var d = ((delta*a +delta*(a+1))/2);
			this.normals.push(-Math.cos(d),-Math.sin(d),0);
			this.normals.push(-Math.cos(d),-Math.sin(d),0);
			this.normals.push(-Math.cos(d),-Math.sin(d),0);
			this.normals.push(-Math.cos(d),-Math.sin(d),0);
		}
	};*/

	for(i=0; i < this.slices; i++){	
		var teta = ((360*degToRad)/this.slices);
		var c = ((teta*i +teta*(i+1))/2);
			this.normals.push(Math.cos(c),Math.sin(c),0);
			this.normals.push(Math.cos(c),Math.sin(c),0);
		for(j=1; j < this.stacks; j++){
			this.normals.push(Math.cos(c),Math.sin(c),0);
			this.normals.push(Math.cos(c),Math.sin(c),0);
			this.normals.push(Math.cos(c),Math.sin(c),0);
			this.normals.push(Math.cos(c),Math.sin(c),0);
		}
		this.normals.push(Math.cos(c),Math.sin(c),0);
		this.normals.push(Math.cos(c),Math.sin(c),0);
	}
	for(i=0; i < this.slices; i++){	
		var delta = (((360*degToRad)/this.slices));
		var d = (((delta*i +delta*(i+1))/2)-(180*degToRad));
			this.normals.push(Math.cos(d),Math.sin(d),0);
			this.normals.push(Math.cos(d),Math.sin(d),0);
		for(j=1; j < this.stacks; j++){
			this.normals.push(Math.cos(d),Math.sin(d),0);
			this.normals.push(Math.cos(d),Math.sin(d),0);
			this.normals.push(Math.cos(d),Math.sin(d),0);
			this.normals.push(Math.cos(d),Math.sin(d),0);
		}
		this.normals.push(Math.cos(d),Math.sin(d),0);
		this.normals.push(Math.cos(d),Math.sin(d),0);
	};

	



	///// Faces Internas /////

	/// Vertices ///

/*	for(i=0; i < this.slices; i++){	
		var teta = ((360*degToRad)/this.slices);
		for(j=0; j <= this.stacks; j++){
			var s = 1/this.stacks;
			this.vertices.push(Math.cos(teta*i),Math.sin(teta*i),s*j) ;
			this.vertices.push(Math.cos(teta*(i+1)),Math.sin(teta*(i+1)),s*j) ;
		}
	};*/




 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };


