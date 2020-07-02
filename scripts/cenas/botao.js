class Botao {
  constructor(texto, x, y, proximoEstado) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    
    this.botao = createButton(this.texto);
    this.proximoEstado = proximoEstado;
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
       cenaAtual = this.proximoEstado;
       somJogo.loop(); 
       //gameOver = false;
        
        
  }
 
}