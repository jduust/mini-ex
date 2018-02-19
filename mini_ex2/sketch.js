//Variables for this setting

var ulv, mand, slemmedyr, moegdyr, nufalmer, dummeulv, choices, randomsound;
var man,wolf,topborder,botborder,leftborder,rightborder;
var wolfspeed=6;
var bordersize=40;


function preload() {
  //preloading all the wonderful assets for the game so it runs smoothly once loaded
  ulv = loadImage('media/wolf.png');
  mand = loadImage('media/mand.png');
  soundFormats('mp3','ogg');
  dummeulv = loadSound('media/dummeulv.mp3');
  moegdyr = loadSound('media/moegdyr.mp3');
  nufalmer = loadSound('media/nufalmer.mp3');
  slemmedyr = loadSound('media/slemmedyr.mp3');
}

function setup() {
  //creating the playing ground
  createCanvas(windowWidth, windowHeight);

  //array of sounds to play from
  choices = [slemmedyr, moegdyr, dummeulv];

  //Creating the man and the borders, and making sure they stay where they're placed
  man=createSprite(windowWidth/2,windowHeight/2,300,78);
  man.addImage(mand)
  man.immovable=true;

  topborder=createSprite(windowWidth/2,-bordersize/2,windowWidth+bordersize*2,bordersize);
  topborder.immovable=true;
  botborder=createSprite(windowWidth/2,windowHeight+bordersize/2,windowWidth+bordersize*2,bordersize);
  botborder.immovable=true;
  leftborder=createSprite(-bordersize/2,windowHeight/2,bordersize,windowHeight);
  leftborder.immovable=true;
  rightborder=createSprite(windowWidth+bordersize/2,height/2,bordersize,windowHeight);
  rightborder.immovable=true;

  //Making the wolf as sprite, adding the image and defining speed
  wolf=createSprite(50,50,100,147);
  wolf.addImage(ulv)
  wolf.maxSpeed=wolfspeed;
}

function draw() {
  //background color
  background(150,220,340);

  //Defining randomsound to pick from array of sounds (different wolfscare techniques)
  randomsound = random(choices);

  /* Add this function to make the man follow mouse
  (results in many sounds playing at once if hit while moving mouse, so disabled by default)
  man.position.x = mouseX;
  man.position.y = mouseY;
*/

  //Making the wolf bouncy when it hits the borders and the man
  wolf.bounce(topborder);
  wolf.bounce(botborder);
  wolf.bounce(leftborder);
  wolf.bounce(rightborder);

  //play a random sound from the array when wolf hits man
  if(wolf.bounce(man))
    {
    randomsound.play();
    }
  wolf.bounce(man);

  //and lastly, drawing the man, wolf and borders
  drawSprites();
}

function mousePressed() {
  //this function is to start the game when mouse is clicked
  if(wolf.velocity.x==0&&wolf.velocity.y==0)
    wolf.setSpeed(wolfspeed,random(40-10,40+10));
    //Intro sound to make sure the wolf knows where the man is
    nufalmer.play();
}
