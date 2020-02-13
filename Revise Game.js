//initiate game state
var PLAY=1;
var END=2;
var gameState=PLAY;

var score=0;

function preload()
{
    road=loadImage("sprites/road.png");
    enmy1=loadImage("sprites/eny1.png");
    enmy2=loadImage("sprites/eny4.png");
    enmy3=loadImage("sprites/eny3.png");
    car1=loadImage("sprites/car.png");
}

function setup()
{
    canvas=createCanvas(400,400);

    track=createSprite(180,200,20,400);
    track.addImage("rod",road);
    track.scale=2;
    car=createSprite(180,350,20,50);
    car.addImage("caru",car1);
    car.scale=0.35;

    invi=createSprite(50,200,10,400);
    invi1=createSprite(320,200,10,400);
    invi.visible=false;
    invi1.visible=false;

    //create carss group
    carss=createGroup();




}

function draw() 
{
  //clear the background
  background("green");
  
  //set gamestate to play
  if(gameState===PLAY)
  {
    
  //make score
  if(carss.setLifetimeEach(130))
  {
    score=score+25;
  }
    
  //call cars
  cars();
  
  //give velocity to track
  track.velocityY=3;
  
  //reset the track
  if(track.y>400)
  {
    track.y=track.width/2;
  }
  
  //giving control to car
  if(keyWentDown("left"))
  {
    car.velocityX=-3;
  }
  if(keyWentUp("left"))
  {
    car.velocityX=0;
  }
  
  if(keyWentDown("RIGHT"))
  {
    car.velocityX=3;
  }
  if(keyWentUp("RIGHT"))
  {
    car.velocityX=0;
  }
  
  
  
  //give lose condition
  if(car.isTouching(carss))
  {
  gameState=END;
  
 
  }
}

if(carss.y>460)
{
    score=score+50
}
  
  //set gamestate to end
  if(gameState===END)
  {

    //change track velocity
    track.velocityY=0;
    
   
    
    //destroy everything
    
    carss.destroyEach();
    car.destroy();
    track.destroy();
    
    //write lose text
    textSize(20);
    fill("blue");
    text("YOU ARE THE LOSER",100,200);
  }
  
  
  
  //make score visible
  fill("red");
  textSize(10);
  text("SCORE :"+score,340,50);
  
  
  
  //make car collide with invibleground
  car.collide(invi);
  car.collide(invi1);
  
  
  drawSprites();
  
}


//create cars class
function cars()
{
  if(World.frameCount%90===0)
  {
    var car=createSprite(50,-100,10,50);
    //car.setAnimation("car"+randomNumber(1,6));
    car.scale=0.5;
    car.velocityY=3;
    car.x=random(50,310);

    carss.add(car);

     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: car.addImage(enmy1);
               break;
       case 2: car.addImage(enmy2);
               break;
       case 3: car.addImage(enmy3);
               break;
       default: break;
     }
     car.scale=0.25;
    
    //set lifetime 
    car.lifetime=150;
    if(car.y>400)
    {
        score=score+50;
    }
  }
}