
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball;
let engine;
let world;

let groundObj;
let leftSide;
let rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(200,100,40,ball_options);
	World.add(world, ball)

	Engine.run(engine);

	groundObj = new Ground(width/2, 670, width, 20)
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1300,600,20,120);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, 40)
  
  drawSprites();
  groundObj.display();
  leftSide.display();
  rightSide.display();
  keyPressed();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:3, y:-13})
	}
}



