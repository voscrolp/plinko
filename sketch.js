
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var ground;

var divisionHeight = 200;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,875,800,400);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();

//create particles
  if(frameCount%30 == 0){
	  particles.push(new Particle(random(width/2+20, width/2-20),10,10));
  }

  for(var i = 0; i < particles.length; i++){
	  particles[i].display();
  }


//create plinkos
  for(var a = 50; a <= 750; a = a + 50){
	  plinkos.push(new Plinko(a,75,10));
  }

  for(var a = 75; a <= 725; a = a + 50){
	plinkos.push(new Plinko(a,175,10));
  }

  for(var a = 50; a <= 750; a = a + 50){
	plinkos.push(new Plinko(a,275,10));
  }

  for(var a = 75; a <= 725; a = a + 50){
	plinkos.push(new Plinko(a,375,10));
  }




  for(var z = 0; z < plinkos.length; z++){
	  plinkos[z].display();
  }

//create divisions
  for(var y = 0; y <= width; y = y + 80){
    divisions.push(new Ground(y,height-divisionHeight/2,10,divisionHeight));
  }

  for(var r = 0; r < divisions.length; r++){
    divisions[r].display();
  }

  drawSprites();
 
}



