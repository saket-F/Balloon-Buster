//defing variables
var background1,backgrnd;
var balloon1,balloon2,balloon3,balloon4;
var blue,green,red,pink;
var bow,bow1;
var arrow,arrow1;
var score = 0;
var blueGroup,greenGroup,pinkGroup,redGroup,arrowGroup;



function preload(){
 //load your images here 
  balloon1 = loadImage("blue_balloon0.png");
 balloon2 = loadImage("green_balloon0.png");
  balloon3 = loadImage("red_balloon0.png");
  balloon4 = loadImage("pink_balloon0.png");
  background1 = loadImage("background0.png");
  bow = loadImage("bow0.png");
  arrow1 = loadImage("arrow0.png");
  
}

function setup() {
  createCanvas(600, 600);
   //add code here
  backgrnd = createSprite(200,200,600,600);
  backgrnd.velocityX=-10;
  backgrnd.addImage(background1);
  backgrnd.scale=2.5;
  backgrnd.x = backgrnd.width/2;
    
   bow1 = createSprite(480,220,20,50);
  bow1.addImage(bow);
  bow1.scale=1;
  
  blueGroup = new Group();
  greenGroup = new Group();
  pinkGroup = new Group();
  redGroup = new Group();
  arrowGroup = new Group();
  
}

function draw() 
{
  

  
if (backgrnd.x < 0)
  {
      backgrnd.x = backgrnd.width/2;
  }
 
  bow1.y = World.mouseY
   
  //release arrow when space is pressed
  if(keyDown("space"))
    {
        createArrow();
    }
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon);

  if(World.frameCount % 80 === 0)
    {
      if (select_balloon === 1)
        {
          blueballoon();
        }
      else if (select_balloon === 2)
        {
          greenballoon();
        }
      else if (select_balloon === 3)
        {
          redballoon();
        }
      else if (select_balloon === 4)
        {
          pinkballoon();
        }
    }

if(blueGroup.isTouching(arrowGroup))
  {
    score = score+4;
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
  }
  
  if(greenGroup.isTouching(arrowGroup))
  {
    score = score+3;
   greenGroup.destroyEach();
    arrowGroup.destroyEach();
  }
  
  if(redGroup.isTouching(arrowGroup))
  {
    score = score+2;
    redGroup.destroyEach();
    arrowGroup.destroyEach();
  }
 
  if(pinkGroup.isTouching(arrowGroup))
  {
    score = score+1;
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
  }
  
  
drawSprites()
  
   textSize(20);
   text("score:" + score , 500,50);
  
  
}

function createArrow()
{
  arrow = createSprite(480,100,10,10);
  arrow.addImage(arrow1);
  arrow.velocityX = -6;
  arrow.scale=0.3;
  arrow.y = bow1.y;
  arrowGroup.add(arrow);
   return arrow ;
  
}

function blueballoon()
{
  blue = createSprite(0,Math.round(random(20,550)),10,10);
      blue.addImage(balloon1);
      blue.velocityX = 3 ;
      blue.lifetime = 150;
      blue.scale=0.1;
     blueGroup.add(blue);
     
}
function greenballoon()
{
  green = createSprite(0,Math.round(random(20,550)),10,10);
      green.addImage(balloon2);
      green.velocityX = 3 ;
      green.lifetime = 150;
      green.scale=0.1;
  greenGroup.add(green);
}

function redballoon()
{
  red = createSprite(0,Math.round(random(20,550)),10,10);
      red.addImage(balloon3);
      red.velocityX = 3 ;
      red.lifetime = 150;
      red.scale=0.1;
  redGroup.add(red);
}

function pinkballoon()
{
  pink = createSprite(0,Math.round(random(20,550)),10,10);
      pink.addImage(balloon4);
      pink.velocityX = 3 ;
      pink.lifetime = 150;
      pink.scale=1.2;
  pinkGroup.add(pink);
}

