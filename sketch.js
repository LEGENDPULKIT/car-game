//add movingrect and fixedrect sprite
var movingcircle,fixedcircle;


function setup() {
  createCanvas(800,400);

  //ceate movingrect sprite
  movingcircle=createSprite(400,200,80,30);
  movingcircle.shapeColor="green";
movingcircle.velocityX=-2;
  //create fixedrect sprite
  fixedcircle=createSprite(200,200,50,80);
  fixedcircle.shapeColor="green";
}

function draw() 
{
  //clear the background
  background(0);  

  //give control to movingrect
 // movingcircle.x=World.mouseX;
  ///movingcircle.y=World.mouseY;

  //change the x-axis of both the object when they touch each other
  bounceOff(movingcircle,fixedcircle);
  

  

  //draw sprites
  drawSprites();

}

