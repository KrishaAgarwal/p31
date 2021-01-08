const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var plinkos = [];
var divisions = [];
var particles = [];
var ground;
var divisionHeight = 150;

function setup() {
  createCanvas(305,550);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(150,538,300,25);

  for(var k = 0; k <=width; k = k+50){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 20; j <=width; j = j+30){
    plinkos.push(new Plinko(j,120));
  }

  for(var j = 5; j <=width-10; j = j+30){
    plinkos.push(new Plinko(j,190));
  }

  for(var j = 20; j <=width; j = j+30){
    plinkos.push(new Plinko(j,260));
  }

  for(var j = 5; j <=width-10; j = j+30){
    plinkos.push(new Plinko(j,330));
  }
  
  

}

function draw() {
  background(55,25,140);  
  Engine.update(engine);

  ground.display();

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if(frameCount%20 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10));
  }

  for(var t = 0; t < particles.length; t++){
    particles[t].display();
  }  
}