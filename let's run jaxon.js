var jackImage,pathImage,path,left_b,right_b,subwayImage,subway,
function preload(){
jackImage.loadAnimation("jack1.png","jack2.png","jack3.png","jack4.png","jack5.png")  ;
pathImage.loadAnimation("path.png");
subwayImage.loadAnimation("subway.png");

}


function setup(){
createCanvas(400,400);
path=createSprite(200,200);
path.addImage(pathImage);
path.y=path.height/30;
jack-createSprite(180,340,50,170);
jack.addAnimation("running",jackImage);
subway=createSprite(200,80,100,100);
subway.addImage(subwayImage);
left_b=createSprite(0,300,1000,600);
right_b=createSprite(390,300,80,600);
left_b.visible=false
right_b.visible=false
}


function draw(){
background(0);
path.velocityY=5;
jack.x=World.mouseX
if(path.y>400){
  path.Y=height/2
}

jack.collide(left_b);
jack.collide(right_b);
edges=createEdgeSprite()
jack.collide(edges[3])
  drawSprites();

}
