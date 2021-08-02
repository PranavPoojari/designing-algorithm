var fixedRect
var movingRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(600, 200, 50, 100);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true
  movingRect=createSprite(200, 200, 100, 50);
  movingRect.shapeColor = "red";
  movingRect.debug = true
  

}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  

 if (touch(fixedRect, movingRect)){

    console.log("working")
 }
  drawSprites();
}



