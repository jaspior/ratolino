class Game {
  constructor() {
    this.currentEnemy = 0;
  }

  setup() {
    const sceneryFg = new Scenery(imageSceneryForeground, 3.5);
    const sceneryMg = new Scenery(imageSceneryMiddleground, 3);
    const sceneryBg = new Scenery(imageSceneryBackground, 2);
    const scenerySky = new Scenery(imageScenerySky, 0.5);
    sceneryG = new Scenery(imageSceneryGround, 4);

    sceneries.push(scenerySky);
    sceneries.push(sceneryBg);
    sceneries.push(sceneryMg);
    sceneries.push(sceneryFg);

    points = new Points();
    health = new Points();

    heroRun = new Hero(heroMatrix, imageHero, 0, 15,
      heroGameWidth, heroGameHeight,
      heroImageWidth, heroImageHeight);
    heroJump = new Hero(heroJumpMatrix, imageHeroJump, 0, 15,
      heroGameWidth, heroGameHeight,
      heroImageWidth, heroImageHeight);
    heroSlash = new Hero(heroSlideMatrix, imageHeroJump, 0, 15,
      heroGameWidth, heroGameHeight,
      heroImageWidth, heroImageHeight);

    heroAnimations.push(heroRun);
    heroAnimations.push(heroJump);
    console.log(heroAnimations);

    const enemy = new Enemy(enemyMatrix, imageEnemy1, width - enemyGameWidth, 30,
      enemyGameWidth, enemyGameHeight,
      enemyImageWidth, enemyImageHeight, 12.5, 100);

    const enemy2 = new Enemy(enemy2Matrix, imageEnemy2, width - enemy2GameWidth, 30,
      enemy2GameWidth, enemy2GameHeight,
      enemy2ImageWidth, enemy2ImageHeight, 20, 100);

    const enemyFly = new Enemy(enemyFlyMatrix, imageEnemyFly, width - enemyFlyGameWidth, height / 2,
      enemyFlyGameWidth, enemyFlyGameHeight,
      enemyFlyImageWidth, enemyFlyImageHeight, 17.5, 100);
    enemies.push(enemy);
    enemies.push(enemy2);
    enemies.push(enemyFly);

    gameSound.volume(0.5);
    gameSound.loop();
    sampleIsPlaying = true;
  }

  mousePressed() {
    if (heroAnimations[currentHeroAnimation].isFloored()) {
      maxJumpHero = 2;
    }
    heroAnimations[0].jump(-30, maxJumpHero, heroJumpSound);
    heroAnimations[1].jump(-30, maxJumpHero, heroJumpSound);
    console.log(maxJumpHero)
    currentHeroAnimation = 1;
    maxJumpHero--;
  }

  keyPressed(keyCode) {
    if (keyCode === 38) {
      if (heroAnimations[currentHeroAnimation].isFloored()) {
        maxJumpHero = 2;
      }
      heroAnimations[0].jump(-30, maxJumpHero, heroJumpSound);
      heroAnimations[1].jump(-30, maxJumpHero, heroJumpSound);
      console.log(maxJumpHero)
      currentHeroAnimation = 1;
      maxJumpHero--;
    }
    if (keyCode === 32){
      if (gamePaused){
        loop();
        gamePaused = false;
      } else {
        noLoop();
        gamePaused = true;
      }
    }
  }
  swiped(event){
  
  }
  draw() {
    if (frameCount < 20) {
      heroAnimations[currentHeroAnimation].tempInvincibility();
    }
    if (points.points === 0) {
      sceneries[0].initStage1(0.5);
      sceneries[1].initStage1(2);
      sceneries[2].initStage1(3);
      sceneries[3].initStage1(3.5);
      sceneryG.initStage1(4);
    }
    if (points.points / 100 > currentStage) {
      currentStage++;
      minVel += 5;
      maxVel += 5;
      sceneries[0].makeFaster(0.5);
      sceneries[1].makeFaster(1.5);
      sceneries[2].makeFaster(2.5);
      sceneries[3].makeFaster(3);
      sceneryG.makeFaster(3);
    }
    sceneries.forEach(scenery => {
      if (points.points / 100 > currentStage) {
        currentStage++;
        minVel += 5;
        maxVel += 5;
        scenery.makeFaster(3);
      }
      scenery.render();
      scenery.move();
    });
    if (!sampleIsPlaying) {
      gameSound.loop();
    }

    points.addPoint();
    points.render('#fff', 50, 'Score', height / 15);
    health.render('#00ff00', height - 20, 'HP', height / 20);

    if (frameCount < 20) {
      heroAnimations[currentHeroAnimation].tempInvincibility();
    }
    if (heroRun.isFloored()) {
      heroRun.render();
      heroRun.applyGravity();
    } else {
      if (!heroJump.isFloored()) {
        heroRun.animate();
        heroRun.applyGravity();
      }
      heroJump.render();
      heroJump.applyGravity();
    }

    const enemy = enemies[currentEnemy];
    const visibleEnemy = enemy.x < -enemy.long;
    console.log(visibleEnemy)

    if (visibleEnemy) {
      currentEnemy = generateRandomInteger(0, 2);
      console.log('current enemy = ' + currentEnemy)
      let ranVelocity = generateRandomInteger(minVel, maxVel)
      enemy.velocity = ranVelocity;
    }

    enemy.render();
    enemy.applyGravity();
    enemy.move();

    if (heroAnimations[currentHeroAnimation].isFloored()) {
      currentHeroAnimation = 0;
    }
    if (heroAnimations[currentHeroAnimation].isColliding(enemy)) {
      console.log('collision');
      healthPoints -= health.takePoint(enemy.velocity);
      heroAnimations[currentHeroAnimation].tempInvincibility();
      damageSound.play();
      console.log('health' + healthPoints)
      if (healthPoints < 1) {
        endScore = points.returnPoints();
        healthPoints = 100;
        gameSound.stop();
        sampleIsPlaying = false;
        defeatSound.play();
        minVel = 10;
        maxVel = 30;
        currentScene = 'gameOver';
      }
    }
    console.log('points.point' + points.points)
    console.log('sceneryGvelo' + sceneryG.velocity)
    sceneryG.render();
    sceneryG.move();
    /* randomize zombie jumps*/
    if (currentEnemy === 0) {
      enemy.randomizeJump(frameRef, enemy, enemyJumpSound)
    }
    /* randomize zombie jumps*/
  }
}