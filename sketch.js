var spacebg, iss, issImg, spaceCraft, spaceCraftImg1, spaceCraftImg2, spaceCraftImg3, spaceCraftImg4, gameState;

function preload() {
  spacebg = loadImage("images/spacebg.jpg")
  spaceCraftImg1 = loadImage("images/spacecraft1.png")
  spaceCraftImg3 = loadImage( "images/spacecraft3.png")
  spaceCraftImg2 = loadImage( "images/spacecraft2.png")
  spaceCraftImg4 = loadImage( "images/spacecraft4.png")
  issImg = loadImage("images/iss.png")
}

function setup() {
  canvas = createCanvas(800, 400);
  gamemode=0;
  spaceCraft = createSprite(600, 345.909, 50, 50);
  spaceCraft.addImage(spaceCraftImg1)
  spaceCraft.setCollider("rectangle",0,0,400,400)
  spaceCraft.scale = 0.25

  iss = createSprite(150, 100, 50, 50)
  iss.addImage(issImg)
   iss.setCollider("rectangle",20,-90,300,400);
  iss.scale=0.75
}

function draw() {
  if(gamemode===0){
if(spaceCraft.isTouching(iss))gamemode=1;
  background(spacebg);
  spaceCraft.debug=true;
  iss.debug=true;
  drawSprites();
  Move();
}
if(gamemode===1){
  gameMode1();
}
}

function Move(){
if(keyDown("UP_ARROW"))spaceCraft.y=spaceCraft.y-1;

if(keyDown("RIGHT_ARROW")){
  spaceCraft.x=spaceCraft.x+1;
spaceCraft.addImage(spaceCraftImg3)
}
if(keyWentUp("RIGHT_ARROW"))spaceCraft.addImage(spaceCraftImg1)
  
  if(keyDown("LEFT_ARROW")){
    spaceCraft.x=spaceCraft.x-1;
    spaceCraft.addImage(spaceCraftImg4);
  }

  if(keyWentUp("LEFT_ARROW"))spaceCraft.addImage(spaceCraftImg1)
    if(keyDown("DOWN_ARROW"))spaceCraft.addImage(spaceCraftImg2)
    if(keyWentUp("DOWN_ARROW"))spaceCraft.addImage(spaceCraftImg1)

}

function gameMode1(){
  textSize(50)
  text("SpaceCraft Docked",200,200)
}
