class Teste {

  constructor() {


    this.inimigoAtual = 0;

  }


  setup() {


    
    //cenario = new Cenario(imagemCenario1[0], 0);
    for (var i = 0; i < imagemCenario1.length - 1; i++) {
      var p = new Cenario(imagemCenario1[i], i / 10);
      cenario1.push(p);
      

    }



    pontuacao = new Pontuacao();
    personagem = new Personagem(matrizPersonagem, imagemPersonagem[0],imagemPersonagem[1] , 5, 5, 100, 100, 0.5, 7);
    vida = new Vida();
    queijo = new Coletaveis(imagemQueijo, width - 200, 5, 30, 30, 1);
    plataforma = new Plataforma(imagemPlataforma, width / 2, height / 5 * 2, 30, 10, 3, personagem);

    const inimigo = new Inimigo(matrizGatuno, imagemGatuno, width - 52, 5, 85, 50, 2, 5, 30,false);

    const inimigoMosca = new Inimigo(matrizMosca, imagemMosca, width - 52, height/2, 60, 60, 0.5, 5, 50,true);

    inimigos.push(inimigo);
    inimigos.push(inimigoMosca);
    gameOver = false;

  }



  keyPressed(key) {
    if (!gameOver && key === "ArrowUp") {
      personagem.pula();
    }

    
  }

  draw() {
    
    botaoStart.remove();
     
    
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


    queijo.exibe();
    queijo.aplicaGravidade();
    plataforma.exibe();
    plataforma.move();
    //exiber personagem por ultimo pq ele buga o resto.
    vida.exibe();
    vida.anima();
    personagem.exibe();
    personagem.aplicaGravidade();
    personagem.move();



    if (personagem.estaColidindo(queijo)) {
      queijo.coletado = true;
      queijo.remove();
      pontuacao.adicionarPonto();
      vida.ganha();

    }


    if (plataforma.subiu()) {
      personagem.pulos = 0;
      personagem.velocidadeDoPulo = 0;
      personagem.y = plataforma.y - personagem.altura;
      personagem.x = personagem.x + plataforma.velocidade * 0.5;

    }
   if (personagem.estaColidindo(inimigo)) {

      personagem.ficaInvencivel();
      console.log('colide');  
      vida.perde();
     personagem.ficaInvencivel();
     if (vida.health < 0) {
        //image(imagemGameOver, width / 2 - 200, height / 3);
        //noLoop()
        somJogo.stop();
        gameOver = true;
        cenaAtual = 'game_Over'
        
       
      }
    


  }
}
  

}