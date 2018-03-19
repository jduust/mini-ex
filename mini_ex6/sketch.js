var time = 0;
var x = 0;
var xspeed = 0.5;
var y = 0;
var speedy = 0.004;
var strokeslider, circlesize;

function setup() {
	//creating canvas, setting framerate
	createCanvas(windowWidth-5,windowHeight-5);
	noFill();
	frameRate(60);

	//creating sliders
	strokeslider = createSlider(100,400,200);
	strokeslider.position(20,20);
	circlesize = createSlider(10,100,50);
	circlesize.position(20,60);
	}

function draw() {
		//defining stroke value
		var s = strokeslider.value()/100;

		//creating time variable for different visuals
		time += 1;
		if (time>1098) {
			time = 0;
		}
	  background(0);

		//creating text, and translating circle to center
		stroke(255);
		push();
		noStroke();
		fill(255);
		text('Stroke',160,35);
		text('Size', 160,75);
		pop();
	  translate(width / 2, height / 2);

	  // white circle
	  strokeWeight(s);
	  drawcircles();

		//Creating the different animations, this one is from side to side
		if (time<600) {
				if (x>=50 || x < -50) {
					xspeed = -0.5
				} else if (x <= -50) {
					xspeed = 0.5
				}
			x = x + xspeed
			y = 0
		//This animation is the pulsating circles
		} else if (time <1200) {
				y += 0.004;
					if (y > 1) {
						y=0
					}
			scale(y);
			x=0
		}
		//This belongs to the first animation, and is what moves the circle
	  translate(x, 0);

		//Drawing the second circle, notice can be changed with slider
		push();
	  strokeWeight(s);
		stroke(255,204,0);
	  drawcircles();
		pop();
}

//Circle drawing function
function drawcircles() {
	//Size is adjustable with slider, width is fixed to windowheight
	var n = circlesize.value() /100;
  var w = width * n;
  var h = height /2;

	//Creating for loop for drawing the different circles
  for (var i = 0; i < w*0.9; i += 10) {
    ellipse(0, 0, i);
  }
}

//If window resizes, remove old sliders and make a new canvas
function windowResized() {
	removeElements();
	setup();
}
