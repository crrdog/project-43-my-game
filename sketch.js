

var jet;
var goldCoin;
var aestroid1, aestroid2;
 


function preload(){
 
  jet_image = loadImage("jet.png");
  goldCoin_img = loadImage("gold coins.png");
  aestroid1_img = loadImage("aestroid1.png");
  aestroid2_img= loadImage("aestroid2.png");
  background_img = loadImage("space background.png");
}

function setup(){
  
  createCanvas(1200,730);
  jet= createSprite(1100,400,200,200);
  jet.addImage(jet_image);
  jet.scale=0.25;
  



  bg=createSprite(1000,500);
  bg.addImage(background_img);
  bg.scale=3.25;

  aestroid1=createSprite(300,200);
  aestroid1.addImage(aestroid1_img);
  aestroid1.scale=0.65;

  aestroid2=createSprite(300,650);
  aestroid2.addImage(aestroid2_img);

  goldCoin=createSprite(300,400);
  goldCoin.addImage(goldCoin_img);
  goldCoin.scale=0.75;

}

function draw() {

  jet.depth=bg.depth;
  jet.depth=jet.depth+1;
  jet.y=World.mouseY;
  drawSprites();
}