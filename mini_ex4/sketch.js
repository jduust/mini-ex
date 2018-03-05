var microphone, ctracker;

function setup() {
  //capture video/sound
  var capture = createCapture(VIDEO);
  capture.size(640,480);
  capture.position(50,50);

  //facetracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(capture.elt);

  //audio track
  microphone = new p5.AudioIn();
  microphone.start();

  //brightness slider - text is added in index.html
  slider1 = createSlider(0,255,0);
  slider1.position(130,15);
}

function draw() {
  //creating canvas
  var canv = createCanvas(640,480);
  canv.position(50,50);

  brightnessadjust(); //adding brightness function to canvas

  fill(255,56,56); //color for text and objects
  textStyle(BOLD); //Bold text

  /*Detecting noise levels, determining if you're by yourself or with others.
  I could add this to a function but i don't see the need */
  var noise = microphone.getLevel();
  push()
  translate(2,40); //moving text below beauty score
  if (noise > 0 && noise < 0.02){
    text('alone - private advertisement',0,0);
  } else if (noise > 0.02 && noise < 0.55){
    text('has company - event advertisement', 0,0);
  } else {
    text('in public - headphones advertisement',0,0);
  }
  pop();


  var faceposition = ctracker.getCurrentPosition();
    if (faceposition.length){ //making sure it sees a face first
      //Creating beautyscore (based on reading quality of face)
      var score = ceil(ctracker.getScore()*10);
      text('Beauty (1-10): '+score,2,20);

      //Inserting advertise suggestions from advertise function
      advertisement('advertise for nosejob', 62, 0, 10);
      advertisement('tired - advertise coffee', 69, 0, 20);
      advertisement('bad mood - advertise music', 50, 0, 0);
    } else {
    text('Webcam unavailable',2,20); //if it doesn't find a face, say this
    }

}

//Creating the brightness function
function brightnessadjust() {
 var c = slider1.value();
 if (c>0){
  push();
  fill((0,c),100); //adds a transparant rectangle infront of video
  rect(0,0,width,height)
  pop();
  }
}

//The advertisement text function
function advertisement(adtext, facexy, offsetx, offsety,) {
  push();
  var faceposition = ctracker.getCurrentPosition();
  noStroke();
  //circle to pinpoint the tracking area, entirely for visuals
  ellipse(faceposition[facexy][0]+offsetx, faceposition[facexy][1]+offsety-4, 10, 10);
  textSize(15);
  text(adtext, faceposition[facexy][0]+offsetx+7, faceposition[facexy][1]+offsety);
  pop();
}
