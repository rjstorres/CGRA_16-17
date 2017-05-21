/**
 * MyLamp
 * @constructor
 */
 function MyLamp(scene, slices, stacks, radius) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;
	this.radius = radius;
	
 	this.initBuffers();
 };

 MyLamp.prototype = Object.create(CGFobject.prototype);
 MyLamp.prototype.constructor = MyLamp;

 MyLamp.prototype.initBuffers = function() {
 	



	//Declaracao dos arrays
 	
	this.vertices = [];
	this.indices = [];
	this.normals = [];
	this.texCoords = [];

	var teta = ((360*degToRad)/this.slices);
	var alpha = ((90*degToRad)/this.stacks);


//Vertices e Normals

	for(i=0; i <= this.slices; i++){
		var ang1 = teta*i;
		for(j=0; j <= this.stacks; j++){
			var ang3 = alpha*j;
		//	this.vertices.push(Math.cos(ang1)*Math.cos(ang3),Math.sin(ang1)*Math.cos(ang3),j/5*Math.cos(ang3)) ;	
		//	 this.normals.push(Math.cos(ang1)*Math.cos(ang3),Math.sin(ang1)*Math.cos(ang3),j/5*Math.cos(ang3));
			this.vertices.push(Math.cos(ang1)*Math.cos(ang3)*this.radius,Math.sin(ang1)*Math.cos(ang3)*this.radius,Math.sin(ang3)*this.radius) ;	
			 this.normals.push(Math.cos(ang1)*Math.cos(ang3)*this.radius,Math.sin(ang1)*Math.cos(ang3)*this.radius,Math.sin(ang3)*this.radius);
		this.texCoords.push(i,j);
		}
	}
	for(i=0; i <= this.slices; i++){
		var ang1 = teta*i;
		for(j=0; j <= this.stacks; j++){
/*			var ang4 = alpha*j;
			var ang5 =alpha*j-(180*degToRad);
			this.vertices.push(Math.cos(ang1)*Math.cos(ang4),Math.sin(ang1)*Math.cos(ang4),Math.sin(ang4)) ;	
			 this.normals.push(Math.cos(ang2)*Math.cos(ang5),Math.sin(ang2)*Math.cos(ang5),Math.sin(ang5));
	//		 this.normals.push(0-Math.cos(ang1)*Math.cos(ang4),0-Math.sin(ang1)*Math.cos(ang4),0-Math.sin(ang4));
*/		
			var ang3 = alpha*j;
			this.vertices.push(Math.cos(ang1)*Math.cos(ang3)*this.radius,Math.sin(ang1)*Math.cos(ang3)*this.radius,Math.sin(ang3)*this.radius) ;	
			this.normals.push(-Math.cos(ang1)*Math.cos(ang3)*this.radius,-Math.sin(ang1)*Math.cos(ang3)*this.radius,-Math.sin(ang3)*this.radius);
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
			var stage1 = (this.stacks+1)*(this.slices)+i*(this.stacks+1)+j;
			var stage2 = (this.stacks+1)*(this.slices)+(i+1)*(this.stacks+1)+j;
			this.indices.push(0+stage1,1+stage2,0+stage2);
			this.indices.push(0+stage1,1+stage1,1+stage2);
		}
	};



 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };


