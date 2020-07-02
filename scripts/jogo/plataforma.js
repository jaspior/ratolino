class Plataforma extends Coletaveis{

  constructor(imagem, x, variacaoY, larguraSprite, alturaSprite, proporcao,personagem){
      super(imagem, x, variacaoY, larguraSprite, alturaSprite, proporcao)
  this.personagem = personagem;
  this.velocidade = - this.personagem.velocidade;
    this.y = height - this.altura - this.variacaoY
  
  }
  
 move(key) {
   
   this.x = this.x + this.velocidade/10;

    if (keyIsDown(RIGHT_ARROW)) {

      
      this.x = this.x + this.velocidade/5;

    }
    if (keyIsDown(LEFT_ARROW)) {
    
      
      this.x = this.x - this.velocidade/5;

    }

    if (this.x < 0) {
      
      this.x = width - this.largura;
    }
    if (this.x > width - this.largura) {
      
      this.x = 0;
    }



  }
  
  subiu() {
      
    
    
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura,
      2,
      this.personagem.x,
      this.personagem.y - this.personagem.altura + 5,
      this.personagem.largura,
      this.personagem.altura)
          
          
     return colisao;
  }
  
  
}  
