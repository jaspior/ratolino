class Vida {
  constructor() {
    this.health = 100;
    this.maxHealth = 100;
    this.rectWidth = (height / 10) * 6;
    this.drawWidth;
    this.inicialY = height / 10;
  }

  exibe() {
    textSize(30);
    fill('#222222');
    text("Vida ", 120, this.inicialY);

    // Change color
    if (this.health < 25) {
      fill(255, 0, 0);
    } else if (this.health < 50) {
      fill(255, 255, 0);
    } else {
      fill(0, 255, 0);
    }

    this.drawWidth = (this.health / this.maxHealth) * this.rectWidth;
  }

  anima() {
    // Draw bar
    noStroke();
    // Get fraction 0->1 and multiply it by width of bar
    rect(50, this.inicialY , this.drawWidth, height / 15);
  }

  perde() {
    this.health -= 10;
//return this.health <= 0 ? false : true;
  }

  ganha() {
    this.health <= 80 ? (this.health += 10) : null;
  }
}
