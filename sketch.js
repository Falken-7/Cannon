const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rect1,rect2,rect3;
var g;
var head;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;


  head = new Head(350,350,60,70);
  rect1 = new Rect1(500,350,200,20);
  rect2 = new Rect1 (400,350,200,25);
 
  rect3 = new Rect1 (400,350,200,20);
  
  Ground1 = new Ground(600,380,1200,20);
  

}

function draw(){
  background("Green");
  Engine.update(engine);
  rect1.display();
  rect2.display();
 rect3.display();
  Ground1.display();
  head.display();
}