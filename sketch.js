
//Create namespace for Engine
const Engine = Matter.Engine;
//Create namespace for World
const World = Matter.World;
//Create namespace for Bodies
const Bodies = Matter.Bodies;
//Create namespace for Body
const Body = Matter.Body;

var world, engine;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //create the engine
  engine = Engine.create();
  //Add world to the engine
  world = engine.world;
  
  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  //create a ground
  ground = Bodies.rectangle(width/2, height-20, width, 40, ground_options);   
  //add to world
  World.add(world,ground);

  ball = Bodies.circle(width/2,10,width/40,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw(){
  background(51);

  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,width/40);
  //write a rectangle function to display ground.
  rect(ground.position.x, ground.position.y, width, 40);

}
