var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;
var time=-1;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);

	this.enableTextures(true);

	this.initCameras();

	this.initLights();

	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	// Scene elements
	this.table = new MyTable(this);
	this.wall = new Plane(this);
	this.newall = new MyQuad(this, -0.5, 1.5, -0.5, 1.5);
	this.floor = new MyQuad(this,0, 10, 0, 12);
	this.prism = new MyPrism(this,8,20);
	this.cylinder = new MyCylinder(this,8,20,1/5,1);
	this.lamp = new MyLamp(this,8,20,1);
	this.poketop = new MyLamp(this,20,20,1);
	this.pokebottom = new MyLamp(this,20,20,1);
	this.pokemid = new MyCylinder(this,20,1,1/6,1.01);
	this.outbutton = new MyCircle(this,20,0.3);
	this.inbutton = new MyCircle(this,20,0.18);
	this.clock = new MyClock(this,105,184.5,270);
	this.fin = new MyFin(this);
	this.sub = new MySubmarine(this);


	this.smallpoketop = new MyLamp(this,20,20,0.5);
	this.smallpokebottom = new MyLamp(this,20,20,0.5);
	this.smallpokemid = new MyCylinder(this,20,1,1/12,0.505);
	this.smalloutbutton = new MyCircle(this,20,0.15);
	this.smallinbutton = new MyCircle(this,20,0.09);

	this.boardA = new Plane(this, BOARD_A_DIVISIONS,-0.2,1.2);
	this.boardB = new Plane(this, BOARD_B_DIVISIONS);

	// Materials
	this.materialDefault = new CGFappearance(this);
	
	this.materialA = new CGFappearance(this);
	this.materialA.setAmbient(0.3,0.3,0.3,1);
	this.materialA.setDiffuse(0.6,0.6,0.6,1);
	//this.materialA.setSpecular(0.2,0.2,0.2,1);
	this.materialA.setSpecular(0,0.2,0.8,1);	
	this.materialA.setShininess(120);

	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(0.3,0.3,0.3,1);
	this.materialB.setDiffuse(0.6,0.6,0.6,1);
	this.materialB.setSpecular(0.8,0.8,0.8,1);	
	this.materialB.setShininess(120);

	this.materialC = new CGFappearance(this);
	this.materialC.setAmbient(0.3,0.3,0.3,1);
	this.materialC.setDiffuse(0.75,0.75,0.95,1);
	this.materialC.setSpecular(0.5,0.5,0.5,1);	
	this.materialC.setShininess(140);

	this.materialD = new CGFappearance(this);
	this.materialD.setAmbient(0.3,0.3,0.3,1);
	this.materialD.setDiffuse(0.3,0.2,0.5,1);
	this.materialD.setSpecular(0.3,0.3,0.3,1);	
	this.materialD.setShininess(30);
	
	this.pink = new CGFappearance(this);
	this.pink.setAmbient(0.3,0.3,0.3,1);
	this.pink.setDiffuse(0.83,0.2,0.4,1);
	this.pink.setSpecular(0.2,0.2,0.2,1);	
	this.pink.setShininess(80);

	this.materialF = new CGFappearance(this);
	this.materialF.setAmbient(0.3,0.3,0.3,1);
	this.materialF.setDiffuse(0.95,0.8,0.3,1);
	this.materialF.setEmission(0.95,0.8,0.3,1);
	this.materialF.setSpecular(0.3,0.3,0.3,1);	
	this.materialF.setShininess(140);

	this.red = new CGFappearance(this);
	this.red.setAmbient(0.3,0.3,0.3,1);
	this.red.setDiffuse(0.95,0.2,0.2,1);
	this.red.setSpecular(0.5,0.5,0.5,1);
	this.red.setShininess(120);

	this.black = new CGFappearance(this);
	this.black.setAmbient(0.3,0.3,0.3,1);
	this.black.setDiffuse(0.05,0.05,0.05,1);
	this.black.setSpecular(0.5,0.5,0.5,1);
	this.black.setShininess(120);

	this.white = new CGFappearance(this);
	this.white.setAmbient(0.3,0.3,0.3,1);
	this.white.setDiffuse(0.95,0.95,0.95,1);
	this.white.setSpecular(0.5,0.5,0.5,1);
	this.white.setShininess(120);

	this.orange = new CGFappearance(this);
	this.orange.setAmbient(0.3,0.3,0.3,1);
	this.orange.setDiffuse(0.95,0.65,0.15,1);
	this.orange.setSpecular(0.5,0.5,0.5,1);
	this.orange.setShininess(120);

	this.blue = new CGFappearance(this);
	this.blue.setAmbient(0.3,0.3,0.3,1);
	this.blue.setDiffuse(0.25,0.45,0.95,1);
	this.blue.setSpecular(0.5,0.5,0.5,1);
	this.blue.setShininess(120);



	this.floorAppearance = new CGFappearance(this);
 	this.floorAppearance.loadTexture("../resources/images/floor.png");
 	this.floorAppearance.setTextureWrap("REPEAT","REPEAT");
	this.floorAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.floorAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.floorAppearance.setShininess(30);

	this.windowAppearance = new CGFappearance(this);
 	this.windowAppearance.loadTexture("../resources/images/window.png");
 	this.windowAppearance.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.windowAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.windowAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.windowAppearance.setShininess(30);

	this.slidesAppearance = new CGFappearance(this);
	this.slidesAppearance.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.slidesAppearance.setAmbient(0.3,0.3,0.3,1);
	this.slidesAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.slidesAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.slidesAppearance.setShininess(10);
	this.slidesAppearance.loadTexture("../resources/images/slides.png");

	this.blackAppearance = new CGFappearance(this);
//	this.blackAppearance.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.blackAppearance.setAmbient(0.3,0.3,0.3,1);
	this.blackAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.blackAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.blackAppearance.setShininess(10);
	this.blackAppearance.loadTexture("../resources/images/black_texture.png");
	
	this.whiteAppearance = new CGFappearance(this);
//	this.whiteAppearance.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.whiteAppearance.setAmbient(0.3,0.3,0.3,1);
	this.whiteAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.whiteAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.whiteAppearance.setShininess(10);
	this.whiteAppearance.loadTexture("../resources/images/white_texture.png");
	
	this.boardAppearance = new CGFappearance(this);
	this.boardAppearance.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.slidesAppearance.setAmbient(0.3,0.3,0.3,1);
	this.boardAppearance.setDiffuse(0.6,0.6,0.6,1);
	this.boardAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.boardAppearance.setShininess(130);
	this.boardAppearance.loadTexture("../resources/images/board.png");
	
	this.clockAppearance = new CGFappearance(this);
	this.clockAppearance.setAmbient(0.3,0.3,0.3,1);
	this.clockAppearance.setDiffuse(0.7,0.7,0.7,1);
	this.clockAppearance.setSpecular(0.5,0.5,0.5,1);	
	this.clockAppearance.setShininess(120);
	this.clockAppearance.loadTexture("../resources/images/clock.png");

	this.setUpdatePeriod(100);

};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0,0,0, 1.0);
	
	// Positions for four lights
	this.lights[0].setPosition(4, 6, 1, 1);
	this.lights[0].setVisible(true); // show marker on light position (different from enabled)
	
	this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
	this.lights[1].setVisible(true); // show marker on light position (different from enabled)

	this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
	this.lights[2].setVisible(true); // show marker on light position (different from enabled)
	this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
	this.lights[3].setVisible(true); // show marker on light position (different from enabled)

	this.lights[4].setPosition(8,8,8, 1.0);
	this.lights[4].setVisible(false); // show marker on light position (different from enabled)

	this.lights[5].setPosition(0,4,8, 1.0);
	this.lights[5].setVisible(false);

	this.lights[6].setPosition(14.5,7.5,10, 1.0);
	this.lights[6].setVisible(true);

	this.lights[7].setPosition(12,5,10, 1.0);
	this.lights[7].setVisible(false);

	this.lights[0].setAmbient(0, 0, 0, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1,1,0,1);
	this.lights[0].enable();

	this.lights[1].setAmbient(0, 0, 0, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[1].enable();

	this.lights[2].setAmbient(0, 0, 0, 1);
	this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setSpecular(1,1,1,1);
	this.lights[2].setConstantAttenuation(0);
	this.lights[2].setLinearAttenuation(1);
	this.lights[2].enable();

	this.lights[3].setAmbient(0, 0, 0, 1);
	this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[3].setSpecular(1,1,0,1);
	this.lights[3].setConstantAttenuation(0);
	this.lights[3].setLinearAttenuation(0);
	this.lights[3].setQuadraticAttenuation(0.2);
	this.lights[3].enable();

	this.lights[4].setAmbient(0, 0, 0, 1);
	this.lights[4].setDiffuse(1.0, 1.0, 0.5, 1.0);
	this.lights[4].setSpecular(1,1,1,1);
	this.lights[4].setConstantAttenuation(0);
	this.lights[4].setLinearAttenuation(0);
	this.lights[4].setQuadraticAttenuation(0.4);
	this.lights[4].enable();

	this.lights[5].setAmbient(0, 0, 0, 1);
	this.lights[5].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[5].setSpecular(1,1,1,1);
	this.lights[5].setConstantAttenuation(0);
	this.lights[5].setLinearAttenuation(0);
	this.lights[5].setQuadraticAttenuation(0.2);
	this.lights[5].enable();

	this.lights[6].setAmbient(0, 0, 0, 1);
	this.lights[6].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[6].setSpecular(1,1,1,1);
	this.lights[6].setConstantAttenuation(0);
	this.lights[6].setLinearAttenuation(0);
	this.lights[6].setQuadraticAttenuation(0.1);
	this.lights[6].enable();

	this.lights[7].setAmbient(0, 0, 0, 1);
	this.lights[7].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[7].setSpecular(1,1,1,1);
	this.lights[7].setConstantAttenuation(0);
	this.lights[7].setLinearAttenuation(0);
	this.lights[7].setQuadraticAttenuation(0.1);
	this.lights[7].enable();
};

LightingScene.prototype.updateLights = function() {
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();
}

LightingScene.prototype.update = function(currTime) {
	
	var time = Math.floor(currTime/1000);


	if(this.time == -1){
		this.time = time;
	}else
	{
		if(this.time != time){
			this.time = time;
			this.clock.update();
		}
	}

}


LightingScene.prototype.display = function() {
	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Update all lights used
	this.updateLights();

	// Draw axis
	this.axis.display();

	this.materialDefault.apply();

	// ---- END Background, camera and axis setup

	
	// ---- BEGIN Geometric transformation section

	// ---- END Geometric transformation section


	// ---- BEGIN Primitive drawing section




////////// Classroom ///////////

	// Floor
	this.pushMatrix();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.whiteAppearance.apply();
		this.floor.display();
	this.popMatrix();
/*
	// Left Wall
	this.pushMatrix();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		this.materialF.apply();
		this.wall.display();
	this.popMatrix();
*/
	// New Left Wall
	this.pushMatrix();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		this.windowAppearance.apply();
		this.newall.display();
	this.popMatrix();

	// Plane Wall
	this.pushMatrix();
		this.translate(7.5, 4, 0);
		this.scale(15, 8, 0.2);
		this.blackAppearance.apply();
		this.wall.display();
	this.popMatrix();

	// First Table
	this.pushMatrix();
		this.translate(5, 0, 8);
		this.table.display();
	this.popMatrix();

	// Second Table
	this.pushMatrix();
		this.translate(12, 0, 8);
		this.table.display();
	this.popMatrix();

	// Board A
	this.pushMatrix();
		this.translate(4, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		this.slidesAppearance.apply();
		this.boardA.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
		this.translate(10.5, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		this.boardAppearance.apply();
		this.boardB.display();
	this.popMatrix();

	//PrismBottom
	this.pushMatrix();
		this.translate(1.25,4,13.75);
		this.rotate(90 * degToRad, 1, 0, 0);
		this.black.apply();
		this.prism.display();
	this.popMatrix();

	//PrismTop
	this.pushMatrix();
		this.translate(1.25,8,13.75);
		this.rotate(90 * degToRad, 1, 0, 0);
		this.white.apply();
		this.prism.display();
	this.popMatrix();


	//CylinderTop
	this.pushMatrix();
		this.translate(13.75,8,1.25);
		this.rotate(90 * degToRad, 1, 0, 0);
		this.blackAppearance.apply();
		this.cylinder.display();
	this.popMatrix();

	//CylinderBottom
	this.pushMatrix();
		this.translate(13.75,4,1.25);
		this.rotate(90 * degToRad, 1, 0, 0);
		this.whiteAppearance.apply();
		this.cylinder.display();
	this.popMatrix();


	//Lamp
	this.pushMatrix();
		this.translate(8,8,8);
		this.rotate(90 * degToRad, 1, 0, 0);
		this.materialF.apply();
		this.lamp.display();
	this.popMatrix();



////////// Poke Ball ///////////

	//PokeballTop
	this.pushMatrix();
		this.translate(13.5,4.65,8);
		this.rotate(270 * degToRad, 1, 0, 0);
		this.red.apply();
		this.poketop.display();
	this.popMatrix();

	//PokebalBottom
	this.pushMatrix();
		this.translate(13.5,4.65,8);
		this.rotate(90 * degToRad, 1, 0, 0);
		this.white.apply();
		this.pokebottom.display();
	this.popMatrix();

	//PokebalMiddle
	this.pushMatrix();
		this.translate(13.5,4.72,8);
		this.rotate(90 * degToRad, 1, 0, 0);
		this.black.apply();
		this.pokemid.display();
	this.popMatrix();

	//OutButton
	this.pushMatrix();
		this.translate(13.5,4.65,9.0);
		this.black.apply();
		this.outbutton.display();
	this.popMatrix();

	//InButton
	this.pushMatrix();
		this.translate(13.5,4.65,9.015);
		this.white.apply();
		this.inbutton.display();
	this.popMatrix();


		
////////// Premier Ball ///////////

	//PokeballTop
	this.pushMatrix();
		this.translate(4,4.65,8);
		this.rotate(270 * degToRad, 1, 0, 0);
		this.white.apply();
		this.poketop.display();
	this.popMatrix();


	//PokebalBottom
	this.pushMatrix();
		this.translate(4,4.65,8);
		this.rotate(90 * degToRad, 1, 0, 0);
		this.white.apply();
		this.pokebottom.display();
	this.popMatrix();

	//PokebalMiddle
	this.pushMatrix();
		this.translate(4,4.72,8);
		this.rotate(90 * degToRad, 1, 0, 0);
		this.red.apply();
		this.pokemid.display();
	this.popMatrix();

	//OutButton
	this.pushMatrix();
		this.translate(4,4.65,7.0);
		this.red.apply();
		this.outbutton.display();
	this.popMatrix();

	//InButton
	this.pushMatrix();
		this.translate(4,4.65,6.985);
		this.white.apply();
		this.inbutton.display();
	this.popMatrix();



////////// Park Ball ///////////

	//PokeballTop
	this.pushMatrix();
		this.translate(6.5,4.15,8);
		this.rotate(270 * degToRad, 1, 0, 0);
		this.orange.apply();
		this.smallpoketop.display();
	this.popMatrix();


	//PokebalBottom
	this.pushMatrix();
		this.translate(6.5,4.15,8);
		this.rotate(90 * degToRad, 1, 0, 0);
		this.white.apply();
		this.smallpokebottom.display();
	this.popMatrix();

	//PokebalMiddle
	this.pushMatrix();
		this.translate(6.5,4.185,8);
		this.rotate(90 * degToRad, 1, 0, 0);
		this.blue.apply();
		this.smallpokemid.display();
	this.popMatrix();

	//OutButton
	this.pushMatrix();
		this.translate(6.5,4.15,7.5);
//		this.rotate(180 * degToRad, 0, 1, 0);
		this.blue.apply();
		this.smalloutbutton.display();
	this.popMatrix();

	//InButton
	this.pushMatrix();
		this.translate(6.5,4.15,7.485);
//		this.rotate(90 * degToRad, 0, 1, 0);
		this.orange.apply();
		this.smallinbutton.display();
	this.popMatrix();




////////// Cherish Ball ///////////

	//PokeballTop
	this.pushMatrix();
		this.translate(11,4.15,8);
		this.rotate(270 * degToRad, 1, 0, 0);
		this.red.apply();
		this.smallpoketop.display();
	this.popMatrix();

	//PokebalBottom
	this.pushMatrix();
		this.translate(11,4.15,8);
		this.rotate(90 * degToRad, 1, 0, 0);
		this.red.apply();
		this.smallpokebottom.display();
	this.popMatrix();

	//PokebalMiddle
	this.pushMatrix();
		this.translate(11,4.185,8);
		this.rotate(90 * degToRad, 1, 0, 0);
		this.black.apply();
		this.smallpokemid.display();
	this.popMatrix();

	//OutButton
	this.pushMatrix();
		this.translate(11,4.15,8.5);
//		this.rotate(180 * degToRad, 0, 1, 0);
		this.black.apply();
		this.smalloutbutton.display();
	this.popMatrix();

	//InButton
	this.pushMatrix();
		this.translate(11,4.15,8.515);
//		this.rotate(90 * degToRad, 0, 1, 0);
		this.red.apply();
		this.smallinbutton.display();
	this.popMatrix();



	//Clock
	this.pushMatrix();
		this.scale(1,1,0.2);
		this.translate(7.25,7.25,1);
		this.rotate(180 * degToRad, 0 , 0, -1);	
//		this.clockAppearance.apply();
		this.clock.display();
	this.popMatrix();


/*
	//Test Fin
	this.pushMatrix();
		this.translate(2,2,2);
		this.rotate(90 * degToRad, 0 , 1, 0);
		this.scale(3,1,1);
		this.red.apply();
		this.fin.display();
	this.popMatrix();
*/


////////// Underwater ///////////

	//Test Submarine
	this.pushMatrix();
	//	this.scale(3,1,1);
		this.translate(3,3,3);
		this.rotate(90 * degToRad, 0 , 1, 0);
	//	this.red.apply();
		this.sub.display();
	this.popMatrix();



////////// Test Zone ///////////

/*
	//Test Fin
	this.pushMatrix();
		this.translate(2,2,2);
		this.rotate(90 * degToRad, 0 , 1, 0);
		this.scale(3,1,1);
		this.red.apply();
		this.fin.display();
	this.popMatrix();
*/

	// ---- END Primitive drawing section
};
