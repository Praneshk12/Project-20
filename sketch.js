var BG, BG_Img;
var cat, catIMG;
var mouse;

var gameState = "PLAY" ;
function preload() {
  backImg = loadImage("garden.png")
  catImg1= loadAnimation("cat1.png");
  catImg2=loadAnimation("cat2.png","cat3.png");
  catImg3= loadAnimation("cat4.png");
  mouseImg1=loadAnimation("mouse1.png");
  mouseImg2= loadAnimation("mouse2.png","mouse3.png");
  mouseImg3=loadAnimation("mouse4.png");

}
function setup() {
  createCanvas(800,600);
  //creates Backgrounds and adds image to it
  BG = createSprite(400,250, 50, 50);
  BG.addImage(backImg);
  BG.scale = 1;

  //creates cat and adds image to it
  cat = createSprite(600,500,1,1);
  cat.addAnimation("catRunning", catImg1);
  cat.scale = 0.2;

  //creates mouse and adds image to it
  mouse = createSprite(200,500,10,10);
  mouse.addAnimation("mouseRunning", mouseImg1);
  mouse.scale = 0.15;
}
 
function draw() {
  background(0);
  drawSprites();
  
  //if cat is touching mouse...
  if(cat.x - mouse.x < (cat.width - mouse.width)/2) { 
        //cat velocity stops
        cat.velocityX= 0;
        //changes animation
        cat.addAnimation("tomLastImage", catImg3);
        cat.x = 300;
        //scales cat image
        cat.scale= 0.2;
        cat.changeAnimation("tomLastImage");
        mouse.addAnimation("jerryLastImage", mouseImg3);
        //scales mouse image
        mouse.scale= 0.15;
        mouse.changeAnimation("jerryLastImage");
    }  
}

function keyPressed(){

    //if left arrow is pressed...
  if(keyCode === LEFT_ARROW){
      //cat moves leftward and changes animation
      cat.velocityX = -5; 
      cat.addAnimation("catRunning", catImg2);
      cat.changeAnimation("something");
      //mouse changes animation
      mouse.addAnimation("mouseSomething", mouseImg2);
      mouse.changeAnimation("something2");
  }
}
