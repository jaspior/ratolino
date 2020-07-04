class PowerUp extends Coletaveis {

    constructor(imagem, matriz, x, variacaoY, larguraSprite, alturaSprite,velocidade, proporcao){
    super(imagem, x, variacaoY, larguraSprite, alturaSprite,velocidade, proporcao)
    
      this.matriz = matriz;
      this.frameAtual = 0;
      this.count = 0;
      this.y = this.yi;
    }

exibe(){

  image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);   
      }


  
anima(){
    this.count++;
    if (this.count%10 == 0){
      this.frameAtual++
    
      if(this.frameAtual >= this.matriz.length - 1) {
        this.frameAtual = 0;
        this.count = 0;
        }
    }    
  }
  
  move(){
    this.x = this.x - this.velocidade;
    
    if(this.x - this.largura < 0){
       this.sumiu();
       }
  
  }
  
sumiu(){
  
  this.x = width + this.x + parseInt(5*random(0,10)) ;
  
}  
  
  
}