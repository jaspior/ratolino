class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, larguraSprite, alturaSprite, proporcao, velocidade, delay,voador) {
    super(matriz, imagem, x, variacaoY, larguraSprite, alturaSprite, proporcao)
    
    this.velocidade = velocidade;
    this.delay = delay;
    this.x = width + delay;
    this.x = width;
    this.voador = voador;
  }
  
  move() {
    this.x = this.x - this.velocidade
    
    if(this.x < -this.largura - this.delay){
    if(this.x < - this.largura){
      this.x = width
    }
    }
  }
  
  aparece(){
    
    this.x = width;
    if(this.voador){
      this.y = parseInt(random(5,height));
    }
  }
  
}