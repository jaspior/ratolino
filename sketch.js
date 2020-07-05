function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(400, 400);
  telaInicial = new TelaInicial();
  telaInicial.setup();
  teste = new Teste();
  tutorial = new Tutorial();
  game_Over = new GameOver();

  faseRuner = new FaseRuner();
  tutorial.setup();
  
  
  faseRuner.setup();
   teste.setup();
  cenas = {teste:teste,
    telaInicial:telaInicial,
           tutorial:tutorial,
    faseRuner:faseRuner,
    game_Over:game_Over};
  
  
  botaoStart = new Botao('Iniciar', width / 4, height / 2, 'teste');
  frameRate(40);
  botaoTeste = new Botao('Tutorial', width / 4, height / 2, 'tutorial');
  frameRate(40);
  

  
  
 
}





function mousePressed() {
    
    personagem.pula()
   
 
}


function keyPressed(){
   if(cenaAtual == 'teste'){
   teste.keyPressed(key);}
  if(cenaAtual == 'faseRuner'){
   faseRuner.keyPressed(key);}
  if(cenaAtual == 'game_Over'){
     game_Over.keyPressed(key);}
  if(cenaAtual == 'tutorial'){
   tutorial.keyPressed(key);}
}


/**/

function draw() {
  
   
  cenas[cenaAtual].draw();
  
}