  //Para este proyecto estás usando Sprites, por lo que no necesitas usar la clase ground.
  //Además de que recuerda que una clase y un objeto no pueden llamarse igual.

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Crea el Suelo

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


if(keyDown(LEFT_ARROW)){


	if(packageSprite.y<250){
		Matter.Body.translate(packageBody,{x:-20,y:0});
	}
	helicopterSprite.x=helicopterSprite.x-20;
}


if(keyDown(RIGHT_ARROW)){
	if(packageSprite.y<250){
		Matter.Body.translate(packageBody,{x:20,y:0});
	}
	helicopterSprite.x=helicopterSprite.x+20;
}

//Cuando el helicóptero se mueve, el paquete debe moverse junto con él.
//Hacemos un condicional para decir que si el paquete está "arriba" su posición debe ser igual a la del helicóptero



if(keyCode===DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false);
}
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 



  //No necesitas ground.display. Para este proyecto ground es un sprite, no un objeto de motor físico



  drawSprites();
  
  
 
}
