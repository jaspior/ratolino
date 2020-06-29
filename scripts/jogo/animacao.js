class Animacao {
  constructor(matriz, imagem, x, variacaoY, larguraSprite, alturaSprite, proporcao){
    this.matriz = matriz;
    this.imagem = imagem;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.proporcao = proporcao;
    this.largura = larguraSprite*this.proporcao;
    this.altura = alturaSprite*this.proporcao;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
    
    
    this.frameAtual = 0;
    this.count = 0;
    this.sentido = true;
  }
  
    exibe(){
      
      if(this.sentido){
        
        scale(1,1);
        image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);   
      }
      
     if(this.sentido == false){
        
        scale(-1,1);
        image(this.imagem, -this.x - this.largura, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);   
     
     
     } 
    
    this.anima();
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
}