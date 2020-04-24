const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var box6,box7, box8, box9,box10;
function preload() {
    //background("black");
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    //ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    box1 = new Raindrop(200,120);
    box2 = new Raindrop(320,120);
    //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);

    box3 = new Raindrop(200,240);
    box4 = new Raindrop(120,240);
    //pig3 = new Pig(810, 220);

    //log3 =  new Log(810,180,300, PI/2);

    box5 = new Raindrop(110,160);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    //bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    //chain = new Slingshot(bird.body,log6.body);
    box6 = new Raindrop(100,150);
    box7 = new Raindrop(100,50);
    box8 = new Raindrop(10,200);
    box9 = new Raindrop(50,60);
    box10 = new Raindrop(80,60);

}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    //ground.display();
    //pig1.display();
    //log1.display();

    box3.display();
    box4.display();
    //pig3.display();
    //log3.display();

    box5.display();
    //log4.display();
    //log5.display();

    //bird.display();
    //platform.display();
    //log6.display();
    //chain.display();  
    box6.display();
    box7.display();
    box8.display();  
    box9.display();
    box10.display();
}
