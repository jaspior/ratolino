class FaseRuner{

  constructor(){
  
      this.inimigoAtual = 0;

  }


  setup() {


    
    //cenario = new Cenario(imagemCenario1[0], 0);
    for (var i = 0; i < imagemCenario1.length - 1; i++) {
      var p = new Cenario(imagemCenario1[i], i);
      cenario1.push(p);
      

    }



    pontuacao = new Pontuacao();
    personagem = new Personagem(matrizPersonagem, imagemPersonagem[0],imagemPersonagem[1] , 5, 5, 100, 100, 0.5, 7);
    
    const inimigo = new Inimigo(matrizGatuno, imagemGatuno, width - 52, 5, 85, 50, 2, 5, 30,false);

    const inimigoMosca = new Inimigo(matrizMosca, imagemMosca, width - 52, height/2, 60, 60, 0.5, 5, 50,true);

    inimigos.push(inimigo);
    inimigos.push(inimigoMosca);

  }



  keyPressed(key) {
    if (key === "ArrowUp") {
      personagem.pula();
    }

  }

  draw() {
    
    botaoTeste.remove();
     
    
    //cenario.exibe();
    for (var i = 0; i < cenario1.length; i++) {
      cenario1[i].exibe();
      cenario1[i].move();
    }



    pontuacao.exibe();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {

      this.inimigoAtual++;
      if (this.inimigoAtual > 1) {
      this.inimigoAtual = 0;
      }
      inimigo.velocidade = parseInt(random(5, 20));
      inimigo.aparece();
      
          
      
    


    }


    
    //exiber personagem por ultimo pq ele buga o resto. 
    personagem.exibe();
    personagem.aplicaGravidade();
    
    
    

    if (personagem.estaColidindo(inimigo)) {

      personagem.ficaInvencivel();
      console.log('colide');  
       
      }
    


  }
  
  
  
}