//Algorithms 
//algo for istouching
var frect,mrect;
function setup() {
  createCanvas(800,400);
  frect=createSprite(400, 200, 50, 50);  //width=50/2=25
  frect.shapeColor="green"
  mrect=createSprite(400, 200, 80, 50);  //width=80/2=40,40+25=65
  mrect.shapeColor="green"
  frect1=createSprite(500, 200, 50, 50);  //width=50/2=25
  frect1.shapeColor="green"
  mrect1=createSprite(600, 200, 80, 50);  //width=80/2=40,40+25=65
  mrect1.shapeColor="green"
  
  trect = createSprite(200,100,50,50);
  trect.shapeColor = "blue";
  trect.velocityY = 1;

  brect = createSprite(200,300,50,50);
  brect.shapeColor = "cyan";
  brect.velocityY = -1;

}

function draw() {
  background(255,255,255);  
  mrect.x=mouseX
  mrect.y=mouseY
  console.log(mrect.x-frect.x)   //disctance
  //algo for istouching
  if(istouching(mrect1,mrect))
  {
    mrect1.shapeColor = "blue";
    mrect.shapeColor = "blue";
  } 
  else
  {
    mrect.shapeColor = "green";
    mrect1.shapeColor = "green";
  } //function call
  istouching(frect1,mrect);
  istouching(frect,mrect);

bounceOff(brect,trect)

  drawSprites();
}
