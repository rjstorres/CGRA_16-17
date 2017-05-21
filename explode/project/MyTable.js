/**
 * MyTable
 * @constructor
 */
 function MyTable(scene) {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();
 	
 	this.tableAppearance = new CGFappearance(this.scene);
 	this.tableAppearance.loadTexture("../resources/images/table.png");
	this.tableAppearance.setDiffuse(0.6,0.6,0.6,1);
	this.tableAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.tableAppearance.setShininess(30);

	this.materialSteel = new CGFappearance(this.scene);
	this.materialSteel.setAmbient(0.3,0.3,0.3,1);
	this.materialSteel.setDiffuse(0.8,0.8,0.8,1);
	this.materialSteel.setSpecular(0.8,0.8,0.8,1);	
	this.materialSteel.setShininess(120);

 };

 MyTable.prototype = Object.create(CGFobject.prototype);
 MyTable.prototype.constructor = MyTable;

 MyTable.prototype.display = function() {


/*
    this.materialWood = new CGFappearance(this.scene);
	this.materialWood.setAmbient(0.3,0.3,0.3,1);
	this.materialWood.setDiffuse(0.63,0.32,0.18,1);
	this.materialWood.setSpecular(0.2,0.2,0.2,1);	
	this.materialWood.setShininess(80);
*/


 	// legs
 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.materialSteel.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.materialSteel.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.materialSteel.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.materialSteel.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	// table top
 	this.scene.pushMatrix();
 	this.scene.translate(0, 3.5, 0);
 	this.scene.scale(5, 0.3, 3);
 	this.tableAppearance.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();
 }
