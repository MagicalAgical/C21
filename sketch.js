
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine
let world
var ball;
var radius = 40;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

ground = new Ground(width/2,670,width,20)

leftside = new Ground(1100,600,20,120)
rightSide = new Ground(1350,600,20,120)

var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2,
}

	//Create the Bodies Here.
ball = Bodies.circle(260,100,radius/2,ball_options)
World.add(world,ball)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,30);
  ground.show();
  leftside.show();
  rightSide.show();
  
  drawSprites();
 

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});

	}
}


