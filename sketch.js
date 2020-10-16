var ENGINE = Matter.Engine;
var WORLD = Matter.World;
var BODIES = Matter.Bodies;
var CONSTRAINT = Matter.Constraint;

var engine, world; 

var bgImg;
var snake, apple;

function preload(){
  bgImg = loadImage("sprites/bg.jpg");
}

function setup(){
  createCanvas(700, 600);
  engine = ENGINE.create();
  world = engine.world;

  snake = new Snake(250,400);
  apple = new Apple(600,300);
}

function draw(){
  background(bgImg);
  ENGINE.update(engine);

  snake.display();
  apple.display();
  
  keyPressed();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.y = snake.y-5;
  }

  if(keyCode === DOWN_ARROW){
    snake.velocityY = 3;
  }

  if(keyCode === LEFT_ARROW){
    snake.velocityX = -3;
  }

  if(keyCode === RIGHT_ARROW){
    snake.velocityX = 3;
  }
}





