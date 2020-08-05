var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxtouch = 0;
var game = 1;

var boxpart1;
var boxpart2;

var name = prompt("Enter your name");

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 690);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor= "red";

	boxpart1 = createSprite(300,640,20,100);
	boxpart1.shapeColor = "red";
	boxpart2 = createSprite(500,640,20,100);
	boxpart2.shapeColor = "red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  textSize(21);
  text("Hi, " + name + "!",340,50);
  text("Down Arrow to Drop the Package",240,120);
  

  if(packageSprite.isTouching(groundSprite)){
	  Body.setStatic(packageBody, true);
	  boxpart1.shapeColor = (random(255),random(255),random(255));
	  boxpart2.shapeColor = (random(255),random(255),random(255));
	  groundSprite.shapeColor = (random(255),random(255),random(255));
	  
	  game = 0;
  }
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW && game == 1) {
	// Look at the hints in the document and understand how to make the package body fall only on
    Body.setStatic(packageBody, false);
  }
}



