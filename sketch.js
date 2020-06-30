function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(400, 400);
  jogo = new Jogo();
  jogo.setup();
  cenas = {};
  frameRate(40);
 
}




/**function mousePressed() {
 
    personagem.pula()
   
 
}**/


function keyPressed(){
   jogo.keyPressed(key);
}


/**/

function draw() {
  
  jogo.draw();
  
}