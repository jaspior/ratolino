function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(400, 400);
  telaInicial = new TelaInicial();
  telaInicial.setup();
  jogo = new Jogo();
  jogo.setup();
  cenas = {jogo:jogo,
    telaInicial:telaInicial};
  
  
  botaoStart = new Botao('Iniciar', width / 2, height / 2, 'jogo');
  frameRate(40);


 
}





function mousePressed() {
    
    personagem.pula()
   
 
}


function keyPressed(){
   jogo.keyPressed(key);
}


/**/

function draw() {
  
   
  cenas[cenaAtual].draw();
  
}