var quit_button;

class Tutorial{

  constructor(

  
  
  ){
    this.botao = createButton('jogar');
    this.proximoEstado = 'teste';
    this.botao.mousePressed(() => this._alteraCena() );
    this.botao.addClass('botao-tela-inicial');
    this.existe = true;
    if(cenaAtual != 'tutorial'){
    this.botao.hide()}
   
  
  }
  
setup(){
 personagem_pula = new Personagem(matrizPersonagem, imagemPersonagem[0],imagemPersonagem[1] , 5, height/2, 100, 100, 0.5, 7);

personagem_mergulha = new Personagem(matrizPersonagem, imagemPersonagem[0],imagemPersonagem[1] , width/2 , 5, 100, 100, 0.5, 7);
inimigoTeste = new Inimigo(matrizSanic, imagemSanic,  width - 52, 5, 860, 860, 0.1, 5, 60,false);



}  

keyPressed(key){
   if (key === "ArrowUp") {
      personagem_mergulha.pula();
    }
 
    if (key === "ArrowDown") {
       personagem_mergulha.mergulha();
  
    }
  
}

draw() {
       
    botaoStart.remove();
    this.botao.position(0, 0); 
    this.botao.show();
  

    this._fundo();
    this._texto();
    stroke('#222222')
    strokeWeight(4);
    line(0, height/2, width, height/2);
    
    
     const inimigoVisivel = inimigoTeste.x < -inimigoTeste.largura;

    inimigoTeste.exibe();
    inimigoTeste.move();
    if(inimigoTeste.x < - inimigoTeste.largura){
      inimigoTeste.velocidade = - inimigoTeste.velocidade
    }
    if(inimigoTeste.x > width + inimigoTeste.largura + 10){
      inimigoTeste.velocidade = - inimigoTeste.velocidade
    }
    
    
    personagem_mergulha.exibe();
    personagem_mergulha.aplicaGravidade();
    
    personagem_pula.exibe();
    personagem_pula.aplicaGravidade();
    personagem_pula.move();
    
     if (personagem_mergulha.estaColidindo(inimigoTeste)) {
     
     if(personagem_mergulha.mergulhando){
        inimigoTeste.x = width + inimigoTeste.largura;}
       
        }
    
    
    
    }
  
  
  _fundo() {
      image(imagemTutorial, 0, 0, width, height);
  }
  
  _texto() {
     fill(0);
  strokeWeight(2);
  stroke(245, this.opacity);
  textAlign(CENTER);
  textFont('Georgia')
  textSize(20);
  text('use as setas direcionais para andar', width / 2, height / 4);
  text('colete os queijos para ganhar pontos e recuperar vida', width / 2, height / 4 + 20);
  text('Colida com os inimigos para perder vida.', width / 2, height / 4 + 40);
   text('Meteoros lhe deixam invencivel por 5 s', width / 2, height / 4 + 60);
  textSize(20);
  text('A seta para cima pula', width / 2, height / 5 * 3);
  text('Voce pode pular uma vez adicional no ar', width / 2, height / 5 * 3 + 20);
  text('Ao atingir pontuação suficiente, a seta para baixo lhe faz mergulhar', width / 2, height / 5 * 3 + 40);
  text('mergulhos destroem inimigos', width / 2, height / 5 * 3 + 60);
  textSize(20);
 
  
  }
  
   _alteraCena(){
    
    this.botao.remove();
       
       cenaAtual = this.proximoEstado;
       
        
        
  }



}