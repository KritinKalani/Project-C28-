
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,ground,tree,slingShot;

function preload(){
	boy1 = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

ground = new Ground(400,550);

	boy = createSprite(200,330,20,20);
	boy.addImage("boy.png",boy1)
	boy.scale = 0.1;

	tree = new Tree();
	//Create the Bodies Here.
	stone = new Stone(150,260,25);

	mango1 = new Mango(600,120,20);
	mango2 = new Mango(480,200,20);
	mango3 = new Mango(750,220,20);
	mango4 = new Mango(550,240,20);
	mango5 = new Mango(570,170,20);
	mango6 = new Mango(659,170,20);
 
	//ground = createSprite(400,590,800,20);
	/* ground.addImage("ground.jpg",ground1)
	ground.scale = 1; */

	slingShot = new SlingShot(stone.body,{x: 150,y: 270});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(137,207,240);

  
  slingShot.display();
  ground.display();
  tree.display();
   mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
/* if(mango1.x-stone.x <= mango1.width/2+stone.width/2){
	mango1.velocityY = 10;
} */

 /*  if(keyCode === UP_ARROW){
	stone = new Stone(150,450,50,50);
	stone.display();
	slingShot.display();
  } */
  //ground.display();
  detectCollision();
  drawSprites();
  stone.display();
}


function mouseDragged(){
	Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
	slingShot.fly();
}

function detectCollision(){
	var distance = dist(stone.body.position.x,stone.body.position.y,mango1.body.position.x,mango1.body.position.y)
	//console.log(distance)
	if(distance<=mango1.radius + stone.radius){
		Body.setStatic(mango1.body,false);
	}
	var distance1 = dist(stone.body.position.x,stone.body.position.y,mango2.body.position.x,mango2.body.position.y)
	//console.log(distance)
	if(distance1<=mango2.radius + stone.radius){
		Body.setStatic(mango2.body,false);
	}
	var distance2 = dist(stone.body.position.x,stone.body.position.y,mango3.body.position.x,mango3.body.position.y)
	//console.log(distance)
	if(distance2<=mango3.radius + stone.radius){
		Body.setStatic(mango3.body,false);
	}
	var distance3 = dist(stone.body.position.x,stone.body.position.y,mango4.body.position.x,mango4.body.position.y)
	//console.log(distance)
	if(distance3<=mango4.radius + stone.radius){
		Body.setStatic(mango4.body,false);
	}
	var distance4 = dist(stone.body.position.x,stone.body.position.y,mango5.body.position.x,mango5.body.position.y)
	//console.log(distance)
	if(distance4<=mango5.radius + stone.radius){
		Body.setStatic(mango5.body,false);
	}
	var distance5 = dist(stone.body.position.x,stone.body.position.y,mango6.body.position.x,mango6.body.position.y)
	//console.log(distance)
	if(distance5<=mango6.radius + stone.radius){
		Body.setStatic(mango6.body,false);
	}
	/* if(mango2.body.position.x - stone.body.position.x < mango2.radius + stone.radius){
		Body.setStatic(mango2.body,false);
	}
	if(mango3.body.position.x - stone.body.position.x < mango3.radius + stone.radius){
		Body.setStatic(mango3.body,false);
	}
	if(mango4.body.position.x - stone.body.position.x < mango4.radius + stone.radius){
		Body.setStatic(mango4.body,false);
	}
	if(mango5.body.position.x - stone.body.position.x < mango5.radius + stone.radius){
		Body.setStatic(mango5.body,false);
	}
	if(mango6.body.position.x - stone.body.position.x < mango6.radius + stone.radius){
		Body.setStatic(mango6.body,false);
	} */
}

function keyPressed(){
	if(keyCode === 32){
		slingShot.attach(stone.body)
	}
}



