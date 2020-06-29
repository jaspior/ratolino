function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(400, 400);
  
  //cenario = new Cenario(imagemCenario1[0], 0);
   for (i = 0; i < imagemCenario1.length -1; i++) {
    var p = new Cenario(imagemCenario1[i],i/10);
    cenario1.push(p);
    
  }
  
  somTeste.loop();  
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 5, 5, 100, 100, 0.7, 5);
  
}

function mousePressed() {
 
    personagem.pula()
   
 
}






function draw() {
  background(220);
  //cenario.exibe();
  for (i = 0; i < cenario1.length; i++){
    cenario1[i].exibe();
    cenario1[i].move();
  }
  
  fill(0);
  strokeWeight(2);
  stroke(245, this.opacity);
  textAlign(CENTER);
  textFont('Georgia')
  textSize(150);
  text('Ratolino', width / 2, height / 9 * 5);
  textSize(50);
  text('SandBox', width / 2, height / 9 * 7);
  textSize(30);
  text('use as setas para se mover e pular', width / 2, height / 9*8);
  
  personagem.exibe();
  personagem.aplicaGravidade();
  personagem.move()
 
}
