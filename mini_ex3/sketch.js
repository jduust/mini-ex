function setup() {
createCanvas(windowWidth-3.51,windowHeight-3.51); //Canvas without scrollbars
}

function draw() {
background(0,0,0); //black background
frameRate(144); //Framerate (higher=smoother), my monitor can't show above 144
ellipseMode(CENTER); //centering center of circle to x,y
translate(width/2,height/2); //translating everything to the center of screen

//drawing the outer ellipse
push();
stroke(255,107,102);
noFill();
strokeWeight(8);
ellipse(0, 0, 220, 220);
pop();

//drawing the dials, see 'clockdial' function further down for reference
clockdial(3,90,255,151,75,-50); //seconds
clockdial(6,50,142,227,213,200); //hours
clockdial(6,80,255,233,0,100); //minutes

/*Quick note: I tried to calculate the speeds to match that of a real clock,
but that doesn't give the 'throbber' like effect. This is the
reasoning behind the second dial going backwards, and unmatching speeds.*/

//drawing a point to fill the center of the dials
push();
stroke(255,107,102);
strokeWeight(7);
point(0,0)
pop();

//buffering text
textSize(50);
textAlign(CENTER);
fill(255,255,255);
text('Buffering...',0,180);
textSize(20);
text('Time estimate unavailable',0,220);
}

//Below is the clockdialfunction, with the variables seen above
function clockdial(mass, x2, red, green, blue, speed) {
push();
var rotationspeed = 360/speed*(frameCount%speed); //speed of rotation
rotate(radians(rotationspeed)); //rotation
stroke(red, green, blue); //color of dial
strokeWeight(mass); //mass of dial
line(0,0,x2,0); //the actual dial
pop();
}

function windowResized() {
  setup(); //resizing canvas to windowsize
}
