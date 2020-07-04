class GameOver {

  constructor() {}

  keyPressed(key){
    if (gameOver && key === "Enter") {
      window.location.reload();
    }
  
  }

  draw() {
    this._fundo();
    textAlign(CENTER);
    textSize(25);
    text(
      "Press the <Enter> key to start the game",
      width / 2,
      height / 2 + 100
    );

  }

  _fundo() {
      image(imagemPerdeu, 0, 0, width, height);
  }
  
}