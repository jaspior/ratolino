class Botao {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    
    this.botao = createButton(this.texto);
    this.proximoEstado = 'jogo';
    this.botao.mousePressed(() => this._alteraCena() );
    this.botao.addClass('botao-tela-inicial');
  }
  
  draw() {
    this.botao.position(this.x, this.y);
    this.botao.center('horizontal');
    
  }
  
  _alteraCena(){
    
    this.botao.remove();
       somTeste.stop() 
       cenaAtual = 'jogo'
       somJogo.loop(); 
       //gameOver = false;
        
        
  }
 
}