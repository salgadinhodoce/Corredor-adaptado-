var estrada, paredeinvisivel, paredeinvisivel2;
var runner;
var estradaimagem, runnerimagem;
var dinheiroimagem, diamantesimagem, joiaimagem, espadaimagem;
var pontos=0;
var fimdejogo;
var fimdejogoimagem;
var estadodejogo="jogar";

function preload(){

estradaimagem=loadImage("Road.png");
runnerimagem=loadAnimation("Runner-1.png","Runner-2.png");
dinheiroimagem=loadImage("cash.png");
diamantesimagem=loadImage("diamonds.png");
joiaimagem=loadImage("jwell.png");
espadaimagem=loadImage("sword.png");
fimdejogoimagem=loadImage("fimdeJogo.png");



}

function setup(){

createCanvas(windowWidth,windowHeight);

estrada=createSprite(width/2,200);
estrada.addImage(estradaimagem);


runner=createSprite(width/2,height/2,20,20);
runner.addAnimation("correr",runnerimagem);
runner.scale=0.05;


//paredeinvisivel=createSprite(415,200,180,500);
//paredeinvisivel.visible=false;
//paredeinvisivel2=createSprite(1,200,150,500)
//paredeinvisivel2.visible=false;

fimdejogo=createSprite(width/2,height/2,50,50);
fimdejogo.addImage(fimdejogoimagem);
fimdejogo.visible=false;



dinheiroG= new Group();
diamantesG= new Group();
joiasG= new Group();
espadasG= new Group();
}


function draw(){


  background("white");


  if(estadodejogo==="jogar"){

    estrada.velocityY=5;
    if (estrada.y>height) {
      estrada.y=height/2;
    }
    
    runner.x=World.mouseX;

    var escolherobstaculo= Math.round(random(1,5));

if (World.frameCount %100 == 0){

if (escolherobstaculo == 1 ){
  criardinheiro();
} else if(escolherobstaculo == 2){

  criardiamantes();
} else if(escolherobstaculo == 3){

  criarjoias();
} else if(escolherobstaculo == 4){

  criarespadas();
}
else if(escolherobstaculo == 5){

  criarespadas2();
}


  

}
if(runner.isTouching(dinheiroG)){

  dinheiroG.destroyEach();
  pontos=pontos+1;

}

if(runner.isTouching(diamantesG)){

  diamantesG.destroyEach();
  pontos=pontos+1;


}

if(runner.isTouching(joiasG)){

  joiasG.destroyEach();
  pontos=pontos+1;


}

if(runner.isTouching(espadasG)){

  espadasG.destroyEach();
  runner.destroy();
  estadodejogo="fim";



  

}
  }

 else if(estadodejogo==="fim"){


  fimdejogo.visible=true;
  espadasG.destroyEach();
  diamantesG.destroyEach();
  dinheiroG.destroyEach();
  joiasG.destroyEach();

  espadasG.setVelocityYEach(0);
  diamantesG.setVelocityYEach(0);
  dinheiroG.setVelocityYEach(0);
  joiasG.setVelocityYEach(0);

  estrada.velocityY=0;





 } 



  


//  fill("blue"); 
//  textSize(100);
//  text("Pontuação:  "+ pontos,width-150,30);




//colisão e movimento
// runner.collide(paredeinvisivel);
// runner.collide(paredeinvisivel2);




// colisões contra obstaculos


















drawSprites();

fill("white"); 
 text("Pontuação:  "+ pontos,width-150,30);

}

function criardinheiro(){

 var dinheiro =createSprite(Math.round(random(50,width-50)),0,50,50);
 dinheiro.velocityY= 5;
 dinheiro.lifetime = 150;
 dinheiro.scale=0.1;
 dinheiro.addImage(dinheiroimagem);
 dinheiroG.add(dinheiro);

}

function criardiamantes(){

  var diamantes =createSprite(Math.round(random(50,width-50)),0,50,50);
  diamantes.velocityY= 5;
  diamantes.lifetime = 150;
  diamantes.scale=0.03;
  diamantes.addImage(diamantesimagem);
  diamantesG.add(diamantes);


}

function criarjoias(){

  var joias =createSprite(Math.round(random(50,width-50)),0,50,50);
  joias.velocityY= 5;
  joias.lifetime = 150;
  joias.scale=0.13;
  joias.addImage(joiaimagem);
  joiasG.add(joias);  


}

function criarespadas(){

  var espadas =createSprite(Math.round(random(50,width-50)),0,50,50);
  espadas.velocityY= 5;
  espadas.lifetime = 150;
  espadas.scale=0.13;
  espadas.addImage(espadaimagem);
  espadasG.add(espadas);  



}

function criarespadas2(){

  var espadas =createSprite(Math.round(random(50,width-50)),0,50,50);
  espadas.velocityY= 5;
  espadas.lifetime = 150;
  espadas.scale=0.13;
  espadas.addImage(espadaimagem);
  espadasG.add(espadas);  



}











