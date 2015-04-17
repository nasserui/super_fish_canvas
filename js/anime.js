/**
* Author: Mohamed Nasser.
* Date: 12-Dec-2013.
* Using: Ocanvas, Pure Javascript, CSS3.
* Description: This file contains drawing of super fish with HTML5 canvas and its functionality to move up,
* move down,move right and move left by putting fish members in array and loop on this array changing X and Y
* of each member using Keyboard Arrows.
**/

/**** CREATING NEW CANVAS OBJECT ****/
var canvas = oCanvas.create({
	canvas: "#canvas"
});

/**** DRAWING FISH MEMBERS****/
var eye = canvas.display.ellipse({
	x: 320,
	y: 105,
	radius_x: 30,
	radius_y: 35,
	fill: "#ffffff",
	stroke: "2px #c96b00"
});

var eyeCenter = canvas.display.ellipse({
	x: 320,
	y: 105,
	radius: 8,
	fill: "#000000"
});

var eye2 = canvas.display.ellipse({
	x: 280,
	y: 105,
	radius_x: 30,
	radius_y: 35,
	fill: "#ffffff",
	stroke: "2px #c96b00"
});

var eyeCenter2 = canvas.display.ellipse({
	x: 270,
	y: 105,
	radius: 8,
	fill: "#000000"
});

var theBody = canvas.display.ellipse({
	x: 230,
	y: 135,
	radius_x: 110,
	radius_y: 100,
	stroke: "10px #c96b00",
	fill: "#F49220"
});

var tail = canvas.display.polygon({
	x: 90,
	y: 145,
	sides: 3,
	radius: 80,
	rotation: 110,
	stroke: "5px #c96b00",
	fill: "#F49220"
});

var mouth = canvas.display.arc({
	x: 295,
	y: 160,
	radius: 40,
	start: 200,
	end: -10,
	rotation: 200,
	stroke: "10px #c96b00"
});

var flipper = canvas.display.polygon({
	x: 200,
	y: 230,
	sides: 3,
	radius: 40,
	rotation: 300,
	fill: "#844600"
});

var topFlipper = canvas.display.polygon({
	x: 210,
	y: 90,
	sides: 8,
	radius: 90,
	rotation: 280,
	fill: "#844600"
});

var brow = canvas.display.arc({
	x: 280,
	y: 100,
	radius: 30,
	start: 200,
	end: -10,
	fill: "#c96b00"
});

var brow2 = canvas.display.arc({
	x: 320,
	y: 100,
	radius: 30,
	start: 200,
	end: -10,
	fill: "#c96b00"
});

var text = canvas.display.text({
	x: 680,
	y: 450,
	origin: { x: "center", y: "top" },
	font: "bold 120px sans-serif",
	text: "super fish!",
	stroke: "15px #ffffff",
	fill: "#004474"
});

var slogan = canvas.display.text({
	x: 680,
	y: 600,
	origin: { x: "center", y: "top" },
	font: "bold 20px sans-serif",
	text: "Using HTML5 Canvas and CSS3 keyframes",
	fill: "#ffffff"
});

/**** DISPLAYING DRAWING FISH MEMBERS ON THE SCREEN ****/
/* Static text */
canvas.addChild(text);
canvas.addChild(slogan);
/*Register dynamic fish member */
var members = [tail, topFlipper, theBody, mouth, flipper, eye, eyeCenter, eye2, eyeCenter2, brow2, brow];
for (i in members) {
	canvas.addChild(members[i]);
}

/**** FUNCTIONS ****/

/* Defining keyboard arrows */
var ARROW_UP = 38;
var ARROW_DOWN = 40;
var ARROW_RIGHT = 39;
var ARROW_LEFT = 37;

/* prototype to search in Array object */
Array.prototype.contains = function ( needed ) {
   for (i in this) {
       if (this[i] == needed) return true;
   }
   return false;
}

/* Changing every fish members position x and y*/
function changePosition(step, type, position) {
	if(type == "increment" && position == "x") {
		for (i in members) {
			members[i].x += step;
		}
	}
	else if(type == "decrement" && position == "x") {
		for (i in members) {
			members[i].x -= step;
		}
	}
	else if(type == "increment" && position == "y") {
		for (i in members) {
			members[i].y += step;
		}
	}
	else if(type == "decrement" && position == "y") {
		for (i in members) {
			members[i].y -= step;
		}
	}
}

function tailMove() {
	tail.rotation -= 15;
	flipper.rotation += 10;
}

function tailMoveBack() {
	tail.rotation += 15;
	flipper.rotation -= 10;
}

function moveDown() {
	changePosition(8, "increment", "y");
}

function moveUp() {
	changePosition(8, "decrement", "y");
}

function moveRight() {
	changePosition(8, "increment", "x");
}

function moveLeft() {
	changePosition(8, "decrement", "x");
}

canvas.bind("keydown", function () {
	tailMove();
});

canvas.bind("keyup", function () {
	tailMoveBack();
});

canvas.bind("keypress", function () {
	var keys = canvas.keyboard.getKeysDown();
	if (keys.contains(ARROW_RIGHT) && keys.contains(ARROW_DOWN)) {
    moveRight();
		moveDown();
	}
	if (keys.contains(ARROW_RIGHT) && keys.contains(ARROW_UP)) {
		moveRight();
		moveUp();
	}

	if (keys.contains(ARROW_LEFT) && keys.contains(ARROW_DOWN)) {
    moveLeft();
		moveDown();
	}
	if (keys.contains(ARROW_LEFT) && keys.contains(ARROW_UP)) {
		moveLeft();
		moveUp();
	}

  if (keys == ARROW_UP) {
		moveUp();
	}
	if (keys == ARROW_DOWN) {
		moveDown();
	}
	if (keys == ARROW_RIGHT) {
		moveRight();
	}
	if (keys == ARROW_LEFT) {
		moveLeft();
	}
	canvas.redraw();
});
