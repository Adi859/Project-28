
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ;

var boyImg ; 
var boy ; 
var tree ; 
var mango1,mango2,mango3,mango4,mango5 ; 
var attach ; 
var engine, world ; 
var ground1 ; 


function preload() {

	boyImg = loadImage("boy.png") ; 
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(400,680,800,20) ; 

	stone = new Stone(50,495,40,40) ; 

	mango1 = new Mango(415,334,60,50) ; 
	mango2 = new Mango(688,291,60,50) ;
	mango3 = new Mango(661,181,60,50) ;
	mango4 = new Mango(532,178,60,50) ;
	mango5 = new Mango(531,255,60,50) ;

	attach = new Slingshot(stone.body,{x:220,y:493}) ; 
    
	tree = new Tree(585,400,700,700) ; 

    boy = createSprite(300,580) ; 
	boy.addImage(boyImg) ;
	boy.scale = 0.15 ;
 
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);

  //Engine.update(engine) ; 

  background(0);
  attach.display() ; 

  text(mouseX+","+mouseY,50,50) ; 



  drawSprites();


  ground1.display() ;
  stone.display() ;
  tree.display(); 
  mango1.display () ;
  mango2.display () ; 
  mango3.display () ;
  mango4.display ()  ; 
  mango5.display () ; 
  detectCollision(stone,mango1) ;
  detectCollision(stone,mango2) ;
  detectCollision(stone,mango3) ;
  detectCollision(stone,mango4) ;
  detectCollision(stone,mango5) ;

  
  

}


function mouseDragged(){
	
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY}) ; 
}


function mouseRealeased(){
	attach.fly() ; 
}



function detectCollision(lstone,lmango){

	if(lstone.body.position.x - lmango.body.position.x < lmango.diameter + lstone.diameter
		&& lmango.body.position.x - lstone.body.position.x  < lmango.diameter + lstone.diameter
		&&lstone.body.position.y -lmango.body.position.y < lmango.diameter + lstone.diameter
		&& lmango.body.position.y - lstone.body.position.y < lmango.diameter + lstone.diameter){
		Matter.Body.setStatic(lmango.body,false);
	}

}





  
  




