class Coletaveis {

  constructor(imagem, x, variacaoY, larguraSprite, alturaSprite,velocidade, proporcao,cai){
    
    this.imagem = imagem;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.proporcao = proporcao;
    this.largura = larguraSprite*this.proporcao;
    this.altura = alturaSprite*this.proporcao;
    this.x = x;
    this.xi = this.x;
    this.variacaoY = variacaoY;
    //this.y = height - this.altura - this.variacaoY;
    this.y = 0;
    this.yi = height - this.altura - this.variacaoY;
    this.velocidade = velocidade;
    this.coletado = false;
    this.velocidadeY = -1;
    this.gravidade = 2
    this.cai = cai;
  
  }
  
exibe(){
      
        this.coletado = false;   
        image(this.imagem, this.x, this.y, this.largura, this.altura);   
      
  }  
  
remove(){
  if(this.coletado){
    if(this.cai){
    //se pa usar o splice
    this.x = - 200;
    this.y =    0;
    this.velocidadeY = 0
    setTimeout(() => {
      this.x = random(0,width-this.larguraSprite);
      this.y = 0;
      this.exibe(),
      this.coletado = false;
    }, 1000*parseInt(random(1,5))); //mseconds
  }
  if(!this.cai){
    this.x = - 200;
    
    
    setTimeout(() => {
      this.x = random(0,width-this.larguraSprite);
      //this.y = 0;
      this.exibe(),
      this.coletado = false;
    }, 5000*parseInt(random(1,5))); 
  
  
  
  }
  }
}  
  
   aplicaGravidade() {
    this.y = this.y + this.velocidadeY;
    this.velocidadeY = this.velocidadeY + this.gravidade

    if (this.y > this.yi) {
      this.y = this.yi;
      this.velocidadeY = 0;
     
    }
  }

}