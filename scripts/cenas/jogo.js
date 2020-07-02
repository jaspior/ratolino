class Jogo {

  constructor() {
    
    
  }


  setup() {

    //cenario = new Cenario(imagemCenario1[0], 0);
    for (var i = 0; i < imagemCenario1.length - 1; i++) {
      var p = new Cenario(imagemCenario1[i], i / 10);
      cenario1.push(p);
    }
    
    pontuacao = new Pontuacao();
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 5, 5, 100, 100, 0.5, 7);
    queijo = new Coletaveis(imagemQueijo, width - 200, 5, 30,30,1);
    plataforma = new Plataforma(imagemPlataforma, width/2, height/5*2, 30, 10, 3,personagem);
    
   
    

  }
  
 

  keyPressed(key) {
     if (key === "ArrowUp") {
      personagem.pula();
    }

  }

  draw() {
    
    //cenario.exibe();
  for (var i = 0; i < cenario1.length; i++){
    cenario1[i].exibe();
    cenario1[i].move();
  }
  
 
  
  pontuacao.exibe();
  
  
  queijo.exibe();
  queijo.aplicaGravidade();
  plataforma.exibe();
  plataforma.move();  
  //exiber personagem por ultimo pq ele buga o resto. 
  personagem.exibe();
  personagem.aplicaGravidade();
  personagem.move();

  
    
   if (personagem.estaColidindo(queijo)) {
      queijo.coletado = true; 
      queijo.remove();  
      pontuacao.adicionarPonto();
      
   }
   
 
    if(plataforma.subiu()){
      personagem.pulos = 0;
      personagem.velocidadeDoPulo = 0;
      personagem.y  = plataforma.y - personagem.altura;
    
      
   }
    
    
    
    
  }

}