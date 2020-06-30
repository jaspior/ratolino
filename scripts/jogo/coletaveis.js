class Coletaveis {

  constructor(imagem, x, variacaoY, larguraSprite, alturaSprite, proporcao){
    
    this.imagem = imagem;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.proporcao = proporcao;
    this.largura = larguraSprite*this.proporcao;
    this.altura = alturaSprite*this.proporcao;
    this.x = x;
    this.xi = this.x;
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
    this.yi = this.y;
    this.velocidade = 0;
    this.coletado = false;
  
  }
  
exibe(){
      
        this.coletado = false;   
        image(this.imagem, this.x, this.y, this.largura, this.altura);   
      
  }  
  
remove(){
  if(this.coletado){
    //se pa usar o splice
    this.x = - 200;
    this.y =    0;}
    setTimeout(() => {
      this.x = this.xi;
      this.y = this.yi;
      this.exibe()
    }, 5000); //mseconds
}  
  

}