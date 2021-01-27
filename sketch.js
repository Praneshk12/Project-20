var cat, cat1Img, cat2Img, cat3Img;
var mouse, mouse1Img, mouse2Img, mouse3Img;
var BG, BG_Img;
function preload() {
    //load the images here
    cat1Img = loadImage("cat1.png");
    cat2Img = loadAnimation("cat2.png", "cat3.png");
    cat3Img = loadImage("cat4.png");
    mouse1Img = loadImage("mouse1.png");
    mouse2Img = loadAnimation("mouse2.png", "mouse3.png");
    mouse3Img = loadImage("mouse4.png");
    BG_Img = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    
    BG = createSprite(50, 200, 20, 20);
    BG.addImage(BG_Img);
    BG.scale = 1.7;

    //create tom and jerry sprites here
    cat = createSprite(700, 600, 20, 20);
    cat.addImage(cat1Img);
    cat.scale = 0.25;
    
    mouse = createSprite(120, 600, 20, 20);
    mouse.addImage(mouse1Img);
    mouse.scale = 0.25;

}

function draw() {
    background(255);
    keyPressed();
    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.velocityX = 0;
        cat.addAnimation("catLastImage", cat3Img);
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImg", mouse3Img);
        mouse.changeAnimation("mouseLastImg");
        
    }

    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
    if(keyCode === LEFT_ARROW) {
        cat.velocityX = -5;
        cat.addAnimation("catRunning", cat2Img);
        cat.changeAnimation("catRunning");
    }
    
    
}
