let imagemQueijo, imagemPlataforma, imagemGatuno, imagemMosca;
let imagemPersonagem = []
let imagemCenario1 = new Array();
let imagemTitle;
let cenario1 = [];
let somTeste, somJogo;

let pontuacao;

let botaoTeste, botaoStart;

//objetos
let personagem, teste, faseRuner, queijo, plataforma, gatuno, mosca, vida, game_Over;
let inimigos = [];


let cenaAtual = 'telaInicial';
//let cenaAtual = 'jogo';
let cenas;
let telaInicial;

let gameOver = true;

const matrizPersonagem = [
  [0,0],
  [0,100],
  [0,200],
  [100,0],
  [100,100],
  [100,200],
  [200,0],
  [200,100],
];
//50x85
const matrizGatuno = [
  [0,0],
  [85,0],
  [0,50],
  [85,50],
  [0, 100],
  [85, 100],
];
//60x60
const matrizMosca = [
  [0,0],
  [60,0],
  [120,0],
  [180,0],
  [0,60],
  [60,60],
  [120,60],
  [180,60],
  [0,120],
  [60,120],
  [120,120],
  [180,120],
  [0,180],
  [60,180],
  
];