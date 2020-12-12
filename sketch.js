const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, divisionHeight = 300, division=[];

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);

  ground = new Ground(width/2, 650, width, 20);

  for(var k = 0; k <=width; k = k + 80){
    division.push(new Division(k, 800-300/2, 10, 300));
  }
  
}

function draw() {
  Engine.update(engine);

  background(0); 
  ground.display(); 
  division.display();
  drawSprites();
}