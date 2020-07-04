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
    queijo = new Coletaveis(imagemQueijo, width - 200, 5, 30, 30, 0, 1,true);
    meteoro = new PowerUp(imagemMeteoro, matrizMeteoro, width  - 300, 5, 30, 30 , 5, 1,false);
    plataforma = new Plataforma(imagemPlataforma, width / 2, height / 5 * 2, 30, 10, 3, personagem);

    const inimigo = new Inimigo(matrizGatuno, imagemGatuno, width - 52, 5, 85, 50, 2, 5, 30,false);

    const inimigoMosca = new Inimigo(matrizMosca, imagemMosca, width - 52, height/2, 60, 60, 0.5, 5, 50,true);

    const inimigoSanic = new Inimigo(matrizSanic, imagemSanic,  width - 52, 5, 860, 860, 0.1, 5, 60,false);
     
    inimigos.push(inimigoSanic);
    inimigos.push(inimigo);
    inimigos.push(inimigoMosca);
    
    gameOver = false;

  }



  keyPressed(key) {
    if (!gameOver && key === "ArrowUp") {
      personagem.pula();
    }
 
    if (!gameOver && key === "ArrowDown") {
       personagem.mergulha();
      if(personagem.y > personagem.yInicial){ personagem.ficaInvencivel(0.1);
    }
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
    pontuacao.pontua();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {

      this.inimigoAtual++;
      if (this.inimigoAtual > 2) {
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
    
    meteoro.exibe();
    meteoro.anima();
    meteoro.move();
    meteoro.aplicaGravidade();
    
    personagem.exibe();
    personagem.aplicaGravidade();
    personagem.move();



    if (personagem.estaColidindo(queijo)) {
      queijo.coletado = true;
      queijo.remove();
      pontuacao.adicionarPonto();
      vida.ganha();

    }

    if (personagem.estaColidindo(meteoro)) {
      meteoro.coletado = true;
      meteoro.sumiu();
      personagem.ficaInvencivel(5);
      //personagem.powerUp = true;
      //vida.ganha();

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
     personagem.ficaInvencivel(1);
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