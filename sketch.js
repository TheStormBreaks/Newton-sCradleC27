
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roofObject;
var rope1, rope2, rope3, rope4, rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(350,90,280,20);

	bobDiameter=100;

	bobObject1 = new bob(280,420,40);
	bobObject2 = new bob(320,420,40);
	bobObject3 = new bob(360,420,40);
	bobObject4 = new bob(400,420,40);
	bobObject5 = new bob(440,420,40);
	roof1 = new roof(380,100,600,30);
	rope1 = new rope(bobObject1.body,roof1.body,-100,0);
	rope2 = new rope(bobObject2.body,roof1.body,-60,0);
	rope3 = new rope(bobObject3.body,roof1.body,-20,0);
	rope4 = new rope(bobObject4.body,roof1.body,20,0);
	rope5 = new rope(bobObject5.body,roof1.body,60,0);
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  	}
}









