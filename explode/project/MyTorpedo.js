/**
 * MyTorpedo
 * @constructor
 */
 function MyTorpedo(scene) {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();

 	
    this.body = new MyCylinder(this.scene, 40, 1, 1, 0.2); //(scene, slices, stacks, stackheight, wide)
    this.top = new MyLamp(this.scene,40,40,0.2); //(scene,slices,stacks,radius)
    this.fin = new MyFin(this.scene);
//	this.circle = new MyCircle(this.scene,40,0.6);
//	this.cylinder = new MyCylinder(this.scene,40,1,0.4,0.4);
   
	this.steel = new CGFappearance(this.scene);
	this.steel.setAmbient(0.3,0.3,0.3,1);
	this.steel.setDiffuse(0.8,0.8,0.8,1);
	this.steel.setSpecular(0.8,0.8,0.8,1);	
	this.steel.setShininess(120);

 };

 MyTorpedo.prototype = Object.create(CGFobject.prototype);
 MyTorpedo.prototype.constructor = MyTorpedo;

 MyTorpedo.prototype.display = function() {


    /////   /////   SHIP   /////   /////

    //body
    this.scene.pushMatrix();
//    	this.scene.scale(1,1,1);
        this.steel.apply();
        this.body.display();
    this.scene.popMatrix();

    //front
    this.scene.pushMatrix();
//    	this.scene.scale(1,1,1);
 		this.scene.translate(0,0,1)
        this.steel.apply();
        this.top.display();
    this.scene.popMatrix();

    //back
    this.scene.pushMatrix();
//    	this.scene.scale(1,1,1);
   		this.scene.rotate(180*degToRad,0,1,0);
        this.steel.apply();
        this.top.display();
    this.scene.popMatrix();



	//vertical fin
	this.scene.pushMatrix();
		this.scene.rotate(90*degToRad,1,0,0);
		this.scene.rotate(90*degToRad,0,1,0);
		this.scene.scale(0.6,0.15,0.25);
		this.scene.translate(0,-0.5,0.025);
		this.steel.apply();
		this.fin.display();
	this.scene.popMatrix();

	//horizontal fin
	this.scene.pushMatrix();
		this.scene.scale(0.6,0.25,0.15);
		this.scene.rotate(90*degToRad,1,0,0);
		this.scene.translate(0,-0.5,0.025);
		this.steel.apply();
		this.fin.display();
	this.scene.popMatrix();

 }