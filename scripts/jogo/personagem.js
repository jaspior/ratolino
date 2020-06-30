class Personagem extends Animacao {

  //enxugar o construtor
  constructor(matriz, imagem, x, variacaoY, larguraSprite, alturaSprite, proporcao, velocidade) {
    super(matriz, imagem, x, variacaoY, larguraSprite, alturaSprite, proporcao);

    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;

    this.velocidadeDoPulo = 0;
    this.gravidade = 5;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
    this.velocidade = velocidade;


  }



  move(key) {

    if (keyIsDown(RIGHT_ARROW)) {

      //if(key == 'arrowRifht'){
      this.sentido = true;
      this.x = this.x + this.velocidade;

    }
    if (keyIsDown(LEFT_ARROW)) {
      //if(key == 'arrowLeft'){
      this.sentido = false;
      this.x = this.x - this.velocidade;

    }

    if (this.x < 0) {
      this.sentido = !this.sentido;
      this.x = 0;
    }
    if (this.x > width - this.largura) {
      this.sentido = !this.sentido;
      this.x = width - this.largura;
    }



  }








  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;

      //somDoPulo.play();  
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

    if (this.y > this.yInicial) {
      this.y = this.yInicial
      this.pulos = 0;
    }
  }

  ficaInvencivel() {

    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    }, 1000); //mseconds

  }

  estaColidindo(objeto) {
    if (this.invencivel) {
      return false;
    }
    const precisao = .7
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      objeto.x,
      objeto.y,
      objeto.largura * precisao,
      objeto.altura * precisao
    );

    return colisao;
  }
  
 

}