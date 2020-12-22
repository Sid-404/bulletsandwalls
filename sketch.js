var wall;
var bullet;
var speed;
var weight;
var thiccness
var def;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thiccness=random(22,83);
  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thiccness,height/2);
  wall.shapeColor=80,80,80;
}

function draw() {
  background(0);  
  if (wall.x-bullet.x<(bullet.width+wall.width)/2){
  bullet.velocityX=0;
  def=0.5*weight*speed*speed/thiccness*thiccness*thiccness;
    if (def<=10){
      wall.shapeColor="green";
    }
      else if (def>10){
        wall.shapeColor="red";
      }
  }
  drawSprites();
}