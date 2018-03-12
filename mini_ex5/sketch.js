var block, wolf, endgame, mand, ground, wolves, gameStop;
var mandImg, wolfImg, groundImg, bgImg;
var dummeulv, moegdyr, nufalmer, slemmedyr, randomsound;

function preload() {
  //preloading all the wonderful assets for the game so it runs smoothly
	mandImg = loadImage("media/mand.png");
	wolfImg = loadImage("media/wolf.png");
	bgImg = loadImage("media/background.jpg");
	dummeulv = loadSound('media/dummeulv.mp3');
	moegdyr = loadSound('media/moegdyr.mp3');
	nufalmer = loadSound('media/nufalmer.mp3');
	slemmedyr = loadSound('media/slemmedyr.mp3');
}

function setup() {
	createCanvas(windowWidth-5,windowHeight-5);

	//array of sounds to play from
  choices = [slemmedyr, moegdyr, dummeulv];

	//Drawing our man, and making him move
	mand = createSprite(width/2, height/2, 285,78);
  mand.velocity.x = 4;
  mand.setCollider("rectangle", 0, 0, 285, 78);
  mand.addImage(mandImg);

	//Creating a wolf pack
	wolves = new Group();

	//Making sure game doesn't run until u start it
  gameStop = true;
  updateSprites(false);

	//Centering camera
	camera.position.y = windowHeight/2;
}

function draw() {
	//Defining randomsound to pick from array of sounds (different wolfscares)
  randomsound = random(choices);

	//If game isn't running, pressing up/down or mouse (see below) starts it
  if(gameStop && keyWentDown("UP_ARROW") || gameStop && keyWentDown("DOWN_ARROW"))
    StartGame();

	//If game is running, this code applies
  if(!gameStop) {

		//Default speed
		mand.velocity.y = 0;

		//Adding controls
		if (keyDown("UP_ARROW"))
		mand.velocity.y = -5;
		if (keyDown("DOWN_ARROW"))
		mand.velocity.y = 5;

		//Adding a ceiling
    if(mand.position.y<0)
      mand.position.y = 0;

		//Playing dead doesn't work, so playing dead on the ground kills you
    if(mand.position.y+mand.height/2 > windowHeight)
      eaten();

		//Attacking wolves head on kills you
    if(mand.overlap(wolves))
      eaten();

    //create wolves every second
    if(frameCount%60 == 0) {
      var wolfH = random(0, windowHeight);
      var wolf = createSprite(mand.position.x + width, windowHeight-wolfH, 100, 147);
      wolf.addImage(wolfImg);
      wolves.add(wolf);
    }

    //remove dead wolves
    for(var i = 0; i<wolves.length; i++)
      if(wolves[i].position.x < mand.position.x-width/2)
        wolves[i].remove();
  }

	//Fixing camera to the man to make it seems like the wolves are moving
  camera.position.x = mand.position.x + width/4;

	//Adding background and making sure camera isn't on for the background
  background(255, 255, 255);
  camera.off();
  image(bgImg, 0, 0);
  camera.on();

	//Drawing our sprites
  drawSprites(wolves);
  drawSprite(mand);

}

//The eaten function, that stops the game and plays sound
function eaten() {
  updateSprites(false);
  gameStop = true;
	randomsound.play();
}

//New game function, cleans up the wolves and resets position
function StartGame() {
  wolves.removeSprites();
  gameStop = false;
  updateSprites(true);
  mand.position.x = width/2;
  mand.position.y = height/2;
	nufalmer.play();
}

//mouse click also starts game (for discoverability)
function mousePressed() {
  if(gameStop)
    StartGame();
}

//Adjusting the game to your window
function windowResized() {
	setup();
}
