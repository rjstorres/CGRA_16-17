/**
 * MySubmarine
 * @constructor
 */
 function MySubmarine(scene) {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();

 	
    this.body = new MyCylinder(this.scene, 40, 4, 1, 1); //(scene, slices, stacks, stackheight, wide)
    this.hatch = new MyCylinder(this.scene, 40, 2, 0.6, 0.6);
    this.scope = new MyCylinder(this.scene, 20, 3, 0.2, 0.05);
    this.top = new MyLamp(this.scene,40,40,1); //(scene,slices,stacks,radius)
//	this.top2 = new MyLamp(this.scene,20,20,1);
    this.fin = new MyFin(this.scene);
    this.circle = new MyCircle(this.scene,40,0.6);
    this.cylinder = new MyCylinder(this.scene,40,1,0.4,0.4);
    this.centre = new MyLamp(this.scene,20,20,0.1);
    this.paddle = new MyUnitCubeQuad(this.scene);
    
	this.materialSteel = new CGFappearance(this.scene);
	this.materialSteel.setAmbient(0.3,0.3,0.3,1);
	this.materialSteel.setDiffuse(0.8,0.8,0.8,1);
	this.materialSteel.setSpecular(0.8,0.8,0.8,1);	
	this.materialSteel.setShininess(120);

	this.yellow = new CGFappearance(this.scene);
	this.yellow.setAmbient(0.3,0.3,0.3,1);
	this.yellow.setDiffuse(0.95,0.8,0.3,1);
//	this.yellow.setEmission(0.95,0.8,0.3,1);
	this.yellow.setSpecular(0.3,0.3,0.3,1);	
	this.yellow.setShininess(120);

 };

 MySubmarine.prototype = Object.create(CGFobject.prototype);
 MySubmarine.prototype.constructor = MySubmarine;

 MySubmarine.prototype.display = function() {


    /////   /////   SHIP   /////   /////

    //body
    this.scene.pushMatrix();
    	this.scene.scale(0.7,1,1);
        this.yellow.apply();
        this.body.display();
    this.scene.popMatrix();

    //front
    this.scene.pushMatrix();
    	this.scene.scale(0.7,1,1);
 		this.scene.translate(0,0,4)
        this.yellow.apply();
        this.top.display();
    this.scene.popMatrix();

    //back
    this.scene.pushMatrix();
    	this.scene.scale(0.7,1,1);
   		this.scene.rotate(180*degToRad,0,1,0);
    //	this.scene.translate(0,0,-2)
        this.yellow.apply();
        this.top.display();
    this.scene.popMatrix();

	//hatch
	this.scene.pushMatrix();
		this.scene.scale(0.6,1,1);
		this.scene.translate(0,2,1.5);
		this.scene.rotate(90*degToRad,1,0,0);
		this.yellow.apply();
		this.hatch.display();
	this.scene.popMatrix();

	//hatch top
	this.scene.pushMatrix();
		this.scene.scale(0.6,1,1);
		this.scene.translate(0,2,1.5);
		this.scene.rotate(90*degToRad,1,0,0);
		this.yellow.apply();
		this.circle.display();
	this.scene.popMatrix();

	//scope
	this.scene.pushMatrix();
		this.scene.scale(1,3,1);
		this.scene.translate(0,1,1.5);
		this.scene.rotate(90*degToRad,1,0,0);
		this.yellow.apply();
		this.scope.display();
	this.scene.popMatrix();

	//scope top
	this.scene.pushMatrix();
	//	this.scene.scale(1,1,1);
		this.scene.translate(0,3,1.455);
	//	this.scene.rotate(90*degToRad,1,0,0);
		this.yellow.apply();
		this.scope.display();
	this.scene.popMatrix();

/*	//scope top
	this.scene.pushMatrix();
		this.scene.scale(0.09,0.09,1);
		this.scene.translate(0,30*1.1,1.45);
		this.scene.rotate(180*degToRad,1,0,0);
		this.yellow.apply();
		this.circle.display();
	this.scene.popMatrix();*/

	//hatch fin
	this.scene.pushMatrix();
		this.scene.scale(1.3,1,0.6);
		this.scene.translate(0,1.35,2.45);
		this.scene.rotate(90*degToRad,1,0,0);
		this.yellow.apply();
		this.fin.display();
	this.scene.popMatrix();

	//vertical fin
	this.scene.pushMatrix();
	//	this.scene.scale(3,1,1);
		this.scene.rotate(90*degToRad,1,0,0);
		this.scene.rotate(90*degToRad,0,1,0);
		this.scene.scale(2.8,0.75,1);
		this.scene.translate(0,-0.2,0.05);
		this.yellow.apply();
		this.fin.display();
	this.scene.popMatrix();

	//horizontal fin
	this.scene.pushMatrix();
		this.scene.scale(2.4,1,0.75);
		this.scene.rotate(90*degToRad,1,0,0);
		this.scene.translate(0,-0.2,0.05);
		this.yellow.apply();
		this.fin.display();
	this.scene.popMatrix();

	//left cylinder
	this.scene.pushMatrix();
		this.scene.scale(1,1,1);
//		this.scene.rotate(90*degToRad,1,0,0);
		this.scene.translate(0.9,-0.8,-0.35);
		this.yellow.apply();
		this.cylinder.display();
	this.scene.popMatrix();

	//right cylinder
	this.scene.pushMatrix();
		this.scene.scale(1,1,1);
//		this.scene.rotate(90*degToRad,1,0,0);
		this.scene.translate(-0.9,-0.8,-0.35);
		this.yellow.apply();
		this.cylinder.display();
	this.scene.popMatrix();

	//left turbine centre
	this.scene.pushMatrix();
		this.scene.scale(1,1,1);
//		this.scene.rotate(90*degToRad,1,0,0);
		this.scene.translate(0.9,-0.8,-0.25);
		this.yellow.apply();
		this.centre.display();
	this.scene.popMatrix();

	//right turbine centre
	this.scene.pushMatrix();
		this.scene.scale(1,1,1);
//		this.scene.rotate(90*degToRad,1,0,0);
		this.scene.translate(-0.9,-0.8,-0.25);
		this.yellow.apply();
		this.centre.display();
	this.scene.popMatrix();

	//left turbine paddle
	this.scene.pushMatrix();
		this.scene.scale(0.6,0.15,0.05);
//		this.scene.rotate(90*degToRad,1,0,0);
		this.scene.translate(1.5,-5.25,-5);
		this.yellow.apply();
		this.paddle.display();
	this.scene.popMatrix();

	//right turbine paddle
	this.scene.pushMatrix();
		this.scene.scale(0.6,0.15,0.05);
//		this.scene.rotate(90*degToRad,1,0,0);
		this.scene.translate(-1.5,-5.25,-5);
		this.yellow.apply();
		this.paddle.display();
	this.scene.popMatrix();

	//back turbine centre
	this.scene.pushMatrix();
		this.scene.scale(2,2,6);
		this.scene.translate(0,0,-0.15);
		this.scene.rotate(180*degToRad,1,0,0);
		this.yellow.apply();
		this.centre.display();
	this.scene.popMatrix();

	//back turbine paddle 1
	this.scene.pushMatrix();	
		this.scene.rotate(90*degToRad,1,0,0);
		this.scene.rotate(45*degToRad,0,1,0);
		this.scene.scale(0.8,0.2,0.15);
		this.scene.translate(0,-6.5,0);
		this.yellow.apply();
		this.fin.display();
	this.scene.popMatrix();

	//back turbine paddle 2
	this.scene.pushMatrix();	
		this.scene.rotate(90*degToRad,1,0,0);	
		this.scene.rotate(-45*degToRad,0,1,0);
		this.scene.scale(0.8,0.2,0.15);
		this.scene.translate(0,-6.5,0);
		this.yellow.apply();
		this.fin.display();
	this.scene.popMatrix();
 }
