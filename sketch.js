const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myWorld, myEngine;
var ground1, base1, base2;

var polygon, polygonImage;
var slingshot;

function preload() {
  polygonImage = loadImage("polygon.png");
}

function setup() {
  createCanvas(800, 400);

  myEngine = Engine.create();
  myWorld = myEngine.world;
  Engine.run(myEngine);
  polygon = Bodies.circle(50, 200, 20);
  World.add(myWorld, polygon);


  ground1 = new Ground(400, 380, 800, 20);
  base1 = new Ground(400, 300, 200, 10);


  slingshot = new Slingshot(this.polygon, { x: 100, y: 200 });



  block1 = new Box(340, 275);
  block2 = new Box(370, 275);
  block3 = new Box(400, 275);
  block4 = new Box(430, 275);
  block5 = new Box(460, 275);


  block6 = new Box(355, 235);
  block7 = new Box(385, 235);
  block8 = new Box(415, 235);
  block9 = new Box(445, 235);

  block10 = new Box(370, 195);
  block11 = new Box(400, 195);
  block12 = new Box(430, 195);

  block13 = new Box(385, 155);
  block14 = new Box(415, 155);

  block15 = new Box(400, 115);


}

function draw() {
  background("lightblue");

  circle(50, 200, 20);
  imageMode(CENTER);
  image(polygonImage, polygon.position.x, polygon.position.y, 30, 30);
  // Engine.update(myEngine);
  ground1.display();
  base1.display();
  fill("pink");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill("skyblue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  fill("turquoise");
  block10.display();
  block11.display();
  block12.display();
  fill("grey");
  block13.display();
  block14.display();
  block15.display();

  slingshot.display();


}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}