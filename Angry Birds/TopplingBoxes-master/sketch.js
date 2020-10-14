const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1;
var backgroundImage
function preload(){
backgroundImage=loadImage("sprites/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    Pig1=new Pig(810,350)
    Log1=new Log(810,260,300,PI/2)
    ground = new Ground(600,height,1200,20)
platform= new Ground(150,305,300,170)
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    Pig2=new Pig(810,220)
    Log2=new Log(810,180,300,PI/2)

box5=new Box(810,160,70,70)
Log3= new Log(720,120,150,PI/7)
Log4=new Log(910,120,150,-PI/7)
bird= new Bird (200,50)


Sling1= new SlingShot(bird.body,{x:200,y:50})

}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    box1.display();
    box2.display();
   Pig1.display();
   Log1.display();
   box3.display();
   box4.display();
  Pig2.display();
  Log2.display();
  box5.display();
  Log3.display();
  Log4.display();
  platform.display();
    ground.display();
    bird.display();
    Sling1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{
        x:mouseX,y:mouseY
    })
}
function mouseReleased(){
    Sling1.fly()
}
 function keyPressed(){
     if(keyCode=32){
    Sling1.attach(bird.body)}
 }