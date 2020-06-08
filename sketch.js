const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Ground;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,30,50,50);
    Ground = new ground(200,380,400,10);
    box2 = new Box (220,10,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    Ground.display();
    
    box1.display();
    box2.display();

}