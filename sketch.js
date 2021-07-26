var bfly;
var lives=2;
var gamestate ="serve"
var start,finish,invisibleBrick1,invisibleBrick2,rightEdgedWall,leftEdgedWall;
var topEdgedWall,bottomEdgedWall,middleWall,bfly,brick2,spider,brick1;
function preload(){
  bricksimage=loadImage("b1.jpg")
bfly1=loadImage("butturfly.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
 start=createSprite(360,373,25,15);

start.scale=0.5;


 finish=createSprite(30,373,25,15);

finish.scale=0.5;

 invisibleBrick1=createSprite(105,120,170,10);
invisibleBrick1.shapeColor="white";

invisibleBrick2=createSprite(105,270,170,10);
invisibleBrick2.shapeColor="white";

 rightEdgedWall = createSprite(390, 150, 20, 320);

rightEdgedWall.width=20;
rightEdgedWall.height=320;

 leftEdgedWall = createSprite(10, 150, 20, 320);

leftEdgedWall.width=20;
leftEdgedWall.height=320;

 topEdgedWall = createSprite(200, 10, 360, 20);

topEdgedWall.width=360;
topEdgedWall.height=20;

bottomEdgedWall = createSprite(200, 390, 400, 20);

bottomEdgedWall.width=400;
bottomEdgedWall.height=20;

middleWall=createSprite(200,260,20,320);

middleWall.width=20;
middleWall.height=320;

bfly = createSprite(360, 345, 20, 20);
bfly.addImage(bfly1)

bfly.scale=0.14;

 brick1=createSprite(330,140,90,20);
brick1.addImage(bricksimage)

brick1.velocityX =-2;

brick2=createSprite(260,230,90,20);


brick2.velocityX =2;

 spider=createSprite(33,190,25,25);


spider.scale=0.13;
spider.velocityY=3.5;
spider.velocityX=3.5;
}
function draw() {
    background(bricksimage);
    drawSprites();
  bfly.velocityX=0;
  bfly.velocityY=0;
  text("Lives : " + lives,50,50);
//createEdgeSprites()
  brick1.bounceOff(middleWall);
  brick1.bounceOff(rightEdgedWall);
  
  brick2.bounceOff(middleWall);
  brick2.bounceOff(rightEdgedWall);
  
  spider.bounceOff(invisibleBrick1);
  spider.bounceOff(invisibleBrick2);
  spider.bounceOff(leftEdgedWall);
  spider.bounceOff(middleWall);
  
  bfly.bounceOff(rightEdgedWall);
  bfly.bounceOff(leftEdgedWall);
  bfly.bounceOff(bottomEdgedWall);
  bfly.bounceOff(topEdgedWall);
 // bfly.bounceOff(middleWall);
  
  if(keyDown(UP_ARROW)){
    bfly.velocityX=0;
    bfly.velocityY=-3;
  }
  if(keyDown(DOWN_ARROW)){
    bfly.velocityX=0;
    bfly.velocityY=3;
  }
  if(keyDown(LEFT_ARROW)){
    bfly.velocityX=-3;
    bfly.velocityY=0;
  }
  if(keyDown(RIGHT_ARROW)){
    bfly.velocityX=3;
    bfly.velocityY=0;
  }
  if(bfly.isTouching(brick2)){
    lives=lives-1;
    lifeover();
  }
 
  if(bfly.isTouching(brick1)){
    lives=lives-1;
   lifeover()
  }
  if(bfly.isTouching(spider)){
    lives=lives-1;
    lifeover()
  }
  

}

function lifeover(){
  if(lives>=1) {
     bfly.x=360
  bfly.y=345
  
  }
  else {
    
gameover = createSprite(200,200 );
   
    gameover.scale=1.2;
   bfly.destroy();
   brick1.destroy();
   brick2.destroy();
   spider.destroy();
   start.destroy();
   finish.destroy();
   rightEdgedWall.destroy();
   leftEdgedWall.destroy();
   topEdgedWall.destroy();
   bottomEdgedWall.destroy();
   middleWall.destroy();
   
  }

}
