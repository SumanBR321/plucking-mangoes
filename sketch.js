const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,boy;
var ground,dot;
var mango1,mango2,mango3,mango4,mango5,mango6,mongo7,mango8;
var stone;
var chain;

var backgroundImg;
function preload()
{
	backgroundImg = loadImage("jungle1.jpg");
	tree = loadImage("tree.png");
	boy = loadImage("boy.png");
    
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(500,600,1500,10);
	mango1 = new Mango(800,250,40);
    mango2 = new Mango(900,200,40);
	mango3 = new Mango(750,180,40);
    mango4 = new Mango(950,300,40);
	mango5 = new Mango(800,100,40);
    mango6 = new Mango(680,240,40);
    mango7 = new Mango(680,140,40);
	mango8 = new Mango(580,280,40);
    stone = new Stone(90,430,40);
	chain = new Chain(stone.body,{x:90,y:430});
	Engine.run(engine);
}


function draw() {
	background(0,0,100);
	background(backgroundImg);
	Engine.update(engine);
    rectMode(CENTER);

  
  //drawSprites();

  ground.display();
  image(tree,500,25,500,600);
  image(boy,50,350,250,350);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display(); 
  mango7.display();
  mango8.display();
  stone.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

/*function detectollision(stone,mango){
    if(stone.body.position.x - mango.body.position.x < mango.r + stone.r && mango.body.position.x - stone.body.position.x < mango.r + stone.r && stone.body.position.y - mango.body.position.y < mango.r + stone.r && mango.body.position.y - stone.body.position.y < mango.r + stone.r){
        Matter.Body.setStatic(mango.body,false);
    }
}*/
function detectollision(stone,mango){
    var distance = dist(stone.body.position.x,stone.body.position.y,mango.body.position.x,mango.body.position.y)
    if(distance <= mango.r + stone.r){
        Matter.Body.setStatic(mango.body,false);
    }
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body,{x:235,y:420})
        chain.launch(stone.body);
    }
}

