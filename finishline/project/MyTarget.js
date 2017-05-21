/**
 * MyTarget
 * @constructor
 */
 function MyTarget(scene) {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();

 	
	this.circle = new MyCircle(this.scene,40,1);
	this.cylinder = new MyCylinder(this.scene,40,1,0.5,1);
	this.support = new MyCylinder(this.scene,10,3,0.5,0.1);
   
	this.red = new CGFappearance(this.scene);
	this.red.setAmbient(0.3,0.3,0.3,1);
	this.red.setDiffuse(0.95,0.2,0.2,1);
	this.red.setSpecular(0.5,0.5,0.5,1);
	this.red.setShininess(120);

	this.black = new CGFappearance(this.scene);
	this.black.setAmbient(0.3,0.3,0.3,1);
	this.black.setDiffuse(0.05,0.05,0.05,1);
	this.black.setSpecular(0.5,0.5,0.5,1);
	this.black.setShininess(120);

	this.white = new CGFappearance(this.scene);
	this.white.setAmbient(0.3,0.3,0.3,1);
	this.white.setDiffuse(0.95,0.95,0.95,1);
	this.white.setSpecular(0.5,0.5,0.5,1);
	this.white.setShininess(120);
 };

 MyTarget.prototype = Object.create(CGFobject.prototype);
 MyTarget.prototype.constructor = MyTarget;

 MyTarget.prototype.display = function() {

     //outter
    this.scene.pushMatrix();
    	this.scene.scale(1.25,1.25,1);
       	this.scene.translate(0,0,0);
        this.red.apply();
        this.circle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    	this.scene.scale(1.25,1.25,1);
       	this.scene.translate(0,0,0.5);
        this.red.apply();
        this.circle.display();
    this.scene.popMatrix();

	//outter cylinder
	 this.scene.pushMatrix();
    	this.scene.scale(1.25,1.25,1);
        this.red.apply();
        this.cylinder.display();
    this.scene.popMatrix();

    //outter white
    this.scene.pushMatrix();
    	this.scene.scale(1,1,1);
    	this.scene.translate(0,0,0.502);
        this.white.apply();
        this.circle.display();
    this.scene.popMatrix();
	
    this.scene.pushMatrix();
    	this.scene.scale(1,1,1);
    	this.scene.translate(0,0,-0.002);
        this.white.apply();
        this.circle.display();
    this.scene.popMatrix();

     //outter red
    this.scene.pushMatrix();
    	this.scene.scale(0.75,0.75,1);
       	this.scene.translate(0,0,-0.004);
        this.red.apply();
        this.circle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    	this.scene.scale(0.75,0.75,1);
    	this.scene.translate(0,0,0.504);
        this.red.apply();
        this.circle.display();
    this.scene.popMatrix();

     //inner white
    this.scene.pushMatrix();
    	this.scene.scale(0.5,0.5,1);
       	this.scene.translate(0,0,-0.006);
        this.white.apply();
        this.circle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    	this.scene.scale(0.5,0.5,1);
    	this.scene.translate(0,0,0.506);
        this.white.apply();
        this.circle.display();
    this.scene.popMatrix();
 
     //inner red
    this.scene.pushMatrix();
    	this.scene.scale(0.25,0.25,1);
       	this.scene.translate(0,0,-0.008);
        this.red.apply();
        this.circle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    	this.scene.scale(0.25,0.25,1);
    	this.scene.translate(0,0,0.508);
        this.red.apply();
        this.circle.display();
    this.scene.popMatrix();

    //support
    this.scene.pushMatrix();
    	this.scene.translate(0,0.25,0);
    	this.scene.rotate(150*degToRad,1,0,0);
    	this.white.apply();
    	this.support.display();
    this.scene.popMatrix();
/**/
 }