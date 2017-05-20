var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;
var time=-1;
var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

function MyScene() {
    CGFscene.call(this);
}

MyScene.prototype = Object.create(CGFscene.prototype);
MyScene.prototype.constructor = MyScene;

MyScene.prototype.Controls = function ()
{ console.log("Controls..."); };

MyScene.prototype.init = function(application) {
    CGFscene.prototype.init.call(this, application);
    
	this.light1=true; this.light2=true; this.light3=true;
    this.light4=true; this.light5=true; this.light6=true;
	this.light7=true;
    this.lightsGUI = new Array(7);
    this.enableClock = true;
    
	this.currSubmarineAppearance=0;
    
	this.enableTextures(true);
    
	this.initCameras();

    this.initLights();

    this.gl.clearColor(0.0, 0.0, 1.0, 1.0);
    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

    this.axis = new CGFaxis(this);
	
    // Scene elements
    this.floor = new MyQuad(this,0, 10, 0, 12);
    this.columnRight = new MyCylinder(this, 20, 20,1/15,1);
  	this.clock = new MyClock(this,105,184.5,270);
	this.fin = new MyFin(this);
	this.submarine = new MySubmarine(this);
	
	
	
    // Materials
    this.materialDefault = new CGFappearance(this);
	
	this.floorAppearance = new CGFappearance(this);
 	this.floorAppearance.loadTexture("../resources/images/deepsea.png");
 	this.floorAppearance.setTextureWrap("REPEAT","REPEAT");
	this.floorAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.floorAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.floorAppearance.setShininess(30);

    this.columnAppearance = new CGFappearance(this);
	this.columnAppearance.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.columnAppearance.setAmbient(0.3,0.3,0.3,1);
	this.columnAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.columnAppearance.setSpecular(0.1,0.1,0.1,1);
    this.columnAppearance.setShininess(10);
    this.columnAppearance.loadTexture("../resources/images/black_texture.png");

	this.materialF = new CGFappearance(this);
	this.materialF.setAmbient(0.3,0.3,0.3,1);
	this.materialF.setDiffuse(0.95,0.8,0.3,1);
	this.materialF.setSpecular(0.3,0.3,0.3,1);	
	this.materialF.setShininess(30);

	this.materialSteel = new CGFappearance(this.scene);
	this.materialSteel.setAmbient(0.3,0.3,0.3,1);
	this.materialSteel.setDiffuse(0.8,0.8,0.8,1);
	this.materialSteel.setSpecular(0.8,0.8,0.8,1);	
	this.materialSteel.setShininess(120);
	
	this.submarineAppearanceList = {};
	this.submarineAppearanceList["Beatles"] = 0;
	this.submarineAppearanceList["textura1"] = 1;
	this.submarineAppearanceList["textura2"] = 2;
	
	this.setUpdatePeriod(50);
};

MyScene.prototype.initCameras = function() {
    this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

MyScene.prototype.initLights = function() {
    this.setGlobalAmbientLight(0.1, 0.1, 0.1, 1.0);

    // Positions for four lights
    this.lights[0].setPosition(4, 6, 1, 1);
    this.lights[0].setVisible(true); // show marker on light position (different from enabled)

    this.lights[1].setPosition(10.5, 6, 1.0, 1.0);
    this.lights[1].setVisible(true); // show marker on light position (different from enabled)

	this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
	this.lights[2].setVisible(true);
  
	this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
    this.lights[3].setVisible(true);
   
    this.lights[4].setPosition(0,4,8, 1.0);
    this.lights[4].setVisible(true);
   
    this.lights[5].setPosition(8,8,8, 1.0);
    this.lights[5].setVisible(true);
	
	this.lights[6].setPosition(15,8,10, 1);
	this.lights[6].setVisible(true);

	this.lights[7].setPosition(12,5,10,1);
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

MyScene.prototype.updateLights = function() {
    this.lightsGUI[0] = this.light1;
    this.lightsGUI[1] = this.light2;
    this.lightsGUI[2] = this.light3;
    this.lightsGUI[3] = this.light4;
    this.lightsGUI[4] = this.light5;
    this.lightsGUI[5] = this.light6;
	this.lightsGUI[6] = this.light7;
    for (i = 0; i < this.lights.length; i++){
        this.lights[i].update();
        if (this.lightsGUI[i]){
            this.lights[i].enable();
        }
        else{
            this.lights[i].disable();
        }
        this.lights[i].setVisible(this.lightsGUI[i]);
    }
        
}

MyScene.prototype.setVelocity = function(vlc) {
	this.submarine.setVelocity(vlc);
}
 
MyScene.prototype.setAngle = function(Angle){
    this.submarine.setAngle(Angle);
}

MyScene.prototype.setheight = function(height){
    this.submarine.setheight(height);
}

MyScene.prototype.update = function(currTime) {
	
	var time = Math.floor(currTime/1000);
	this.lastTime = this.lastTime || 0;
    this.timePassed = currTime - this.lastTime;
	this.lastTime=currTime;
	if(this.time == -1){
		this.time = time;
	}else
	{
		if(this.time != time && this.enableClock){
			this.time = time;
			this.clock.update();
		}
	}
	this.submarine.updatePosition(this.timePassed);
  
}


MyScene.prototype.display = function() {
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

    //this.shader.bind();

    // Draw axis
    this.axis.display();

    this.materialDefault.apply();

    // ---- END Background, camera and axis setup


    // ---- BEGIN Geometric transformation section

    // ---- END Geometric transformation section


    // ---- BEGIN Primitive drawing section
    
    // Floor
	
	this.pushMatrix();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.floorAppearance.apply();
		this.floor.display();
	this.popMatrix();
	

    //Column right
    this.pushMatrix();
		this.rotate(-Math.PI / 2, 1, 0, 0);
		this.translate(8, -0.5, 0);
		this.scale(0.5, 0.5, 8);
		this.columnAppearance.apply();
		this.columnRight.display();
    this.popMatrix();
    
    //Clock
	this.pushMatrix();
		this.scale(1,1,0.2);
		this.translate(8,7.25,5);
		this.rotate(180 * degToRad, 0 , 0,0);	
		this.clock.display();
	this.popMatrix()
	
	//Submarine
	this.pushMatrix();
		this.rotate(180*degToRad,0,1,0);
		this.translate(-8,4,-12);
		this.submarine.display(this.submarineAppearances);
    this.popMatrix();

    // ---- END Primitive drawing section
};
