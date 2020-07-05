class TelaInicial {
  constructor() {
    this.x = width / 2;
    this.y = height;
  }
  
  setup(){
      somTeste.play();
      
  }
  

  draw() {
    this._fundo();
    this._texto();
    this._botaoTeste();
    this._botaoStart();
  }
  
  _fundo() {
      image(imagemTitle, 0, 0, width, height);
  }
  
  _texto() {
     fill(0);
  strokeWeight(2);
  stroke(245, this.opacity);
  textAlign(CENTER);
  textFont('Georgia')
  textSize(50);
  text('As aventuras de', width / 2, height / 3);
  textSize(150);
  text('Ratolino', width / 2, height / 5 * 3);
  //text('use para cima para pular e as setas para andar', width / 2, height / 7 * 4);
  
  textSize(20);
  //text('clique para jogar', width / 2, height / 7 * 5);
  }
  
  _botaoTeste() {
   botaoTeste.y = height /9 * 6.5;
   botaoTeste.draw();
    }
  
  _botaoStart() {
   botaoStart.y = height / 9 * 8;
   botaoStart.draw();
   
    
   }
  
  /** alteraCena(){
    
        cenaAtual = 'jogo';
      
        
  }**/
}