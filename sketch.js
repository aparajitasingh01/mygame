const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Composite = Matter.Composite;

var engine, world, backgroundImg;

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;


  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  wall1=new Wall(100,15,200,PI/2);
  wall2=new Wall(150,160,450,PI/2);
  wall3=new Wall(width/2-130,100,200,PI);
  wall4=new Wall(300,208,140,PI);
  wall5=new Wall(300,408,100,PI);

  room=new Room(width/2+40,height/2+50)
}

function draw() {
  background("pink");

  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  room.display();
}

