/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface() {
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);
	
	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui
	
	this.gui = new dat.GUI();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

	this.gui.add(this.scene, 'Controls');	

	// add a group of controls (and open/expand by defult)
	
	var lightsGroup=this.gui.addFolder("Control Lights");
	lightsGroup.open();

	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;
	
	lightsGroup.add(this.scene, 'light1');
	lightsGroup.add(this.scene, 'light2');
	lightsGroup.add(this.scene, 'light3');
	lightsGroup.add(this.scene, 'light4');
	lightsGroup.add(this.scene, 'light5');
	lightsGroup.add(this.scene, 'light6');
	lightsGroup.add(this.scene, 'light7');
	
	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.

	// min and max values can be specified as parameters
	
	this.gui.add(this.scene, 'enableClock');
	
	this.gui.add(this.scene, 'currSubmarineAppearance', this.scene.submarineAppearanceList).name('Textures');
	



	return true;
};

//process Lights
MyInterface.prototype.ChangeLight = function(lightId,trueOrFalse){
	this.scene.turnLight(lightId,trueOrFalse);
}

/**
 * processKeyboard
 * @param event {Event}
 */
MyInterface.prototype.processKeyboard = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyboard.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	

	switch (event.keyCode)
	{
		case (65):
		case (97):	
			console.log("Key 'A' pressed");
			this.scene.setAngle(2);
			this.scene.setDirection(1);
			this.scene.setVertical(0);
			break;
		case (68):
		case (100):
			console.log("Key 'D' pressed");
			this.scene.setAngle(-2);
			this.scene.setDirection(-1);
			this.scene.setVertical(0);
			break;
		case (87):
		case(119):
			console.log("Key 'W' pressed");
			this.scene.setVelocity(1);
			this.scene.setDirection(0);
			this.scene.setVertical(0);
			break;
		case (83):
		case(115):
			console.log("Key 'S' pressed");
			this.scene.setVelocity((-1));
			this.scene.setDirection(0);
			this.scene.setVertical(0);
			break;
		case (81):
		case(113):
			console.log("Key 'Q' pressed");
			this.scene.setheight(0.03);
			this.scene.setVertical(-1);
			this.scene.setDirection(0);
			break;
		case (69):
		case(101):
		    console.log("Key 'E' pressed");
			this.scene.setheight(-0.03);
			this.scene.setVertical(1);
			this.scene.setDirection(0);
			break;
		case(80):
		case(112):
			console.log("Key 'P' pressed");
			this.scene.setDirection(0);
			this.scene.setVertical(0);
			this.scene.setScope(0.1);
			break;
		case(76):
		case(108):
			console.log("Key 'L' pressed");
			this.scene.setDirection(0);
			this.scene.setVertical(0);
			this.scene.setScope(-0.1);
			break;
		case(70):
		case(102):
			console.log("Key 'F' pressed");
			this.scene.setDirection(0);
			this.scene.setVertical(0);
			this.scene.setTorpedo();
			break;
		case(77):
		case(109):
			console.log("Key 'M' pressed");
			this.scene.rotateTorpedo(-5);
			break;
		case(78):
		case(110):
			console.log("Key 'N' pressed");
			this.scene.rotateTorpedo(5);
			break;
		case(74):
		case(106):
			console.log("Key 'J' pressed");
			this.scene.fire();
			break;
	};
};

