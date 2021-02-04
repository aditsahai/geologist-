
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var ground;
var rubber;
var sand1 , sand2 , sand3 , sand4 , sand5;
var Ironparticle;

function preload()
{
	
}

function setup() {
	 var canvas = createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(100,400,100,300);
	stone = new Stone(300,200,300,20);
	ground = new Ground(600,height,1200,20);
	rubber = new Rubber(200,300,100,50);
	sand1 = new Sand(200,300,10,10);
	sand2 = new Sand(200,300,10,10);
	sand3 = new Sand(200,300,10,10);
	sand4 = new Sand(200,300,10,10);
	sand5 = new Sand(200,300,10,10);
	//Ironparticle = new IronParticle(400,200,10,10);
	

	


	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  hammer.display();
  stone.display();
  ground.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  //Ironparticle.display();
 
  
  drawSprites();
 
}



