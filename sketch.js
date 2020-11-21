var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 50);
  movingRect = createSprite(200,200,50,100);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(Math.abs (movingRect.x - fixedRect.x)<= movingRect.width/2 +fixedRect.width/2 && Math.abs (movingRect.y - fixedRect.y)<= movingRect.height/2 +fixedRect.height/2){
    movingRect.bounceOff(fixedRect);
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "blue";
  }
  drawSprites();
}         