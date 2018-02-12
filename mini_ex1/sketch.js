var xSlider, ySlider, bSlider, img;
function preload() {
  img = loadImage('media/info.jpg');
  soundFormats('mp3','ogg');
  mySound = loadSound('media/vaporwave.mp3');
}

function setup() {
  //canvas
  createCanvas(767, 400, WEBGL);
  console.log("hi");
  //instructions
  texture(img);
  //music
  mySound.setVolume(1);
  mySound.play();
//sliders
  xSlider = createSlider(10, 100, 10);
  xSlider.position(20, 20);
  ySlider = createSlider(10, 1000, 10);
  ySlider.position(20, 50);
  bSlider = createSlider(0, 255, 100);
  bSlider.position(20, 80);
}

function draw() {
  //variables
  var x = xSlider.value();
  var y = ySlider.value();
  var b = bSlider.value();
  //background
  background(50,350,b);
  //rotation
  rotateX(frameCount * x/1000);
  rotateY(frameCount * y/1000);
  //figures
  box(50);
  ellipse(100,130,100,100);
  quad(38,31,86,20,69,63,30,76);
  //speed of sound
  mySound.rate(1+(x/1000)+(y/10000))
}
