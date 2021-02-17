const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;
var dustbin1, dustbin2, dustbin3

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	dustbin1 = new dustBin(650,390,200,20);
	dustbin2 = new dustBin(750,370,20,100);
	dusbin3 = new dustBin(550, 370, 20, 100);

	paper = new Paper(100, 300, 10);

	ground = Bodies.rectangle(width/2, 400, width, 10,
	{isStatic: true});

	World.add(world, ground)

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode === RIGHT_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position, {x: 12, y: -13});
}
}



