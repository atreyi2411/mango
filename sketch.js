
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boyImage,boy;
var engine,world

function preload()
{
	boyImage = loadImage("sprites/boy.png")	;
}

function setup() {
	createCanvas(800, 700);
	ground = new Ground(750, 570, 700, 20);
	boy = createSprite(800,200,10,10)
	boy.addImage(boyImage)
	
	tree = new Tree(600,300,150,200)
	mango1 = new Mango(600,300,10,10)
	mango2 = new Mango(610,320,10,10)
	mango3 = new Mango(630,350,10,10)
	mango4 = new Mango(670,360,10)
	mango5 = new Mango(690,310,10,10)
	mango6 = new Mango(710,400,10,10)
	mango7 = new Mango(730,300,10,10)
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  
  
  drawSprites();
 
}



