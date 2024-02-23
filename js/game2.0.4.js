/*
                    ______ _   _______ _   _ _____ _   _ _____
                    | ___ \ | | | ___ \ \ | |_   _| \ | |  __ \
                    | |_/ / | | | |_/ /  \| | | | |  \| | |  \/
                    | ___ \ | | |    /| . ` | | | | . ` | | __
                    | |_/ / |_| | |\ \| |\  |_| |_| |\  | |_\ \
                    \____/ \___/\_| \_\_| \_/\___/\_| \_/\____/


                            ______ _   _ _____ _   _
                            | ___ \ | | /  ___| | | |
                            | |_/ / | | \ `--.| |_| |
                            |    /| | | |`--. \  _  |
                            | |\ \| |_| /\__/ / | | |
                            \_| \_|\___/\____/\_| |_/


               \ /                                          \   /
              --o--           `\\             //'      .____-/.\-____.
                                \\           //             ~`-'~
                                 \\. __-__ .//
                       ___/-_.-.__`/~     ~\'__.-._-\___
.|.       ___________.'__/__ ~-[ \.\'-----'/./ ]-~ __\__`.___________       .|.
~o~~~~~~~--------______-~~~~~-_/_/ |   .   | \_\_-~~~~~-______--------~~~~~~~o~
' `               + + +  (X)(X)  ~--\__ __/--~  (X)(X)  + + +               ' `
                             (X) `/.\' ~ `/.\' (X)
                                 "\_/"   "\_/"
*/
//Functions for firing GameMonetize SDK events
function globalPause() {
  console.log('game paused');
}
function globalStart(){
  console.log('game started');
}

function sdkReady() {
  console.log('sdk Ready');
}

function sdkError() {
  console.log("the SDK is firing an error")
}

//Initialize game object
var game;
var gameConfig;
//Initialize key variables
var Player;
var q = 0;
var godMode = false;
var isPaused = false;
var pauseBtn;
var pauseText;
var playButton;
var continueButton;
var titleButton;
var gameOverText
var stageBG;
var lives = 3;
var livesDisplay;
var bombCount = 3;
var bombAnim;
var bombing = false;
var bombDisplay;
var lives;
var timedRespawn;
var cursors;
var score = 0;
var highScore = 0;
var multiplier = 1;
var kills;
var coinsCollected;
var noMiss = true;
var multiTimer;
var multiTimerActive = false;
var shotLevel = 1;
var bulletSound;
var laserPickupSound;
var coinPickupSound;
var explosionSound;
var pauseSound;
var bossAlertSound;
var coins;
var minicoins;
var powerUps;
var cannon1;
var cannon2;
var beam1;
var beam2;
var beams;
var grnActive = false;
var nmeGroup;
var bossIcon;
var bossEnemy;
var fightingBoss = false;
var bossHealthDisplay;
var bullet;
var blueBullets;
var redBullets;
var canShoot = true;
var playerCanCollide = true;
var fireSpeed = 1200;
var maxBullets = 40;
var gameOver = false;
var scoreText;
var multiplierText;
var gameOverText;
var controlStyle;
var pausedScene;
var target = new Phaser.Math.Vector2();
var playerMoveSpeed = 200;
var gameOptions = {
}
var sfxConfig = {
    mute: false,
    volume: 0.5,
    rate: 1,
    loop: false,
    delay: 0
}
var musicConfig = {
  mute: false,
  volume: 0.25,
  rate: 1,
  loop: true,
  delay: 0
}
window.onload = function() {
  gameConfig = {
   type: Phaser.AUTO,
    //width: 480,
    //height: 640,
    scale: {
      mode: Phaser.Scale.FIT,
      width: 480,
      height: 640,
      min: {
        width: 480,
        height: 640
      },
      max: {
        width: 960,
        height: 1280
      }
    },
    parent: "gameBoard",
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
        debug: false
      }
    },
    //backgroundColor: //0xecf0f1,
    scene: [bootGame, TitleScreen, playGame, PlayGame2, PlayGame3, pauseButton, GameOver1],
  }
  game = new Phaser.Game(gameConfig);
  window.focus();
}
//Custom object Classes in02
//Enemy class(es)
class EnemyGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene){
    super(scene.physics.world, scene);
  }
}

class BossOne extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    config.scene.add.existing(this);
    var Health;
    var canHit;
    var isBoss;
    var currentPhase;
    var Phase1;
    var Phase2;
    var Phase3;
    var Phase4;
    this.Health = 8300;
    this.canHit = true;
    this.isBoss = true;
  }
}

class BossTwo extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    config.scene.add.existing(this);
    var Health;
    var canHit;
    var isBoss;
    var currentPhase;
    var Phase1;
    var Phase2;
    var Phase3;
    var Phase4;
    this.Health = 10900;
    this.canHit = true;
    this.isBoss = true;
  }
}

class BossThree extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "bossThree");
    config.scene.add.existing(this);
    var Health;
    var canHit;
    var isBoss;
    var currentPhase;
    this.Health = 12000;
    this.canHit = true;
    this.isBoss = true;
  }
}
class Enemy1 extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene,config.x, config.y, config.key, config.speed, config.ofstX);
    config.scene.add.existing(this);
    var Health;
    var canHit;
    this.Health = 10;
    this.canHit = true;
  }
}

class Enemy2 extends Phaser.Physics.Arcade.Sprite {
  constructor (config) {
    super(config.scene, config.x, config.y, config.type, config.health, config.weapon, config.fdelay, config.stringDir, config.strLength, config.destX, config.destY);
    config.scene.add.existing(this);
    var Shooter;
    var Health;
    var canHit;
    var scene;
    var inPos;
    var isBoss;
    this.canHit = true;
    this.inPos = false;
    this.Health = config.health;
    this.isBoss = false;
    this.Shooter = config.scene.time.addEvent({
      delay: config.fdelay,
      callback: function() {
        if (this.active == true) {
          if (config.weapon == "blue") {
            config.scene.blueShot(this.x, this.y);
          } else if (config.weapon == "red") {
            config.scene.redShot(this.x, this.y);
          } else if (config.weapon == "aimedBlue") {
            config.scene.aimedShot(this.x, this.y);
          } else if (config.weapon == "aimedRed") {
            config.scene.aimedShotRed(this.x, this.y);
          } else if (config.weapon == "directionalShotBlue") {
              config.scene.directionalShotBlue(this.x, this.y, config.stringDir);
          } else if (config.weapon == "stringBlue") {
              config.scene.bulletString(config.strLength, config.stringDir, this.x, this.y);
          }else if (config.weapon == "arrowString") {
              config.scene.arrowString(config.strLength, config.stringDir, this.x, this.y);
          } else if (config.weapon == "quadShot") {
              config.scene.quadShot(this.x,this.y);
          } else if (config.weapon == "quadShot2") {
              config.scene.quadShot2(this.x, this.y);
          } else if (config.weapon == "tripleShot") {
              config.scene.tripleShot(this.x, this.y);
          } else if (config.weapon == "octoShot") {
              config.scene.octoShot(this.x,this.y);
          } else if (config.weapon == "largeBlueShot") {
              config.scene.largeBlueShot(this.x, this.y, config.stringDir);
          } else if (config.weapon == "boss1patt1") {
            config.scene.quadShot(this.x, this.y);
            config.scene.aimedShotRed(this.x, this.y);
          } else if (config.weapon == "boss1patt2") {
            config.scene.directionalShotBlue(this.x - 21, this.y + 10, Phaser.Math.Between(-100,100), 60);
            config.scene.directionalShotBlue(this.x + 2, this.y + 9, Phaser.Math.Between(-100,100), -60);
            config.scene.directionalShotBlue(this.x - 1, this.y + 24, Phaser.Math.Between(-100,100), 60);
            config.scene.directionalShotBlue(this.x + 24, this.y + 20, Phaser.Math.Between(-100,100),-60);
            config.scene.directionalShotBlue(this.x - 20, this.y + 25, 60, -9);
            config.scene.directionalShotBlue(this.x - 13, this.y - 16 , Phaser.Math.Between(-100,100), -60);
            config.scene.directionalShotBlue(this.x + 10, this.y - 17, Phaser.Math.Between(-100,100), 60);
            config.scene.directionalShotBlue(this.x - 5, this.y - 13, Phaser.Math.Between(-100,100), -60);
            config.scene.directionalShotBlue(this.x + 21, this.y - 10, Phaser.Math.Between(-100,100), 60);
            config.scene.directionalShotBlue(this.x + 6, this.y - 4, 60, 10);
            config.scene.directionalShotBlue(this.x + 5, this.y - 2, 60, 0);
            config.scene.directionalShotBlue(this.x - 9, this.y - 11, Phaser.Math.Between(-100,100), -60);
            config.scene.directionalShotBlue(this.x - 21, this.y - 24, Phaser.Math.Between(-100,100), 60);
            config.scene.directionalShotBlue(this.x - 14, this.y + 2, -60, 0);
            config.scene.directionalShotBlue(this.x + 6, this.y + 9, Phaser.Math.Between(-100,100), 60);
          } else if (config.weapon == "custerA") {
            config.scene.clusterA(this.x, this.y);
          } else if (config.weapon == "clusterB") {
            config.scene.clusterB(this.x, this.y);
          } else {
            //default to standard blue shot
            config.scene.blueShot(this.x, this.y);
          }
          if (this.inPos == false) {
            config.scene.moveEnemy(this, config.destX, config.destY);
          }
        } else {
          this.Shooter.destroy();
        }
      },
      callbackScope: this,
      loop: true
    });
    config.scene.events.on('update', () => {
      if (this.active == true && config.scene.bombing == true && config.scene.cameras.main.worldView.contains(this.x, this.y)) {
        config.scene.spawnCoin(this.x,this.y);
        config.scene.explode(this.x,this.y, 5);
        this.setActive(false);
        this.setVisible(false);
        this.destroy();
      }
    });
  }
}

//Redenemy bullets
class RedBullets extends Phaser.Physics.Arcade.Group {
  constructor (scene) {
    super(scene.physics.world, scene);
  }
}
class EnemyBulletRed extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "redBullet");
    //Blue style bullets can be shot by the player, red style bullets can not!
    config.scene.add.existing(this);
    config.scene.events.on('update', () => {
      if (!config.scene.cameras.main.worldView.contains(this.x, this.y)) {
        this.destroy();
      }
    });
  }
}
//Blue enemy bullets
class BlueBullets extends Phaser.Physics.Arcade.Group {
  constructor (scene) {
    super(scene.physics.world, scene);
  }
}
class EnemyBulletBlue extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "blueBullet");
    //Blue style bullets can be shot by the player, red style bullets can not!
    config.scene.add.existing(this);
    config.scene.events.on('update', () => {
      if (!config.scene.cameras.main.worldView.contains(this.x, this.y)) {
        this.destroy();
      } else if (config.scene.bombing == true) {
        this.destroy();
      }
    });
  }
}
class EnemyBulletOther extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    //"greenArrow or largeBlue"
    config.scene.add.existing(this);
    config.scene.events.on('update', () => {
      if (!config.scene.cameras.main.worldView.contains(this.x, this.y)) {
        this.destroy();
      } else if (config.scene.bombing == true) {
        this.destroy();
      }
    });
  }
}
//Bullet object class
class LaserGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    //Call the super constructor, passing in a world and a scene
    super(scene.physics.world, scene);
    //initialize the group
    this.createMultiple({
      classType: Laser, // this is the class we create just below
      frameQuantity: maxBullets, //create X isntances in the pool
      active: false,
      visible: false,
      key: "laser",
    });
  }
  fireLaser(x, y) {
    //get the first available sprite in the group
    const laser = this.getFirstDead(false);
    if (laser) {
      laser.fire(x, y);
    }
  }
}

class Laser extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'laser');
  }

  fire(x, y) {
    this.body.reset(x, y);
    this.setActive(true);
    this.setVisible(true);
    this.setVelocityY(-fireSpeed);
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);
    if (this.y <= 0) {
      this.setActive(false);
      this.setVisible(false);
    }
    this.setVelocityY(-fireSpeed);
  }
}

//Lazer cannon for the powered up ship, NOT the main firing
class Cannon extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "lzrCannon");
    config.scene.add.existing(this);
  }
}

//The green lazer, NOT the main firing
class BeamGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);
  }
}

class Beam extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "lazerBeam");
    config.scene.add.existing(this);
  }
}

class CoinGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super (scene.physics.world, scene);
  }
}

class Coin extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, 'coin');
    config.scene.add.existing(this);
    config.scene.events.on('update', () => {
      if (!config.scene.input.activePointer.isDown && !config.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z).isDown) {
        config.scene.physics.moveToObject(this, Player, 150);
      } else {
        this.setVelocity(0,0);
        this.setGravity(0,10);
      }
    });
  }
}

class MiniCoinGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super (scene.physics.world, scene);
  }
}

class MiniCoin extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, 'mCoin');
    config.scene.add.existing(this);
    config.scene.events.on('update', () => {
      if (!config.scene.input.activePointer.isDown && !config.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z).isDown) {
        config.scene.physics.moveToObject(this, Player, 150);
      } else {
        this.setVelocity(0,0);
        this.setGravity(0,10);
      }
    });
  }
}

class PowerUp extends Phaser.Physics.Arcade.Sprite {
  constructor (config) {
    super(config.scene, config.x, config.y, 'pCoin');
    config.scene.add.existing(this);
  }
}

class PowerUps extends Phaser.Physics.Arcade.Group {
  constructor (scene) {
    super (scene.physics.world, scene);
  }
}

class playGame extends Phaser.Scene {
  constructor() {
    super ("PlayGame");
    this.laserGroup;
  }
  //in04
  preload() {
  }
  //in04 Functions

  passStage() {
    var nm;
    if (noMiss) {
      nm = 100000;
    } else if (!noMiss) {
       nm = 0;
    }
    let add;
    let stageComplete = this.add.sprite(0,0,"stageComplete");
    stageComplete.setDepth(0);
    stageComplete.setOrigin(0,0);
    let killAddup = this.add.text(
      this.scale.width * 0.20, this.scale.height * 0.25,
      ("Kills: " + kills + " x1000 = " + kills * 1000),
      { fontFamily: 'pxlFont', fontSize: '32px', fill: '#fff', stroke: '#000', strokeThickness: 1 }
    );
    let coinAddup = this.add.text(
      this.scale.width * 0.20, this.scale.height * 0.25 + 35,
      ("Coins: " + coinsCollected + " x1000 = " + coinsCollected * 1000),
      { fontFamily: 'pxlFont', fontSize: '32px', fill: '#fff', stroke: '#000', strokeThickness: 1 }
    );
    let noMissAddUp = this.add.text(
      this.scale.width * 0.20, this.scale.height * 0.25 + 70,
      ("No miss: " + nm),
      { fontFamily: 'pxlFont', fontSize: '32px', fill: '#fff', stroke: '#000', strokeThickness: 1 }
    );
    add = coinsCollected * 1000 + kills * 1000 + nm;
    score = score + add;
    this.time.delayedCall(4000, function() { this.cameras.main.fadeOut(1000,0,0,0); },[],this);
    this.time.delayedCall(5000, function() {
      this.scene.start("PlayGame2");
      this.bossMusic.stop();
    }, [], this);
  }

  pauseGame( ) {
    globalPause();
    if(!gameOver) {
      pauseSound.play(sfxConfig);
      this.scene.pause("PlayGame");
      this.scene.launch("PauseButton");
      console.log("Game paused.");
      pauseBtn.setActive(false);
      pauseBtn.setVisible(false);
      pauseText.setActive(true);
      pauseText.setVisible(true);
    } else if (gameOver) {
      this.continueGame();
    }
  }

  scorePoints(points, x, y){
    var total;
    total = points * multiplier;
    score += total;
    let popUp = this.add.text(x, y, "+" + total, { fontFamily: 'pxlFont', fontSize: '16px', fill: '#fff', stroke: '#000', strokeThickness: 1 });
    this.time.delayedCall(1000, function() { popUp.destroy(); }, [], this);
  }

  collectCoin(Player, coin) {
    coin.disableBody(true, true);
    coinsCollected = coinsCollected + 1;
    this.scorePoints(10, coin.x, coin.y);
    coinPickupSound.play(sfxConfig);
  }

  collectMiniCoin(Player, coin) {
    coin.disableBody(true, true);
    let popUp = this.add.text(coin.x, coin.y - 10, "MULTI + 1", { fontFamily: 'pxlFont', fontSize: '12px', fill: '#A7DBD8', stroke: '#000', strokeThickness: 1 });
    this.scorePoints(5, coin.x, coin.y + 15);
    multiplier += 1;
    this.time.delayedCall(1000, function () { popUp.destroy(); }, [], this);
    this.addTimer();
    coinPickupSound.play(sfxConfig);
  }

  powerUpPlayer(Player, powerUp) {
    powerUp.disableBody(true, true);
    laserPickupSound.play(sfxConfig);
    if (shotLevel == 1) {
      console.log("power up collected, power level: " + shotLevel);
      cannon1 = new Cannon({ scene: this, x: (Player.x - 15), y: (Player.y + 15)});
      shotLevel += 1;
      this.scorePoints(100, Player.x, Player.y + 10);
    } else if (shotLevel == 2) {
      console.log("power up collected, power level: " + shotLevel);
      cannon2 = new Cannon({scene: this, x: (Player.x + 15), y: (Player.y + 15)});
      shotLevel += 1;
      this.scorePoints(1000, Player.x, Player.y + 5);
      if (grnActive) {
          beam2 = new Beam ({scene: this, x: cannon2.x, y: cannon2.y - 10 });
          this.beams.add(beam2);
          beam2.setOrigin(0, 1);
          beam2.play("greenAnim");
      }
    }
  }

  explode(x,y,n) {
    for (let i = 0; i < n; i++) {
      this.time.delayedCall(i * 200, function () {
        this.add.sprite(Phaser.Math.Between(x- 10, x + 10),Phaser.Math.Between(y - 10, y + 10), 'expl1').play('explosion');
        explosionSound.play(sfxConfig);
      }, [], this);
    }
  }

  getBombed(enemy, bomb) {
    enemy.Health = enemy.Health - 100;
    this.damageEnemy(enemy, bomb);
  }

  damageEnemy(enemy, laserGroup) {
    if (this.cameras.main.worldView.contains(enemy.x, enemy.y) && enemy.canHit == true) {
      enemy.canHit = false;
      enemy.setTintFill(0xfffffff);
      enemy.Health = enemy.Health - (10 + shotLevel + (shotLevel * 3));
      console.log("enemy hit, health:" + enemy.Health);
      this.time.delayedCall(100, function() { enemy.clearTint(); enemy.canHit = true; }, [], this);
      if (enemy.Health <= 0) {
      if (!enemy.isBoss) {
        kills = kills + 1;
        this.scorePoints(50, enemy.x, enemy.y + 5);
        this.explode(enemy.x, enemy.y, 2);
        let i = Phaser.Math.Between(0, 10);
        if (i == 5) {
          this.spawnPowerUp(enemy.x, enemy.y);
        } else if ( i > 5) {
          this.spawnCoin(enemy.x, enemy.y);
        } else if ( i < 5) {
          this.spawnMiniCoin(enemy.x, enemy.y);
        }
        enemy.setActive(false);
        enemy.setVisible(false);
        enemy.destroy();
      } else if (enemy.isBoss) {
        console.log ("boss destroyed");
        fightingBoss = false;
        kills = kills + 1;
        for (let i = 0; i < 12; i++) {
          this.time.delayedCall(i * 200, function () {
            explosionSound.play(sfxConfig);
            this.add.sprite(Phaser.Math.Between(enemy.x - 50, enemy.x + 50),Phaser.Math.Between(enemy.y + 60, enemy.y - 60), 'expl1').play('explosion');
          }, [], this);
          this.spawnCoin(Phaser.Math.Between(enemy.x - 100, enemy.x + 100),Phaser.Math.Between(enemy.y + 200, enemy.y - 50));
          }
          enemy.destroy();
          this.time.delayedCall(6000, this.passStage, [], this);
        }
      }
    }
  }

  killRedBullet(bullet, laserGroup) {
    console.log("red bullet hit");
    bullet.disableBody(true,true);
    laserGroup.setActive(false);
    laserGroup.setVisible(false);
    //this.spawnMiniCoin(bullet.x, bullet.y);
    this.scorePoints(1, bullet.x, bullet.y);
  }

  respawnPlayer() {
    sdk.showBanner();
    Player.setVisible(true);
    Player.setAlpha(0.5);
    playerCanCollide = false;
    this.time.delayedCall(2500, function () {
      Player.body.enable = true;
      playerCanCollide = true;
      Player.setAlpha(1);
    }, [], this);
    canShoot = true;
    bombCount = 3;
  }

  continueGame() {
    pauseSound.play(sfxConfig);
    this.physics.world.timeScale = 1;
    this.respawnPlayer();
    lives = 3;
    score = 0;
    bombCount = 3;
    this.addLives();
    this.addBombs();
    gameOver = false;
    continueButton.setActive(false);
    continueButton.setVisible(false);
    titleButton.setActive(false);
    titleButton.setVisible(false);
    gameOverText.setVisible(false);
    pauseBtn.setActive(true);
    pauseBtn.setVisible(true);
  }

  toTitle() {
      //pauseSound.play();
      this.scene.stop("PlayGame");
      this.scene.start("BootGame");
  }

  addLives() {
    livesDisplay = this.add.group ({
      key: 'playerIcon',
      repeat: 1,
      setXY: { x: 16, y: 616, stepX: 32 }
    });
  }

  addBombs() {
    bombDisplay = this.add.group ({
      key: 'bombIcon',
      repeat: 2,
      setXY: { x: 390, y: 616, stepX: 32 }
    });
  }

  playerHit(Player, enemy) {
    if (!godMode) {
    if (playerCanCollide) {
      console.log("Player hit");
      noMiss = false;
      this.damageEnemy(enemy, this.laserGroup);
      canShoot = false;
      playerCanCollide = false;
      this.explode(Player.x, Player.y, 4);
      Player.setVisible(false);
      Player.setActive(false);
      Player.body.enable = false;
      lives = (lives - 1);
      livesDisplay.remove(livesDisplay.getLast(true), true);
      if (lives === 0) {
        this.initiateGameOver();
      } else {
        this.time.delayedCall(2000, this.respawnPlayer, [], this);
      }
    }
  }
  }

  addTimer() {
    multiTimerActive = true;
    this.time.addEvent({
      delay : 30000,
      callback: function () {
        multiTimerActive = false;
      },
      loop: false
    });
  }

  startBossBattle() {
    let warning = this.add.sprite(0,0, "warning");
    warning.setOrigin(0,0);
    warning.setAlpha(0);
    bossAlertSound.play({
      mute:false,
      volume: 0.5,
      loop: true,
      delay: 0
    });
    let wrntwn = this.tweens.add({
      targets: warning,
      alphaTopLeft: { value: 1, duration: 500, ease: 'Power1' },
      alphaBottomRight: { value: 1, duration: 500, ease: 'Power1' },
      alphaBottomLeft: { value: 1, duration: 500, ease: 'Power1' },
      yoyo: true,
      loop: -1
    });
    this.tweens.add ({
      targets: this.stageMusic,
      volume: 0,
      duration: 2000
    });
    this.time.delayedCall(4000, function () {
      warning.destroy();
      bossAlertSound.stop();
      this.bossMusic.play(musicConfig);
      this.addBoss(240,10);

    }, [], this);
  }

  //in05
  create() {
    this.cameras.main.fadeIn(1000,0,0,0); // fade in effect
    //adding the background
    stageBG = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, "stageOneBG");
    //this.cameras.main.setBounds(0,0, gameConfig.width, (gameConfig.height * 10));
    stageBG.setOrigin(0,0);
    //adding the stage Music
    this.stageMusic = this.sound.add("stageOneSong");
    this.bossMusic = this.sound.add("bossBattleSong");
    this.stageMusic.play(musicConfig);
    //adding the Player
    this.anims.create({
      key: "animPlayer",
      frames: this.anims.generateFrameNumbers("animatedPlayer", {start: 0, end : 3 }),
      frameRate: 10,
      repeat: -1
    });
    Player = this.physics.add.sprite(240, 400, "mech");
    Player.play("animPlayer");
    Player.setBounce(1);
    Player.setGravity(0);
    Player.setCollideWorldBounds(true);
    Player.setSize(1,1);
    Player.setOffset(23,23);
    //Player.setScrollFactor(0);
    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();
    var spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    //Better way of firing bullets using Phasers arcade physics group
    this.laserGroup = new LaserGroup(this);
    this.beams = new BeamGroup(this);
    //hidden information:
    noMiss = true;
    kills = 0;
    coinsCollected = 0;
    //Hud elments
    scoreText = this.add.text(5, 5, "000000000", { fontFamily: 'pxlFont', fontSize: '32px', fill: '#fff', stroke: '#000', strokeThickness: 3 });
    scoreText.setScrollFactor(0);
    multiplierText = this.add.text(5, 25, "x001", { fontFamily: 'pxlFont', fontSize: '32px', fill: '#A7DBD8', stroke: '#000', strokeThickness: 3 });
    multiplierText.setScrollFactor(0);
    this.addBombs();
    let i = 0;

    //enemies and their projectiles
    blueBullets = new BlueBullets(this);
    redBullets = new RedBullets(this);

    this.addLives();

    //the coins
    this.coins = new CoinGroup(this);
    this.spawnCoin(12, 450);
    this.powerUps = new PowerUps(this);
    this.miniCoins = new MiniCoinGroup(this);

    this.anims.create({
      key: "bossOneA",
      frames: this.anims.generateFrameNumbers("bossOneAnim", { start: 0, end: 3 }),
      frameRate: 5,
      repeat: -1
    });

    //enemies
    //To add an enemy:
    //this.addBugEnemy(starting location X, starting location Y, enemy sprite, health,  shot type, destination X, destination Y, shot delay(ms), shot direction (i/a), string length (i/a) );
    //enemy types in this scene: tomato, fish, baxter
    //shot types in this scene: blue (player can't shoot), red (player can shoot), aimedRed, aimedBlue.
    this.nmeGroup = new EnemyGroup(this);
    //spawning the stage boss
    this.time.delayedCall(86666, function() { this.startBossBattle(); }, [], this);
    this.addBugEnemy(192,-102, "baxter", 50, "blue", 193, 72, 500);
    this.addBugEnemy(372,-266, "baxter", 50, "red", 372, 236, 500);
    this.addMiniBug(83, -303, 200, 0);
    this.addMiniBug(83, -333, 200, 0);
    this.addBugEnemy(83, -473, "baxter", 50, "stringBlue", 83, 473, 1000, 30, 8);
    this.addMiniBug(243, -522, 300, 0);
    this.addMiniBug(309, -543, 300, 0);
    this.addMiniBug(224, -570, 300, 0);
    this.addMiniBug(259, -571, 300, 0);
    this.addMiniBug(307, -571, 300, 0);
    this.addMiniBug(430, -585, 300, 0);
    this.addBugEnemy(430, -585, "baxter", 50, "red", 430, 173, 250);
    this.addMiniBug(290, -603, 300,0);
    this.addMiniBug(191,-619, 300,0);
    this.addMiniBug(163, -670, 300, 0);
    this.addMiniBug(324, -669, 300, 0);
    this.addBugEnemy(45,-656, "tomato", 50, "quadShot", 45, 330, 600);
    this.addBugEnemy(402,-739, "tomato", 50, "aimedShotRed", 402, 490, 400);
    this.addMiniBug(227,-764,300,0);
    this.addMiniBug(194,-797, 300, 0);
    this.addMiniBug(162,-846, 300, 0);
    this.addMiniBug(129,-894, 300, 0);
    this.addMiniBug(100,-925, 300, 0);
    this.addMiniBug(66, -957, 300, 0);
    this.addMiniBug(67, -988, 300, 0);
    this.addMiniBug(18, -1037, 300, 0);
    this.addMiniBug(306, -828, 300,0);
    this.addMiniBug(328, -864, 300, 0);
    this.addMiniBug(403, -957, 300, 0);
    this.addMiniBug(451, -989, 300, 0);
    this.addMiniBug(451, -1037, 300, 0);
    this.addBugEnemy(223, -915, "baxter", 50, "quadShot", 263, 167, 500);
    this.addBugEnemy(353, -1089, "tomato", 50, "octoShot", 353, 240, 500);
    this.addBugEnemy(63,-1191, "baxter", 50, "stringBlue", 63, 63, 800, 20, 5);
    this.addBugEnemy(416, -1287, "baxter", 50, "stringBlue", 418, 63, 800, -20, 5);
    this.addBugEnemy(165, -1378, "fish", 50, "octoShot", 165, 200, 800);
    this.addBugEnemy(97, -1560, "baxter", 50, "aimedRed", 97, 102, 500);
    this.addBugEnemy(272, -1711, "fish", 50, "aimedBlue", 272, 461, 500);
    this.addBugEnemy(465, -1727, "fish", 50, "aimedRed", 265, 209, 200);
    this.addBugEnemy(146, -1792, "fish", 50, "aimedRed", 346, 111, 500);
    this.addBugEnemy(68, -1843, "fish", 50, "aimedBlue", 168, 211, 200);
    this.addBugEnemy(344, -1870, "fish", 50, "stringBlue", 144, 160, 100, -34, 7);
    this.addMiniBug(434, -1837, 300, 0);
    this.addMiniBug(402, -1902, 300, 0);
    this.addMiniBug(430, -1934, 300, 0);
    this.addMiniBug(450, -1952, 300, 0);
    this.addMiniBug(276, -1982, 300, 0);
    this.addMiniBug(366, -2027, 300, 0);
    this.addMiniBug(266, -2012, 300, 0);
    this.addMiniBug(163, -2060, 300, 0);
    this.addMiniBug(193, -2060, 300, 0);
    this.addMiniBug(302, -2096, 300, 0);
    this.addMiniBug(116, -2140, 300, 0);
    this.addMiniBug(179, -2141, 300, 0);
    this.addMiniBug(67, -2147, 300, 0);
    this.addMiniBug(232, -2174, 300, 0);
    this.addMiniBug(339, -2174, 300, 0);
    this.addBugEnemy(219, -2174, "fish", 100, "octoShot", 401, 111, 300);
    this.addMiniBug(131, 2204, 300, 0);
    this.addMiniBug(51, -2253, 300, 0);
    this.addBugEnemy(10, -2253, "fish", 100, "stringBlue", 110, 110, 500, 10, 5);
    this.addMiniBug(243, -2253, 300,0);
    this.addBugEnemy(407, -2260, "fish", 100, "stringBlue", 407, 110, 500, -10, 5);
    this.addBugEnemy(201, -2270, "fish", 100, "stringBlue", 201, 110, 500, 0, 5);
    this.addMiniBug(307, -2269, 300, 0);
    this.addMiniBug(179, -2285, 300, 0);
    this.addMiniBug(97, -2300, 300, 0);
    this.addMiniBug(243, -2325, 300, 0);
    this.addMiniBug(120, -2350, "fish", 100, "stringBlue", 120, 220, 500, 5, 5);
    this.addMiniBug(178, -2382, 300, 0);
    this.addMiniBug(274, -2382, 300, 0);
    this.addMiniBug(340, -2444, 300,0);
    this.addMiniBug(291, -2492, 300, 0);
    this.addMiniBug(146, -2525, 300, 0);
    this.addMiniBug(404, -2532, 300, 0);
    this.addMiniBug(337, -2573, 300, 0);
    this.addBugEnemy(32, -2571, "grnVoid1", 200, "quadShot2", 221, 220, 400);
    this.addMiniBug(434, -2573, 300, 0);
    this.addMiniBug(389, -2632, 300, 0);
    this.addMiniBug(411, -2669, 300, 0);
    this.addMiniBug(67, -2652, 300, 0);
    this.addBugEnemy(243, -2793, "grnVoid1", 230, "aimedRed", 243, 86, 350);
    this.addBugEnemy(66, -2858, "grnVoid1", 230, "aimedBlue", 66, 150, 550);
    this.addBugEnemy(403, -2867, "grnVoid1", 230, "aimedRed", 403, 167, 350);
    this.addBugEnemy(96, -3230, "fish", 100, "quadShot", 96, 231, 500);
    this.addBugEnemy(415, -3505, "fish", 100, "octoShot", 300, 330, 1000);
    this.addBugEnemy(98, -3602, "fish", 100, "blue", 200, 250, 500);
    this.addBugEnemy(359,-3779, "fish", 100, "blue", 359, 250, 500);
    this.addBugEnemy(127, 3891, "fish", 100, "red", 127, 300, 500);
    this.addBugEnemy(399, -3927, "baxter", 50, "blue", 127, 321, 500);
    this.addBugEnemy(324, -4038, "baxter", 50, "quadShot2", 430, 410, 1000);
    this.addBugEnemy(46, -4120, "baxter", 50, "quadShot", 240, 210, 500);
    this.addMiniBug(227, -4093, 300, 0);
    this.addMiniBug(339, -4252, 300, 0);
    this.addMiniBug(417, -4413, 300, 0);
    this.addMiniBug(450, -4527, 300, 0);
    this.addBugEnemy(99, -4451, "baxter", 50, "tripleShot", 99, 50, 400);
    this.addBugEnemy(322, -4451, "baxter", 50, "tripleShot", 322, 50, 400);
    this.addBugEnemy(222, -4542, "baxter", 50, "quadShot2", 222, 130, 800);
    this.addBugEnemy(223, -4612, "baxter", 50, "octoShot", 223, 275, 800);
    this.addBugEnemy(419, -4630, "baxter", 50, "directionalShotBlue", 419, 99, 800, 19);
    this.addBugEnemy(115, -4937, "grnVoid1", 200, "quadShot2", 115, 231, 700);
    this.addBugEnemy(290, -4975, "grnVoid1", 200, "aimedRed", 290, 241, 700);
    this.addBugEnemy(421, -4985, "grnVoid1", 200, "quadShot", 410, 251, 700);
    this.addBugEnemy(287, -5120, "tomato", 50, "octoShot", 287, 30, 700);
    this.addBugEnemy(268, -5316, "tomato", 50, "tripleShot", 268, 111, 700);
    this.addBugEnemy(112, -5071, "tomato", 50, "quadShot2", 112, 111, 300);
    this.addBugEnemy(47, -5491, "fish", 100, "red", 47, 131, 300);
    this.addBugEnemy(304, -5540, "fish", 100, "tripleShot", 304, 141, 300);
    this.addBugEnemy(368, -5853, "fish", 100, "blue", 368, 333, 500);
    this.addBugEnemy(161, -5715, "tomato", 50, "stringBlue", 161, 159, 500, 0, 12);
    this.addBugEnemy(414, -5763, "tomato", 50, "stringBlue", 414, 207, 500, -29, 7);
    this.addBugEnemy(370, -6020, "tomato", 50, "tripleShot", 370, 301, 500);
    this.addBugEnemy(67, -6048, "tomato", 50, "blue", 127, 127, 500);
    this.addBugEnemy(27, -6117, "tomato", 50, "octoShot", 27, 210, 900);
    this.addBugEnemy(157, -6116, "tomato", 50, "quadShot2", 157, 210, 900);
    this.addBugEnemy(429, -6097, "tomato", 50, "quadShot", 429, 200, 900);
    this.addBugEnemy(256, -6147, "fish", 100, "tripleShot", 256, 311, 400);
    this.addBugEnemy(130, -6297, "grnVoid1", 200, "tripleShot", 130, 256);
    this.addBugEnemy(288, -6319, "tomato", 50, "blue", 150,  120, 500);
    this.addBugEnemy(378, -6444, "grnVoid1", 200, "aimedBlue", 120, 240, 300);
    this.addBugEnemy(194, -6713, "fish", 100, "aimedBlue", 98, 201, 300);
    this.addBugEnemy(83, -6713, "grnVoid1", 200, "aimedBlue", 83, 389, 300);
    this.addBugEnemy(353, -6895, "fish", 100, "aimedBlue", 353, 100, 300);
    // Colllecting coins etc
    this.physics.add.overlap(Player, this.coins, this.collectCoin, null, this); //the collision between the player and the coin
    this.physics.add.overlap(Player, this.miniCoins, this.collectMiniCoin, null, this);
    this.physics.add.overlap(Player, this.powerUps, this.powerUpPlayer, null, this);

    //manual firing
    this.input.keyboard.on('keydown-X', this.shootLaser, this);

    //firing mah laser
    var pointer = this.input.activePointer;
    this.input.on('pointerdown', (pointer) => {
      this.shootLaser();
    })

    //Detecting collisions between the bullets and the enemies
    this.physics.add.overlap(this.nmeGroup, this.laserGroup, this.damageEnemy, null, this);
    this.physics.add.collider(Player, this.nmeGroup, this.playerHit, null, this);
    this.physics.add.collider(Player, blueBullets, this.playerHit, null, this);
    this.physics.add.collider(Player, redBullets, this.playerHit, null, this);
    this.physics.add.overlap(redBullets, this.laserGroup, this.killRedBullet, null, this);
    this.physics.add.overlap(this.nmeGroup, this.beams, this.damageEnemy, null, this);

    //bomb explosion
    bombAnim = this.physics.add.sprite(0,0, "bombtest").setOrigin(0,0);
    bombAnim.setActive(false);
    bombAnim.setVisible(false);
    bombAnim.body.enable = false;
    this.physics.add.overlap(this.nmeGroup, this.bombAnim, this.getBombed, null, this);

    //Explision animation
    this.anims.create({
      key: 'explosion',
      frames: [
        { key: "expl1" },
        { key: "expl2" },
        { key: "expl3" },
        { key: "expl4" },
        { key: "expl5" },
        { key: "expl6" },
        { key: "expl7" },
        { key: "expl8" },
        { key: "expl9" },
        { key: "expl10" },
        { key: "expl11", duration: 90 },
      ],
      frameRate: 15,
      repeat: 0
    });

    //Coin animation
    this.anims.create({
      key: "coinSh",
      frames: this.anims.generateFrameNumbers("animatedCoin", { start: 0, end: 5 }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "miniCoin",
      frames:this.anims.generateFrameNumbers("miniCoin", { start: 0, end: 5 }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "greenAnim",
      frames:this.anims.generateFrameNumbers("animatedBeam", {start: 0, end: 2}),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "shinyP",
      frames:this.anims.generateFrameNumbers("animPC", {start: 0, end: 3}),
      frameRate:20,
      repeat: -1
    });

    this.anims.create({
      key: "grnVoid",
      frames: this.anims.generateFrameNumbers("greenVoid", {start: 0, end: 3}),
      frameRate: 10,
      repeat: -1
    });

    //the game over screen:
    //the Continue button:
    gameOverText = this.add.sprite(0,0, "gameOverScreen");
    gameOverText.setDepth(1);
    gameOverText.setOrigin(0,0);
    gameOverText.setActive(false);
    gameOverText.setVisible(false);
    continueButton = this.add.sprite(this.scale.width * 0.5, this.scale.height * 0.5, "continueButton");
    continueButton.setDepth(1);
    continueButton.setInteractive();
    continueButton.on('pointerdown', () => { this.continueGame();});
    continueButton.setActive(false);
    continueButton.setVisible(false);
    titleButton = this.add.sprite(this.scale.width * 0.5, this.scale.height * 0.7, "titleButton");
    titleButton.setInteractive();
    titleButton.on('pointerdown', () => { this.toTitle(); });
    titleButton.setActive(false);
    titleButton.setVisible(false);
    //the pause button:
    pauseBtn = this.add.sprite(440, 30, 'pauseButton');
    pauseBtn.setDepth(1);
    pauseBtn.setInteractive();
    pauseBtn.on('pointerdown', () => { this.pauseGame(); });
    //for the pause Screen
    pauseText = this.add.sprite(0,0, "pauseText");
    pauseText.setDepth(1);
    pauseText.setOrigin(0,0);
    pauseText.setActive(false);
    pauseText.setVisible(false);

    //shot power ups, bombs
    this.spawnPowerUp(400, 300);

    //Sound
    bulletSound = this.sound.add("shootingSound");
    laserPickupSound = this.sound.add("laserPickupSound");
    coinPickupSound = this.sound.add("coinPickupSound");
    explosionSound = this.sound.add("explosionSound");
    pauseSound = this.sound.add("pauseSound");
    bossAlertSound = this.sound.add("bossAlert");

  } //end of create function

  //in05.5
  handlePointer() {
    this.input.on('pointermove', (pointer) => {
      Player.setPosition(pointer.x, pointer.y); //You MUST use setPosition, player.x will NOT work in this context.
    });
  }

  initiateGameOver() {
    lives = -1;
    score = 0;
    gameOver = true;
    for (let i = 0; i < 3; i++) {
      this.spawnCoin(Player.x, Player.y);
      this.spawnPowerUp(Player.x, Player.y);
    }
    this.physics.world.timeScale = 8;
    console.log("game over, idiot");
    gameOverText.setActive(true);
    gameOverText.setVisible(true);
    continueButton.setActive(true);
    continueButton.setVisible(true);
    pauseBtn.setActive(false);
    pauseBtn.setVisible(false);
    //titleButton.setActive(true);
    //titleButton.setVisible(true);
  }

  shootLaser() {
    if (canShoot) {
      var lzrOffset = Math.floor(Math.random() * (3 - (-3) + 1) + -3);
      this.laserGroup.fireLaser((Player.x + lzrOffset), Player.y - 35);
      bulletSound.play(sfxConfig);
    }
  }

  moveEnemy(enemy, x,y) {
    if (this.cameras.main.worldView.contains(enemy.x, enemy.y)) {
      let tween = this.tweens.add({
        targets: enemy,
        x: x,
        y: y,
        duration: 4000,
        ease: 'Back',
        easeParams: [ 1.5 ],
        delay: 0
      });
      enemy.inPos = true;
    }
  }

  addBugEnemy(x,y, type, health, weapon, destX, destY, fdelay, stringDir, strLength) {
    var bugEnemy = new Enemy2({scene:this, x:x, y:y, type: type, health: health, weapon: weapon, fdelay: fdelay, destX: destX, destY: destY, stringDir: stringDir, strLength: strLength }).setScrollFactor(0,0);
    this.nmeGroup.add(bugEnemy);
    bugEnemy.setVelocity(0,87);
    //bugEnemy.setCollideWorldBounds(true);

    //bugEnemy.setGravity(0,1);
    //this.moveEnemy(bugEnemy, destX, destY);
  }

  addMiniBug(x,y, speed, ofstX) {
    var smallEnemy = new Enemy1({scene: this, x: x, y: y, key:"miniBug", speed: speed, ofstX: ofstX});
    this.nmeGroup.add(smallEnemy);
    smallEnemy.setVelocity(0,87);
  }

  addBoss(x,y) {
    bossEnemy = new BossOne({ scene: this, x:x, y:y, key: "bossOne" });
    this.moveEnemy(bossEnemy,240,200);
    bossEnemy.play("bossOneA");
    this.nmeGroup.add(bossEnemy);
    fightingBoss = true;
    this.bossHealthDisplay = this.add.text(10, 100, "boss health: " + bossEnemy.Health, { fontSize: '16px' });
    for (let i = 0; i < 290; i++) {
      if (i < 70) {
        this.time.delayedCall(200 * i, function () {
          this.octoShot(Phaser.Math.Between(bossEnemy.x - 20, bossEnemy.x + 20),bossEnemy.y);
        }, [], this);
      } else if (i > 70 && i < 90) {
        this.time.delayedCall(200 * i, function () {
          if (bossEnemy.Health > 0) {
            this.aimedShotRed(bossEnemy.x,bossEnemy.y);
            this.quadShot(bossEnemy.x,bossEnemy.y);
          }
        }, [], this);
      } else if (i > 90 && i < 140) {
        this.time.delayedCall(200 * i, function() {
          if (bossEnemy.Health > 0) {
            this.time.delayedCall(2500, function () {
              this.bulletString(4, 20, bossEnemy.x, bossEnemy.y);
            }, [], this);
            this.bulletString(4, -20, bossEnemy.x, bossEnemy.y);
            this.directionalShotBlue(bossEnemy.x + -20, bossEnemy.y, 20, 100);
            this.aimedShotRed(bossEnemy.x + 20, bossEnemy.y);
          }
        }, [], this);
      } else if (i > 140 && i < 280) {
        this.time.delayedCall(200 * i, function() {
          if (bossEnemy.Health > 0) {
            this.directionalShotBlue(bossEnemy.x - 21, bossEnemy.y + 10, Phaser.Math.Between(-100,100), 60);
            this.directionalShotBlue(bossEnemy.x + 2, bossEnemy.y + 9, Phaser.Math.Between(-100,100), -60);
            this.directionalShotBlue(bossEnemy.x - 1, bossEnemy.y + 24, Phaser.Math.Between(-100,100), 60);
            this.directionalShotBlue(bossEnemy.x + 24, bossEnemy.y + 20, Phaser.Math.Between(-100,100),-60);
            this.directionalShotBlue(bossEnemy.x - 20, bossEnemy.y + 25, 60, -9);
            this.directionalShotBlue(bossEnemy.x - 13, bossEnemy.y - 16 , Phaser.Math.Between(-100,100), -60);
            this.directionalShotBlue(bossEnemy.x + 10, bossEnemy.y - 17, Phaser.Math.Between(-100,100), 60);
            this.directionalShotBlue(bossEnemy.x - 5, bossEnemy.y - 13, Phaser.Math.Between(-100,100), -60);
            this.directionalShotBlue(bossEnemy.x + 21, bossEnemy.y - 10, Phaser.Math.Between(-100,100), 60);
            this.directionalShotBlue(bossEnemy.x + 6, bossEnemy.y - 4, 60, 10);
            this.directionalShotBlue(bossEnemy.x + 5, bossEnemy.y - 2, 60, 0);
            this.directionalShotBlue(bossEnemy.x - 9, bossEnemy.y - 11, Phaser.Math.Between(-100,100), -60);
            this.directionalShotBlue(bossEnemy.x - 21, bossEnemy.y - 24, Phaser.Math.Between(-100,100), 60);
            this.directionalShotBlue(bossEnemy.x - 14, bossEnemy.y + 2, -60, 0);
            this.directionalShotBlue(bossEnemy.x + 6, bossEnemy.y + 9, Phaser.Math.Between(-100,100), 60);
          }
        }, [], this);
      } else if (i > 280) {
        this.time.delayedCall(200 * i, function () {
          i = 0;
        }, [], this);
      }
    }
  }

  blueShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      console.log("blue bullet fired");
      var bBullet = new EnemyBulletBlue({scene: this, x:x, y:y});
      blueBullets.add(bBullet);
      bBullet.setVelocity(0,100);
    }
  }

  redShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      console.log("red bullet fired");
      var rBullet = new EnemyBulletRed({scene: this, x:x, y:y});
      redBullets.add(rBullet);
      rBullet.setVelocity(0,100);
    }
  }

  aimedShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      var target = new Phaser.Math.Vector2(Player.x, Player.y);
      var hBullet = new EnemyBulletBlue({scene: this, x:x, y:y});
      blueBullets.add(hBullet);
      this.physics.moveToObject(hBullet, target, 100);
    }
  }

  aimedShotRed(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      var target = new Phaser.Math.Vector2(Player.x, Player.y);
      var hBullet = new EnemyBulletRed({scene: this, x:x, y:y});
      redBullets.add(hBullet);
      this.physics.moveToObject(hBullet, target, 100);
    }
  }

  directionalShotBlue(x, y, ofstX, dirY) {
    if (this.cameras.main.worldView.contains(x, y)) {
      if (dirY == null) {
        this.dirY = 100;
      }
      var bBullet = new EnemyBulletBlue({scene: this, x:x, y:y});
      blueBullets.add(bBullet);
      bBullet.setVelocity(ofstX, dirY);
    }
  }
  //this function is NOT ready to use yet, configure a directional shot first
  bulletString(length, dirX, x, y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      for (var i = 0; i < length; i++) {
        var bBullet = new EnemyBulletBlue({scene: this, x: x + i * (dirX / 10), y: (y + i * 10)});
        blueBullets.add(bBullet);
        bBullet.setVelocity(dirX, 100);
      }
    }
  }

  quadShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      var b1 = new EnemyBulletBlue({scene: this, x: x, y: y + 5});
      blueBullets.add(b1);
      b1.setVelocity(0, 100);
      var b2 = new EnemyBulletBlue({scene: this, x: x + 5, y: y});
      blueBullets.add(b2);
      b2.setVelocity(100, 0);
      var b3 = new EnemyBulletBlue({scene: this, x: x - 5, y: y});
      blueBullets.add(b3);
      b3.setVelocity(-100, 0);
      var b4 = new EnemyBulletBlue({scene: this, x: x, y: y - 5});
      blueBullets.add(b4);
      b4.setVelocity(0,-100);
    }
  }

  quadShot2(x,y) {
    if (this.cameras.main.worldView.contains(x,y)) {
      var b5 = new EnemyBulletBlue({scene: this, x: x + 5, y: y + 5});
      blueBullets.add(b5);
      b5.setVelocity(50, 100);
      var b6 = new EnemyBulletBlue({scene: this, x: x + 5, y: y - 5});
      blueBullets.add(b6);
      b6.setVelocity(50, -100);
      var b7 = new EnemyBulletBlue({scene: this, x: x - 5, y: y - 5});
      blueBullets.add(b7);
      b7.setVelocity(-50, 100);
      var b8 = new EnemyBulletBlue({scene: this, x: x - 5, y: y + 5});
      blueBullets.add(b8);
      b8.setVelocity(-50, -100);
    }
  }

  octoShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      this.quadShot(x,y);
      var b5 = new EnemyBulletBlue({scene: this, x: x + 5, y: y + 5});
      blueBullets.add(b5);
      b5.setVelocity(50, 100);
      var b6 = new EnemyBulletBlue({scene: this, x: x + 5, y: y - 5});
      blueBullets.add(b6);
      b6.setVelocity(50, -100);
      var b7 = new EnemyBulletBlue({scene: this, x: x - 5, y: y - 5});
      blueBullets.add(b7);
      b7.setVelocity(-50, 100);
      var b8 = new EnemyBulletBlue({scene: this, x: x - 5, y: y + 5});
      blueBullets.add(b8);
      b8.setVelocity(-50, -100);
    }
  }

  tripleShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      var b1 = new EnemyBulletRed({scene: this, x: x, y: y});
      redBullets.add(b1);
      b1.setVelocity(0, 100);
      var b2 = new EnemyBulletBlue({scene: this, x: x + 5, y: y});
      blueBullets.add(b2);
      b2.setVelocity(15, 100);
      var b3 = new EnemyBulletBlue({scene: this, x: x - 5, y: y});
      blueBullets.add(b3);
      b3.setVelocity(-15, 100);
    }
  }

  spinShot() {
  /*  let spinner = function () {
      for (let i = 0; i < 32; i++) {
      this.time.delayedCall(i * 10, function )
      }
    } */
  }

  clusterA(x,y) {
    this.directionalShotBlue(this.x, this.y, 12);
    this.directionalShotBlue(this.x, this.y, 18);
    this.directionalShotBlue(this.x, this.y, 15);
    this.directionalShotBlue(this.x, this.y, 5);
    this.directionalShotBlue(this.x, this.y, 0);
    this.directionalShotBlue(this.x, this.y, -2);
    this.directionalShotBlue(this.x, this.y, -1);
  }
  clusterB(x,y) {
    this.directionalShotBlue(this.x, this.y, 0);
    this.directionalShotBlue(this.x, this.y, -2);
    this.directionalShotBlue(this.x, this.y,-15);
    this.directionalShotBlue(this.x, this.y, -2);
    this.directionalShotBlue(this.x, this.y, 20);
    this.directionalShotBlue(this.x, this.y, 19);
    this.directionalShotBlue(this.x, this.y, -13);
  }

  spawnCoin(x,y) {
    var ofstX = Math.floor(Math.random() * (10 - (-10) +1) -10);
    var ofstY = Math.floor(Math.random() * (10 - (-10) +1) -10);
    var newCoin = new Coin({scene: this, x: (x + ofstX), y: (y + ofstY)});
    this.coins.add(newCoin);
    newCoin.setGravity(0, 10);
    newCoin.setBounce(10);
    newCoin.setVelocity(ofstX, (ofstY * -2));
    newCoin.play("coinSh");
  }

  spawnMiniCoin(x,y) {
    var newMC = new MiniCoin({scene: this, x: x, y: y});
    this.miniCoins.add(newMC);
    newMC.setGravity(0, 140);
    newMC.setBounce(10);
    newMC.setVelocity(0, -140);
    newMC.play("miniCoin");
  }

  spawnPowerUp(x,y) {
    var newPU = new PowerUp({scene: this, x:x, y:y});
    this.powerUps.add(newPU);
    newPU.setGravity(0,90);
    newPU.setBounce(10);
    newPU.setVelocity(0, -140);
    newPU.play("shinyP");
  }

  activateBomb() {
    if (bombCount > 0 && canShoot) {
      bombCount = (bombCount - 1);
      this.bombing = true;
      console.log("Bomb activated");
      bombAnim = this.physics.add.sprite(0,0, "bombtest").setOrigin(0,0);
      bombAnim.body.enable = true;
      bombAnim.setActive(true);
      bombAnim.setVisible(true);
      this.cameras.main.shake(300);
      bombDisplay.remove(bombDisplay.getLast(true), true);
      this.time.delayedCall(50, function() {
        bombAnim.destroy();
        this.bombing = false;
      }, [], this);
    } else {
      console.log("no more bombs available");
    }
  }


  fireGreen() {
    if (canShoot) {
      if (!grnActive) {
        if(shotLevel == 2) {
          grnActive = true;
          beam1 = new Beam ({scene: this, x: cannon1.x, y: cannon1.y - 10 });
          this.beams.add(beam1);
          beam1.setOrigin(0, 1);
          beam1.play("greenAnim");
        }
        if (shotLevel == 3) {
          grnActive = true;
          beam1 = new Beam ({scene: this, x: cannon1.x, y: cannon1.y - 10 });
          this.beams.add(beam1);
          beam1.setOrigin(0, 1);
          beam1.play("greenAnim");
          beam2 = new Beam ({scene: this, x: cannon2.x, y: cannon2.y - 10 });
          this.beams.add(beam2);
          beam2.setOrigin(0, 1);
          beam2.play("greenAnim");
        }
      } else {
        beam1.setPosition(cannon1.x - 4, cannon1.y - 21);
        beam1.setActive(true, true);
        if (shotLevel == 3) {
          beam2.setPosition(cannon2.x - 4, cannon2.y - 21);
          beam2.setActive(true,true);
        }
      }
      console.log("lazer firing");
    }
  }

  addLeadingZeros(num, Lngth) {
    return String(num).padStart(Lngth, '0');
  }


  //in06
  update() {
    if (gameOver === true) {
      //this.scene.start("GameOver1")
    }
    //check if the player is using pointer controls
    var pointer = this.input.activePointer;
    if (pointer.isDown) {
      if (canShoot === true) {
        this.handlePointer();
        this.shootLaser();
        this.fireGreen();
      }// Attach the cannon to the player if using Pointer
      if (shotLevel >= 2) {
        cannon1.setPosition(Player.x - 35, Player.y - 5);
      }

    } else {
    //if not, use keyboard controls.
    var ZKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    var CKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    var enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    if (ZKey.isDown) {
      this.shootLaser();
      this.fireGreen();
    }
    if (Phaser.Input.Keyboard.JustDown(CKey)) {
      this.activateBomb();
    }
    if (Phaser.Input.Keyboard.JustDown(enterKey)) {
      this.pauseGame();
    }

      //horizontal controls:
     if (cursors.left.isDown) {
        Player.setVelocityX(-playerMoveSpeed);
      } else if (cursors.right.isDown) {
        Player.setVelocityX(playerMoveSpeed);
      } else {
        Player.setVelocityX(0);
      }
      // vertical controls:
      if (cursors.up.isDown) {
        Player.setVelocityY(-playerMoveSpeed);
      } else if (cursors.down.isDown) {
        Player.setVelocityY(playerMoveSpeed);
      } else {
        Player.setVelocityY(0);
      }
    }
    //Move the lazer cannons with the player if using Keys
    if (shotLevel >= 2) {
      cannon1.setPosition(Player.x - 35, Player.y - 5);

    }
    if (shotLevel == 3) {
      cannon2.setPosition(Player.x + 35, Player.y - 5);
    }
    //Stop the laser if the player is not firing
    if (!pointer.isDown && !ZKey.isDown) {
      if (grnActive == true) {
        beam1.disableBody(true,true);
        if (shotLevel >= 3) { beam2.disableBody(true,true); }
        grnActive = false;
      }
    }

    if (fightingBoss) {
      this.bossHealthDisplay.setText("boss health: " + bossEnemy.Health);
    } else {
      stageBG.tilePositionY -= 1;
    }
    //this.cameras.main.setPosition(this.cameras.main.x, this.cameras.main.y + 1);

    //Update the score, bomb display etc
    scoreText.setText(this.addLeadingZeros(score, 9));
    multiplierText.setText("x" + this.addLeadingZeros(multiplier, 3));
    //timer for the score multiplier
    if (multiplier > 1 && !multiTimerActive) {
      multiplier = multiplier - 1;
    }
    //setting the high score
    if (score >= highScore) {
      highScore = score;
    }
  }

}

//Level two
//Level two repeats alot of functions. Oops
class PlayGame2 extends Phaser.Scene {
  constructor() {
    super("PlayGame2");
  }

  prelaod() {}

  passStage() {
    var nm;
    if (noMiss) {
      nm = 100000;
    } else if (!noMiss) {
       nm = 0;
    }
    let add;
    let stageComplete = this.add.sprite(0,0,"stageComplete");
    stageComplete.setDepth(0);
    stageComplete.setOrigin(0,0);
    let killAddup = this.add.text(
      this.scale.width * 0.20, this.scale.height * 0.25,
      ("Kills: " + kills + " x1000 = " + kills * 1000),
      { fontFamily: 'pxlFont', fontSize: '32px', fill: '#fff', stroke: '#000', strokeThickness: 1 }
    );
    let coinAddup = this.add.text(
      this.scale.width * 0.20, this.scale.height * 0.25 + 35,
      ("Coins: " + coinsCollected + " x1000 = " + coinsCollected * 1000),
      { fontFamily: 'pxlFont', fontSize: '32px', fill: '#fff', stroke: '#000', strokeThickness: 1 }
    );
    let noMissAddUp = this.add.text(
      this.scale.width * 0.20, this.scale.height * 0.25 + 70,
      ("No miss: " + nm),
      { fontFamily: 'pxlFont', fontSize: '32px', fill: '#fff', stroke: '#000', strokeThickness: 1 }
    );
    add = coinsCollected * 1000 + kills * 1000 + nm;
    score = score + add;
    this.time.delayedCall(4000, function() { this.cameras.main.fadeOut(1000,0,0,0); },[],this);
    this.time.delayedCall(5000, function() {
      this.bossMusic.stop();
      this.scene.start("PlayGame3"); }, [], this);
  }

  pauseGame( ) {
    globalPause();
    if(!gameOver) {
      pauseSound.play(sfxConfig);
      this.scene.pause("PlayGame2");
      this.scene.launch("PauseButton");
      console.log("Game paused.");
      pauseBtn.setActive(false);
      pauseBtn.setVisible(false);
      pauseText.setActive(true);
      pauseText.setVisible(true);
    } else if (gameOver) {
      this.continueGame();
    }
  }

  scorePoints(points, x, y){
    var total;
    total = points * multiplier;
    score += total;
    let popUp = this.add.text(x, y, "+" + total, { fontFamily: 'pxlFont', fontSize: '16px', fill: '#fff', stroke: '#000', strokeThickness: 1 });
    this.time.delayedCall(1000, function() { popUp.destroy(); }, [], this);
  }

  collectCoin(Player, coin) {
    coin.disableBody(true, true);
    coinsCollected = coinsCollected + 1;
    this.scorePoints(10, coin.x, coin.y);
    coinPickupSound.play(sfxConfig);
  }

  collectMiniCoin(Player, coin) {
    coin.disableBody(true, true);
    let popUp = this.add.text(coin.x, coin.y - 10, "MULTI + 1", { fontFamily: 'pxlFont', fontSize: '12px', fill: '#A7DBD8', stroke: '#000', strokeThickness: 1 });
    this.scorePoints(5, coin.x, coin.y + 15);
    multiplier += 1;
    this.time.delayedCall(1000, function () { popUp.destroy(); }, [], this);
    this.addTimer();
    coinPickupSound.play(sfxConfig);
  }

  powerUpPlayer(Player, powerUp) {
    powerUp.disableBody(true, true);
    laserPickupSound.play(sfxConfig);
    if (shotLevel == 1) {
      console.log("power up collected, power level: " + shotLevel);
      cannon1 = new Cannon({ scene: this, x: (Player.x - 15), y: (Player.y + 15)});
      shotLevel += 1;
      this.scorePoints(100, Player.x, Player.y + 10);
    } else if (shotLevel == 2) {
      console.log("power up collected, power level: " + shotLevel);
      cannon2 = new Cannon({scene: this, x: (Player.x + 15), y: (Player.y + 15)});
      shotLevel += 1;
      this.scorePoints(1000, Player.x, Player.y + 5);
      if (grnActive) {
          beam2 = new Beam ({scene: this, x: cannon2.x, y: cannon2.y - 10 });
          this.beams.add(beam2);
          beam2.setOrigin(0, 1);
          beam2.play("greenAnim");
      }
    }
  }

  explode(x,y,n) {
    for (let i = 0; i < n; i++) {
      this.time.delayedCall(i * 200, function () {
        this.add.sprite(Phaser.Math.Between(x- 10, x + 10),Phaser.Math.Between(y - 10, y + 10), 'expl1').play('explosion');
        explosionSound.play(sfxConfig);
      }, [], this);
    }
  }

  getBombed(enemy, bomb) {
    enemy.Health = enemy.Health - 100;
    this.damageEnemy(enemy, bomb);
  }

  damageEnemy(enemy, laserGroup) {
    if (this.cameras.main.worldView.contains(enemy.x, enemy.y) && enemy.canHit == true) {
      enemy.canHit = false;
      enemy.setTintFill(0xfffffff);
      enemy.Health = enemy.Health - (10 + shotLevel + (shotLevel * 3));
      console.log("enemy hit, health:" + enemy.Health);
      this.time.delayedCall(100, function() { enemy.clearTint(); enemy.canHit = true; }, [], this);
      if (enemy.Health <= 0) {
      if (!enemy.isBoss) {
        kills = kills + 1;
        this.scorePoints(50, enemy.x, enemy.y + 5);
        this.explode(enemy.x, enemy.y, 2);
        let i = Phaser.Math.Between(0, 10);
        if (i == 5) {
          this.spawnPowerUp(enemy.x, enemy.y);
        } else if ( i > 5) {
          this.spawnCoin(enemy.x, enemy.y);
        } else if ( i < 5) {
          this.spawnMiniCoin(enemy.x, enemy.y);
        }
        enemy.setActive(false);
        enemy.setVisible(false);
        enemy.destroy();
      } else if (enemy.isBoss) {
        console.log ("boss destroyed");
        fightingBoss = false;
        kills = kills + 1;
        for (let i = 0; i < 12; i++) {
          this.time.delayedCall(i * 200, function () {
            explosionSound.play(sfxConfig);
            this.add.sprite(Phaser.Math.Between(enemy.x - 50, enemy.x + 50),Phaser.Math.Between(enemy.y + 60, enemy.y - 60), 'expl1').play('explosion');
          }, [], this);
          this.spawnCoin(Phaser.Math.Between(enemy.x - 100, enemy.x + 100),Phaser.Math.Between(enemy.y + 200, enemy.y - 50));
          }
          enemy.destroy();
          this.time.delayedCall(6000, this.passStage, [], this);
        }
      }
    }
  }

  killRedBullet(bullet, laserGroup) {
    console.log("red bullet hit");
    bullet.disableBody(true,true);
    laserGroup.setActive(false);
    laserGroup.setVisible(false);
    //this.spawnMiniCoin(bullet.x, bullet.y);
    this.scorePoints(1, bullet.x, bullet.y);
  }

  respawnPlayer() {
    sdk.showBanner();
    Player.setActive(true);
    Player.setVisible(true);
    Player.setAlpha(0.5);
    playerCanCollide = false;
    this.time.delayedCall(2500, function () {
      Player.body.enable = true;
      playerCanCollide = true;
      Player.setAlpha(1);
    }, [], this);
    canShoot = true;
    bombCount = 3;
  }

  continueGame() {
    pauseSound.play(sfxConfig);
    this.physics.world.timeScale = 1;
    this.respawnPlayer();
    lives = 3;
    score = 0;
    bombCount = 3;
    this.addLives();
    this.addBombs();
    gameOver = false;
    continueButton.setActive(false);
    continueButton.setVisible(false);
    titleButton.setActive(false);
    titleButton.setVisible(false);
    gameOverText.setVisible(false);
    pauseBtn.setActive(true);
    pauseBtn.setVisible(true);
  }

  toTitle() {
      //pauseSound.play();
      this.scene.stop("PlayGame");
      this.scene.start("BootGame");
  }

  addLives() {
    livesDisplay = this.add.group ({
      key: 'playerIcon',
      repeat: 1,
      setXY: { x: 16, y: 616, stepX: 32 }
    });
  }

  addBombs() {
    bombDisplay = this.add.group ({
      key: 'bombIcon',
      repeat: 2,
      setXY: { x: 390, y: 616, stepX: 32 }
    });
  }

  playerHit(Player, enemy) {
    if (!godMode) {
    if (playerCanCollide) {
      console.log("Player hit");
      noMiss = false;
      this.damageEnemy(enemy, this.laserGroup);
      canShoot = false;
      playerCanCollide = false;
      this.explode(Player.x, Player.y, 4);
      Player.setVisible(false);
      Player.setActive(false);
      Player.body.enable = false;
      lives = (lives - 1);
      livesDisplay.remove(livesDisplay.getLast(true), true);
      if (lives === 0) {
        this.initiateGameOver();
      } else {
        this.time.delayedCall(2000, this.respawnPlayer, [], this);
      }
    }
  }
  }

  addTimer() {
    multiTimerActive = true;
    this.time.addEvent({
      delay : 30000,
      callback: function () {
        multiTimerActive = false;
      },
      loop: false
    });
  }

  startBossBattle() {
    let warning = this.add.sprite(0,0, "warning");
    warning.setOrigin(0,0);
    warning.setAlpha(0);
    bossAlertSound.play({
      mute:false,
      volume: 0.5,
      loop: true,
      delay: 0
    });
    let wrntwn = this.tweens.add({
      targets: warning,
      alphaTopLeft: { value: 1, duration: 500, ease: 'Power1' },
      alphaBottomRight: { value: 1, duration: 500, ease: 'Power1' },
      alphaBottomLeft: { value: 1, duration: 500, ease: 'Power1' },
      yoyo: true,
      loop: -1
    });
    this.tweens.add ({
      targets: this.stageMusic,
      volume: 0,
      duration: 2000
    });
    this.time.delayedCall(4000, function () {
      warning.destroy();
      bossAlertSound.stop();
      this.bossMusic.play(musicConfig);
      this.addBoss(240,10);
    }, [], this);
  }

  create() {
    this.cameras.main.fadeIn(1000,0,0,0); // fade in effect
    //adding the background
    stageBG = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, "stageTwoBG");
    stageBG.setOrigin(0,0);
    //adding music
    this.stageMusic = this.sound.add("stageTwoSong");
    this.stageMusic.play(musicConfig);
    this.bossMusic = this.sound.add("bossBattleSong");
    //Adding the player and its animations
    this.anims.create({
      key: "animPlayer",
      frames: this.anims.generateFrameNumbers("animatedPlayer", {start: 0, end : 3 }),
      frameRate: 10,
      repeat: -1
    });
    Player = this.physics.add.sprite(240, 400, "mech");
    Player.play("animPlayer");
    Player.setBounce(1);
    Player.setGravity(0);
    Player.setCollideWorldBounds(true);
    Player.setSize(1,1);
    Player.setOffset(23,23);

    if (shotLevel == 2) {
      cannon1 = new Cannon({ scene: this, x: (Player.x - 15), y: (Player.y + 15)});
    } else if (shotLevel == 3) {
      cannon1 = new Cannon({ scene: this, x: (Player.x - 15), y: (Player.y + 15)});
      cannon2 = new Cannon({scene: this, x: (Player.x + 15), y: (Player.y + 15)});
    }

    cursors = this.input.keyboard.createCursorKeys();
    var spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    //Better way of firing bullets using Phasers arcade physics group
    this.laserGroup = new LaserGroup(this);
    this.beams = new BeamGroup(this);
    //hidden information:
    noMiss = true;
    kills = 0;
    coinsCollected = 0;
    //Hud elments
    scoreText = this.add.text(5, 5, "000000000", { fontFamily: 'pxlFont', fontSize: '32px', fill: '#fff', stroke: '#000', strokeThickness: 3 });
    scoreText.setScrollFactor(0);
    multiplierText = this.add.text(5, 25, "x001", { fontFamily: 'pxlFont', fontSize: '32px', fill: '#A7DBD8', stroke: '#000', strokeThickness: 3 });
    multiplierText.setScrollFactor(0);
    this.addBombs();
    let i = 0;

    //enemies and their projectiles
    blueBullets = new BlueBullets(this);
    redBullets = new RedBullets(this);

    this.addLives();

    this.coins = new CoinGroup(this);
    this.spawnCoin(12, 450);
    this.powerUps = new PowerUps(this);
    this.miniCoins = new MiniCoinGroup(this);

    this.anims.create({
      key: "bossTwoA",
      frames: this.anims.generateFrameNumbers("bossTwoAnim", { start: 0, end: 4 }),
      frameRate: 5,
      repeat: -1
    });

    //adding enemies
    this.nmeGroup = new EnemyGroup(this);
    this.addBugEnemy(192, -102, "purpleB", 50, "quadShot2", 193, 72, 690);
    this.addBugEnemy(407, -100, "fish", 100, "arrowString", 407, 110, 500, -10, 5);
    this.addBugEnemy(158, -387, "Mwing", 200, "blue", 311, 130, 300);
    this.addBugEnemy(318, -582, "Dbomber", 400, "largeBlueShot", 98, 202, 1200);
    this.addBugEnemy(191, -714, "Dbomber", 400, "largeBlueShot", 390, 202, 1200);
    this.addBugEnemy(319, -838, "Mwing", 300, "tripleShot", 319, 167, 400);
    this.addMiniBug(98, -826, 300, 0);
    this.addBugEnemy(414, -998, "Dbomber", 400, "largeBlueShot", 13, 200, 800);
    this.addMiniBug(159, -1082, 300, 0);
    this.addMiniBug(230, -1100, 300, 0);
    this.addBugEnemy(256, -1156, "Mwing", 200, "octoShot", 256, 270, 700);
    this.addMiniBug(356,-1211, 300, 0);
    this.addMiniBug(200, -1276, 300, 0);
    this.addBugEnemy(95, -1305, "Mwing", 200, "arrowString", 128, 220, 650, 8, 4);
    this.addBugEnemy(388, -1371, "Mwing", 200, "arrowString", 357, 180, 650, -8, 7);
    this.addBugEnemy(254, -1539, "Mwing", 200, "arrowString", 252, 55, 2000, 0, 8);
    this.addMiniBug(36,-1532, 300, 0);
    this.addMiniBug(476, -1556, 300, 0);
    this.addBugEnemy(351, 1729, "Dbomber", 400, "largeBlueShot", 291, 291, 800);
    this.addBugEnemy(156,-1849, "dikbug2", 200, "red", 196, 200, 400);
    this.addBugEnemy(282, -2071, "Xwing", 200, "aimedBlue", 200, 100, 800);
    this.addBugEnemy(94, -2177, "Mwing", 200, "aimedRed", 124, 149, 600);
    this.addBugEnemy(382, -2309, "Mwing", 200, "stringBlue", 346, 300, 800, -20, 4);
    this.addMiniBug(290, -2388, 300, 0);
    this.addBugEnemy(162, -2464, "Mwing", 200, "quadShot2", 122, 322, 1200);
    this.addMiniBug(60, -2528, 300, 0);
    this.addMiniBug(224, -2648, 300, 0);
    this.addBugEnemy(378, -2662, "Mwing", 200, "octoShot", 378, 65, 1200);
    this.addBugEnemy(95, -2577, "Xwing", 200, "tripleShot", 145, 95, 800);
    this.addBugEnemy(191, -2840, "Xwing", 200, "aimedRed", 191, 95, 400);
    this.addBugEnemy(416, -2840, "Xwing", 200, "arrowString", 380, 211, 1000, 0, 8);
    this.addBugEnemy(318, -2924, "Vwing", 200, "octoShot", 199, 198, 1200);
    this.addMiniBug(290, -2812, 300, 0);
    this.addMiniBug(170, -2903, 300, 0);
    this.addMiniBug(96, -1938, 300, 0);
    this.addMiniBug(253, -3075, 300, 0);
    this.addMiniBug(65, -3099, 300, 0);
    this.addMiniBug(130, -3277, 300, 0);
    this.addMiniBug(419, -3328, 300, 0);
    this.addBugEnemy(95, -3165, "Xwing", 200, "stringBlue", 240, 20, 1200, 0, 6);
    this.addMiniBug(453, -3356, 300, 0);
    this.addMiniBug(65, -3450, 300, 0);
    this.addBugEnemy(128, -3522, "Vwing", 200, "tripleShot", 98, 300, 500);
    this.addBugEnemy(448, -3557, "Vwing", 200, "quadShot", 240, 256, 700);
    this.addBugEnemy(317, -3713, "Vwing", 200, "clusterA", 219, 129, 1000);
    this.addBugEnemy(256, -3873, "purpleB", 400, "largeBlueShot", 256, 40, 1000);
    this.addBugEnemy(352, -4125, "Xwing", 200, "clusterA", 352, 200, 800);
    this.addBugEnemy(129, -4158, "Vwing", 200, "tripleShot", 219, 300, 400);
    this.addBugEnemy(416, -4446, "Vwing", 200, "clusterB", 17, 30, 900);
    this.addBugEnemy(191, -4478, "Vwing", 200, "quadShot2", 240, 280, 200);
    this.addBugEnemy(63, -4670, "Vwing", 200, "quadShot", 430, 211, 500);
    this.addBugEnemy(413, -4803, "bossOne", 500, "boss1patt1", 295, 122, 500);
    this.addBugEnemy(349, -4996, "Mwing", 200, "aimedRed", 349, 333, 800);
    this.addBugEnemy(189, -5121, "bossOne", 500, "boss1patt2", 196, 122, 3000);
    this.addMiniBug(67, -5212, 300, 0);
    this.addMiniBug(227, -5244, 300, 0);
    this.addMiniBug(67, -5277, 300, 0);
    this.addMiniBug(130, -5309, 300, 0);
    this.addMiniBug(322, -5309, 300, 0);
    this.addMiniBug(228, -5340, 300, 0);
    this.addMiniBug(418, -5342, 300, 0);
    this.addMiniBug(292, -5405, 300, 0);
    this.addMiniBug(385, -5467, 300, 0);
    this.addMiniBug(477, -5499, 300, 0);
    this.addMiniBug(227, -5532, 300, 0);
    this.addMiniBug(299, -5533, 300, 0);
    this.addMiniBug(131, -5564, 300, 0);
    this.addMiniBug(387, -5564, 300, 0);
    this.addMiniBug(66, -5628, 300, 0);
    this.addMiniBug(100, -5691, 300, 0);
    this.addMiniBug(65, -5753, 300, 0);
    this.addBugEnemy(128, -5410, "Vwing", 200, "octoShot", 301,218, 1000);
    this.addBugEnemy(449, -5663, "Vwing", 200, "octoShot", 111, 260, 800);
    this.addBugEnemy(287, -5987, "Mwing", 200, "arrowString", 331, 187, 700, -20, 8);
    this.addBugEnemy(159, -6044, "Mwing", 200, "arrowString", 121, 162, 700, 12, 6);
    this.addBugEnemy(257, -6223, "Xwing", 200, "arrowString", 229, 210, 400, 0, 9);
    this.addBugEnemy(351, -6250, "Dbomber", 400, "largeBlue", 351, 333, 600);
    this.addBugEnemy(64, -6393, "Xwing", 200, "stringBlue", 83, 251, 500, 18, 3);
    this.addBugEnemy(351, -6459, "Xwing", 200, "stringBlue", 351, 111, 400, -10, 3);
    this.addBugEnemy(225, -6559, "dikbug2", 400, "clusterB", 225, 299, 1400);
    this.addBugEnemy(415, -6890, "Dbomber", 400, "largeBlueShot", 189, 189, 900);

    this.time.delayedCall(87000, function() { this.startBossBattle(); }, [], this);

    //Detecting collisions between the bullets and the enemies
    this.physics.add.overlap(this.nmeGroup, this.laserGroup, this.damageEnemy, null, this);
    this.physics.add.collider(Player, this.nmeGroup, this.playerHit, null, this);
    this.physics.add.collider(Player, blueBullets, this.playerHit, null, this);
    this.physics.add.collider(Player, redBullets, this.playerHit, null, this);
    this.physics.add.overlap(redBullets, this.laserGroup, this.killRedBullet, null, this);
    this.physics.add.overlap(this.nmeGroup, this.beams, this.damageEnemy, null, this);


    this.anims.create({
      key: 'explosion',
      frames: [
        { key: "expl1" },
        { key: "expl2" },
        { key: "expl3" },
        { key: "expl4" },
        { key: "expl5" },
        { key: "expl6" },
        { key: "expl7" },
        { key: "expl8" },
        { key: "expl9" },
        { key: "expl10" },
        { key: "expl11", duration: 90 },
      ],
      frameRate: 15,
      repeat: 0
    });

    //Coin animation
    this.anims.create({
      key: "coinSh",
      frames: this.anims.generateFrameNumbers("animatedCoin", { start: 0, end: 5 }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "miniCoin",
      frames:this.anims.generateFrameNumbers("miniCoin", { start: 0, end: 5 }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "greenAnim",
      frames:this.anims.generateFrameNumbers("animatedBeam", {start: 0, end: 2}),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "shinyP",
      frames:this.anims.generateFrameNumbers("animPC", {start: 0, end: 3}),
      frameRate:20,
      repeat: -1
    });

    this.anims.create({
      key: "grnVoid",
      frames: this.anims.generateFrameNumbers("greenVoid", {start: 0, end: 3}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "lrgBlueAn",
      frames: this.anims.generateFrameNumbers("largeBlueAnim", {start: 0, end: 3}),
      frameRate: 20,
      repeat: -1
    });
    // Colllecting coins etc
    this.physics.add.overlap(Player, this.coins, this.collectCoin, null, this); //the collision between the player and the coin
    this.physics.add.overlap(Player, this.miniCoins, this.collectMiniCoin, null, this);
    this.physics.add.overlap(Player, this.powerUps, this.powerUpPlayer, null, this);

    //manual firing
    this.input.keyboard.on('keydown-X', this.shootLaser, this);

    //firing mah laser
    var pointer = this.input.activePointer;
    this.input.on('pointerdown', (pointer) => {
      this.shootLaser();
    })

    //the game over screen:
    //the Continue button:
    gameOverText = this.add.sprite(0,0, "gameOverScreen");
    gameOverText.setDepth(1);
    gameOverText.setOrigin(0,0);
    gameOverText.setActive(false);
    gameOverText.setVisible(false);
    continueButton = this.add.sprite(this.scale.width * 0.5, this.scale.height * 0.5, "continueButton");
    continueButton.setDepth(1);
    continueButton.setInteractive();
    continueButton.on('pointerdown', () => { this.continueGame();});
    continueButton.setActive(false);
    continueButton.setVisible(false);
    titleButton = this.add.sprite(this.scale.width * 0.5, this.scale.height * 0.7, "titleButton");
    titleButton.setInteractive();
    titleButton.on('pointerdown', () => { this.toTitle(); });
    titleButton.setActive(false);
    titleButton.setVisible(false);
    //the pause button:
    pauseBtn = this.add.sprite(440, 30, 'pauseButton');
    pauseBtn.setDepth(1);
    pauseBtn.setInteractive();
    pauseBtn.on('pointerdown', () => { this.pauseGame(); });
    //for the pause Screen
    pauseText = this.add.sprite(0,0, "pauseText");
    pauseText.setDepth(1);
    pauseText.setOrigin(0,0);
    pauseText.setActive(false);
    pauseText.setVisible(false);

    //shot power ups, bombs
    this.spawnPowerUp(400, 300);

    //Sound
    bulletSound = this.sound.add("shootingSound");
    laserPickupSound = this.sound.add("laserPickupSound");
    coinPickupSound = this.sound.add("coinPickupSound");
    explosionSound = this.sound.add("explosionSound");
    pauseSound = this.sound.add("pauseSound");
    bossAlertSound = this.sound.add("bossAlert");

  }
  handlePointer() {
    this.input.on('pointermove', (pointer) => {
      Player.setPosition(pointer.x, pointer.y); //You MUST use setPosition, player.x will NOT work in this context.
    });
  }

  initiateGameOver() {
    lives = -1;
    score = 0;
    gameOver = true;
    for (let i = 0; i < 3; i++) {
      this.spawnCoin(Player.x, Player.y);
      this.spawnPowerUp(Player.x, Player.y);
    }
    this.physics.world.timeScale = 8;
    console.log("game over, idiot");
    gameOverText.setActive(true);
    gameOverText.setVisible(true);
    continueButton.setActive(true);
    continueButton.setVisible(true);
    pauseBtn.setActive(false);
    pauseBtn.setVisible(false);
    //titleButton.setActive(true);
    //titleButton.setVisible(true);
  }

  shootLaser() {
    if (canShoot) {
      var lzrOffset = Math.floor(Math.random() * (3 - (-3) + 1) + -3);
      this.laserGroup.fireLaser((Player.x + lzrOffset), Player.y - 35);
      bulletSound.play(sfxConfig);
    }
  }

  moveEnemy(enemy, x,y) {
    if (this.cameras.main.worldView.contains(enemy.x, enemy.y)) {
      let tween = this.tweens.add({
        targets: enemy,
        x: x,
        y: y,
        duration: 4000,
        ease: 'Back',
        easeParams: [ 1.5 ],
        delay: 0
      });
      enemy.inPos = true;
    }
  }

  addBugEnemy(x,y, type, health, weapon, destX, destY, fdelay, stringDir, strLength) {
    var bugEnemy = new Enemy2({scene:this, x:x, y:y, type: type, health: health, weapon: weapon, fdelay: fdelay, destX: destX, destY: destY, stringDir: stringDir, strLength: strLength }).setScrollFactor(0,0);
    this.nmeGroup.add(bugEnemy);
    bugEnemy.setVelocity(0,87);
    //bugEnemy.setCollideWorldBounds(true);
    //bugEnemy.setGravity(0,1);
    //this.moveEnemy(bugEnemy, destX, destY);
  }

  addMiniBug(x,y, speed, ofstX) {
    var smallEnemy = new Enemy1({scene: this, x: x, y: y, key:"miniBug", speed: speed, ofstX: ofstX});
    this.nmeGroup.add(smallEnemy);
    smallEnemy.setVelocity(0,87);
  }

  addBoss(x,y) {
    bossEnemy = new BossTwo({ scene: this, x:x, y:y, key: "bossTwo" });
    bossEnemy.play("bossTwoA");
    this.moveEnemy(bossEnemy,240,200);
    this.nmeGroup.add(bossEnemy);
    fightingBoss = true;
    this.bossHealthDisplay = this.add.text(10, 100, "boss health: " + bossEnemy.Health, { fontSize: '16px' });
    for (let i = -60; i < 1000; i++) {
      if (i < 120) {
        this.time.delayedCall(200 * i, function () {
          this.blueShot(Phaser.Math.Between(bossEnemy.x - 200, bossEnemy.x + 200), bossEnemy.y);
          this.redShot(Phaser.Math.Between(bossEnemy.x - 100, bossEnemy.x - 50), bossEnemy.y);
          this.redShot(Phaser.Math.Between(bossEnemy.x + 100, bossEnemy.x + 50), bossEnemy.y);
          this.quadShot2(bossEnemy.x, bossEnemy.y + 20);
          this.largeBlueShot(bossEnemy.x, bossEnemy.y);
        }, [], this);
        this.time.delayedCall(200 * i, function () {
          this.directionalShotBlue(bossEnemy.x, bossEnemy.y, 100, 0);
          this.directionalShotBlue(bossEnemy.x, bossEnemy.y, -100, 0);
        }, [], this);
      } else if (i > 120 && i < 240) {
        this.moveEnemy(bossEnemy, 240, 60);
        this.time.delayedCall(200 * i, function () {
          if (bossEnemy.Health > 0) {
            let x = Phaser.Math.Between(0, 12);
            if (x == 1) {
              this.bulletString(6, 0, bossEnemy.x, bossEnemy.y);
            } else if (x==2) {
              this.bulletString(6, 0, bossEnemy.x - 56, bossEnemy.y);
            } else if (x == 3) {
              this.bulletString(6, 0, bossEnemy.x + 40, bossEnemy.y);
            } else if (x == 4) {
            this.bulletString(6, 0, bossEnemy.x + 63, bossEnemy.y);
            } else if (x == 5) {
            this.bulletString(6, 0, bossEnemy.x + 72, bossEnemy.y);
            } else if (x == 6) {
            this.bulletString(6, 0, bossEnemy.x - 23, bossEnemy.y);
            } else if (x == 7) {
            this.bulletString(6, 0, bossEnemy.x - 40, bossEnemy.y);
            } else if (x == 8) {
              this.bulletString(6, 0, bossEnemy.x + 200, bossEnemy.y);
            } else if (x == 9) {
              this.bulletString(6, 0, bossEnemy.x - 240, bossEnemy.y);
            } else if (x == 10) {
              this.bulletString(6, 0, bossEnemy.x + 105, bossEnemy.y);
            } else if (x == 11) {
              this.bulletString(6, 0, bossEnemy.x + 118, bossEnemy.y);
            } else  if (x == 12) {
              this.bulletString(6, 0, bossEnemy.x - 187, bossEnemy.y);
            }
            this.arrowString(Phaser.Math.Between(5,10), Phaser.Math.Between(15,35), bossEnemy.x - 170, Phaser.Math.Between(bossEnemy.y -20,bossEnemy.y + 20));
            this.arrowString(Phaser.Math.Between(5,10), Phaser.Math.Between(-15, -35), bossEnemy.x + 170, Phaser.Math.Between(bossEnemy.y -20,bossEnemy.y + 20));
          }
        },[],this);
      } else if (i > 240 && i < 1000) {
        this.time.delayedCall(200 * i, function() {
          let y = Phaser.Math.Between(0,10);
          if (bossEnemy.Health > 0) {
            if (x > 0 && x < 6) {
              this.directionalShotBlue(bossEnemy.x - 6, bossEnemy.y + 10, Phaser.Math.Between(-100,100), 60);
              this.directionalShotBlue(bossEnemy.x + 33, bossEnemy.y + 9, Phaser.Math.Between(-100,100), 60);
              this.directionalShotBlue(bossEnemy.x - 28, bossEnemy.y + 24, Phaser.Math.Between(-100,100), 60);
              this.directionalShotBlue(bossEnemy.x + 3, bossEnemy.y + 20, Phaser.Math.Between(-100,100),60);
              this.directionalShotBlue(bossEnemy.x - 17, bossEnemy.y + 25, 60, 60);
              this.directionalShotBlue(bossEnemy.x + 6, bossEnemy.y - 16 , Phaser.Math.Between(-100, 100), 60);
              this.directionalShotBlue(bossEnemy.x - 15, bossEnemy.y - 17, Phaser.Math.Between(-100, 100), 60);
              this.directionalShotBlue(bossEnemy.x - 12, bossEnemy.y + 10, Phaser.Math.Between(-100,100), 60);
              this.directionalShotBlue(bossEnemy.x + -38, bossEnemy.y + 9, Phaser.Math.Between(-100,100), 60);
              this.directionalShotBlue(bossEnemy.x - 17, bossEnemy.y + 24, Phaser.Math.Between(-100,100), 60);
              this.directionalShotBlue(bossEnemy.x + 32, bossEnemy.y + 20, Phaser.Math.Between(-100,100),60);
              this.directionalShotBlue(bossEnemy.x - 43, bossEnemy.y + 25, 60, 60);
              this.directionalShotBlue(bossEnemy.x + 5, bossEnemy.y - 16 , Phaser.Math.Between(-100, 100), 60);
              this.directionalShotBlue(bossEnemy.x + 15, bossEnemy.y - 17, Phaser.Math.Between(-100, 100), 60);
              this.aimedShotRed(Phaser.Math.Between(bossEnemy.x -30, bossEnemy + 30 ), bossEnemy.y);
              this.aimedShotRed(Phaser.Math.Between(bossEnemy.x -30, bossEnemy + 30 ), bossEnemy.y);

            }else if (y > 5 && y < 11) {
              this.directionalShotBlue(bossEnemy.x + 44, bossEnemy.y - 13, Phaser.Math.Between(-60,60), 60);
              this.directionalShotBlue(bossEnemy.x + 34, bossEnemy.y - 10, Phaser.Math.Between(-60,60), 60);
              this.directionalShotBlue(bossEnemy.x - 29, bossEnemy.y - 4, 60, 60);
              this.directionalShotBlue(bossEnemy.x - 6, bossEnemy.y - 2, 60, 60);
              this.directionalShotBlue(bossEnemy.x - 22, bossEnemy.y - 11, Phaser.Math.Between(-60,60), 60);
              this.directionalShotBlue(bossEnemy.x - 26, bossEnemy.y - 24, Phaser.Math.Between(-60,60), 60);
              this.directionalShotBlue(bossEnemy.x - 7, bossEnemy.y + 2, 60, 60);
              this.directionalShotBlue(bossEnemy.x - 13, bossEnemy.y + 9, Phaser.Math.Between(-60,60), 60);
              this.directionalShotBlue(bossEnemy.x + 42, bossEnemy.y - 13, Phaser.Math.Between(-60,60), 60);
              this.directionalShotBlue(bossEnemy.x + 32, bossEnemy.y - 10, Phaser.Math.Between(-60,60), 60);
              this.directionalShotBlue(bossEnemy.x - 20, bossEnemy.y - 4, 60, 10);
              this.directionalShotBlue(bossEnemy.x - 46, bossEnemy.y - 2, 60, 60);
              this.directionalShotBlue(bossEnemy.x - -49, bossEnemy.y - 11, Phaser.Math.Between(-60,60), 60);
              this.directionalShotBlue(bossEnemy.x + 28, bossEnemy.y - 24, Phaser.Math.Between(-60,60), 60);
              this.directionalShotBlue(bossEnemy.x + 25, bossEnemy.y + 2, 60, 60);
              this.directionalShotBlue(bossEnemy.x - 22, bossEnemy.y + 9, Phaser.Math.Between(-60,60), 60);
              this.aimedShotRed(Phaser.Math.Between(bossEnemy.x -60, bossEnemy + 60 ), bossEnemy.y);
              this.aimedShotRed(Phaser.Math.Between(bossEnemy.x -60, bossEnemy + 60 ), bossEnemy.y);
            }
          }
        }, [], this);
      } else if (i > 1000) {
        i = 0;
      }
    }
  }

  blueShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      console.log("blue bullet fired");
      var bBullet = new EnemyBulletBlue({scene: this, x:x, y:y});
      blueBullets.add(bBullet);
      bBullet.setVelocity(0,100);
    }
  }

  redShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      console.log("red bullet fired");
      var rBullet = new EnemyBulletRed({scene: this, x:x, y:y});
      redBullets.add(rBullet);
      rBullet.setVelocity(0,100);
    }
  }

  aimedShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      var target = new Phaser.Math.Vector2(Player.x, Player.y);
      var hBullet = new EnemyBulletBlue({scene: this, x:x, y:y});
      blueBullets.add(hBullet);
      this.physics.moveToObject(hBullet, target, 100);
    }
  }

  aimedShotRed(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      var target = new Phaser.Math.Vector2(Player.x, Player.y);
      var hBullet = new EnemyBulletRed({scene: this, x:x, y:y});
      redBullets.add(hBullet);
      this.physics.moveToObject(hBullet, target, 100);
    }
  }

  directionalShotBlue(x, y, ofstX, dirY) {
    if (this.cameras.main.worldView.contains(x, y)) {
      if (dirY == null) {
        this.dirY = 100;
      }
      var bBullet = new EnemyBulletBlue({scene: this, x:x, y:y});
      blueBullets.add(bBullet);
      bBullet.setVelocity(ofstX, dirY);
    }
  }
  //this function is NOT ready to use yet, configure a directional shot first
  bulletString(length, dirX, x, y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      for (var i = 0; i < length; i++) {
        var bBullet = new EnemyBulletBlue({scene: this, x: x + i * (dirX / 10), y: (y + i * 10)});
        blueBullets.add(bBullet);
        bBullet.setVelocity(dirX, 100);
      }
    }
  }

  arrowString(length, dirX, x, y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      for (var i = 0; i < length; i++) {
        var grnArrow = new EnemyBulletOther({scene: this, x:x, y:y, key: "greenArrow"});
        blueBullets.add(grnArrow);
        grnArrow.setVelocity(dirX, 100);
      }
    }
  }

  quadShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      var b1 = new EnemyBulletBlue({scene: this, x: x, y: y + 5});
      blueBullets.add(b1);
      b1.setVelocity(0, 100);
      var b2 = new EnemyBulletBlue({scene: this, x: x + 5, y: y});
      blueBullets.add(b2);
      b2.setVelocity(100, 0);
      var b3 = new EnemyBulletBlue({scene: this, x: x - 5, y: y});
      blueBullets.add(b3);
      b3.setVelocity(-100, 0);
      var b4 = new EnemyBulletBlue({scene: this, x: x, y: y - 5});
      blueBullets.add(b4);
      b4.setVelocity(0,-100);
    }
  }

  quadShot2(x,y) {
    if (this.cameras.main.worldView.contains(x,y)) {
      var b5 = new EnemyBulletBlue({scene: this, x: x + 5, y: y + 5});
      blueBullets.add(b5);
      b5.setVelocity(50, 100);
      var b6 = new EnemyBulletBlue({scene: this, x: x + 5, y: y - 5});
      blueBullets.add(b6);
      b6.setVelocity(50, -100);
      var b7 = new EnemyBulletBlue({scene: this, x: x - 5, y: y - 5});
      blueBullets.add(b7);
      b7.setVelocity(-50, 100);
      var b8 = new EnemyBulletBlue({scene: this, x: x - 5, y: y + 5});
      blueBullets.add(b8);
      b8.setVelocity(-50, -100);
    }
  }

  octoShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      this.quadShot(x,y);
      var b5 = new EnemyBulletBlue({scene: this, x: x + 5, y: y + 5});
      blueBullets.add(b5);
      b5.setVelocity(50, 100);
      var b6 = new EnemyBulletBlue({scene: this, x: x + 5, y: y - 5});
      blueBullets.add(b6);
      b6.setVelocity(50, -100);
      var b7 = new EnemyBulletBlue({scene: this, x: x - 5, y: y - 5});
      blueBullets.add(b7);
      b7.setVelocity(-50, 100);
      var b8 = new EnemyBulletBlue({scene: this, x: x - 5, y: y + 5});
      blueBullets.add(b8);
      b8.setVelocity(-50, -100);
    }
  }

  tripleShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      var b1 = new EnemyBulletRed({scene: this, x: x, y: y});
      redBullets.add(b1);
      b1.setVelocity(0, 100);
      var b2 = new EnemyBulletBlue({scene: this, x: x + 5, y: y});
      blueBullets.add(b2);
      b2.setVelocity(15, 100);
      var b3 = new EnemyBulletBlue({scene: this, x: x - 5, y: y});
      blueBullets.add(b3);
      b3.setVelocity(-15, 100);
    }
  }

  spinShot() {
  /*  let spinner = function () {
      for (let i = 0; i < 32; i++) {
      this.time.delayedCall(i * 10, function )
      }
    } */
  }

  clusterA(x,y) {
    this.directionalShotBlue(this.x, this.y, 12);
    this.directionalShotBlue(this.x, this.y, 18);
    this.directionalShotBlue(this.x, this.y, 15);
    this.directionalShotBlue(this.x, this.y, 5);
    this.directionalShotBlue(this.x, this.y, 0);
    this.directionalShotBlue(this.x, this.y, -2);
    this.directionalShotBlue(this.x, this.y, -1);
  }
  clusterB(x,y) {
    this.directionalShotBlue(this.x, this.y, 0);
    this.directionalShotBlue(this.x, this.y, -2);
    this.directionalShotBlue(this.x, this.y,-15);
    this.directionalShotBlue(this.x, this.y, -2);
    this.directionalShotBlue(this.x, this.y, 20);
    this.directionalShotBlue(this.x, this.y, 19);
    this.directionalShotBlue(this.x, this.y, -13);
  }

  largeBlueShot(x,y,dir){
    if (this.cameras.main.worldView.contains(x, y)) {
      var lrgblu = new EnemyBulletOther({scene: this, x:x, y:y, key:"largeBlue"});
      blueBullets.add(lrgblu);
      lrgblu.play("lrgBlueAn");
      lrgblu.setSize(16,16);
      lrgblu.setVelocity(0,-55);
      lrgblu.setGravity(Phaser.Math.Between(-5,5), 55);
    }
  }

  spawnCoin(x,y) {
    var ofstX = Math.floor(Math.random() * (10 - (-10) +1) -10);
    var ofstY = Math.floor(Math.random() * (10 - (-10) +1) -10);
    var newCoin = new Coin({scene: this, x: (x + ofstX), y: (y + ofstY)});
    this.coins.add(newCoin);
    newCoin.setGravity(0, 10);
    newCoin.setBounce(10);
    newCoin.setVelocity(ofstX, (ofstY * -2));
    newCoin.play("coinSh");
  }

  spawnMiniCoin(x,y) {
    var newMC = new MiniCoin({scene: this, x: x, y: y});
    this.miniCoins.add(newMC);
    newMC.setGravity(0, 140);
    newMC.setBounce(10);
    newMC.setVelocity(0, -140);
    newMC.play("miniCoin");
  }

  spawnPowerUp(x,y) {
    var newPU = new PowerUp({scene: this, x:x, y:y});
    this.powerUps.add(newPU);
    newPU.setGravity(0,90);
    newPU.setBounce(10);
    newPU.setVelocity(0, -140);
    newPU.play("shinyP");
  }

  activateBomb() {
    if (bombCount > 0 && canShoot) {
      bombCount = (bombCount - 1);
      this.bombing = true;
      console.log("Bomb activated");
      bombAnim = this.physics.add.sprite(0,0, "bombtest").setOrigin(0,0);
      bombAnim.body.enable = true;
      bombAnim.setActive(true);
      bombAnim.setVisible(true);
      this.cameras.main.shake(300);
      bombDisplay.remove(bombDisplay.getLast(true), true);
      this.time.delayedCall(50, function() {
        bombAnim.destroy();
        this.bombing = false;
      }, [], this);
    } else {
      console.log("no more bombs available");
    }
  }


  fireGreen() {
    if (canShoot) {
      if (!grnActive) {
        if(shotLevel == 2) {
          grnActive = true;
          beam1 = new Beam ({scene: this, x: cannon1.x, y: cannon1.y - 10 });
          this.beams.add(beam1);
          beam1.setOrigin(0, 1);
          beam1.play("greenAnim");
        }
        if (shotLevel == 3) {
          grnActive = true;
          beam1 = new Beam ({scene: this, x: cannon1.x, y: cannon1.y - 10 });
          this.beams.add(beam1);
          beam1.setOrigin(0, 1);
          beam1.play("greenAnim");
          beam2 = new Beam ({scene: this, x: cannon2.x, y: cannon2.y - 10 });
          this.beams.add(beam2);
          beam2.setOrigin(0, 1);
          beam2.play("greenAnim");
        }
      } else {
        beam1.setPosition(cannon1.x - 4, cannon1.y - 21);
        beam1.setActive(true, true);
        if (shotLevel == 3) {
          beam2.setPosition(cannon2.x - 4, cannon2.y - 21);
          beam2.setActive(true,true);
        }
      }
      console.log("lazer firing");
    }
  }

  addLeadingZeros(num, Lngth) {
    return String(num).padStart(Lngth, '0');
  }

  update() {
    //check if the player is using pointer controls
    var pointer = this.input.activePointer;
    if (pointer.isDown) {
      if (canShoot === true) {
        this.handlePointer();
        this.shootLaser();
        this.fireGreen();
      }// Attach the cannon to the player if using Pointer
      if (shotLevel >= 2) {
        cannon1.setPosition(Player.x - 35, Player.y - 5);
      }

    } else {
    //if not, use keyboard controls.
    var ZKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    var CKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    var enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    if (ZKey.isDown) {
      this.shootLaser();
      this.fireGreen();
    }
    if (Phaser.Input.Keyboard.JustDown(CKey)) {
      this.activateBomb();
    }
    if (Phaser.Input.Keyboard.JustDown(enterKey)) {
      this.pauseGame();
    }

      //horizontal controls:
     if (cursors.left.isDown) {
        Player.setVelocityX(-playerMoveSpeed);
      } else if (cursors.right.isDown) {
        Player.setVelocityX(playerMoveSpeed);
      } else {
        Player.setVelocityX(0);
      }
      // vertical controls:
      if (cursors.up.isDown) {
        Player.setVelocityY(-playerMoveSpeed);
      } else if (cursors.down.isDown) {
        Player.setVelocityY(playerMoveSpeed);
      } else {
        Player.setVelocityY(0);
      }
    }
    //Move the lazer cannons with the player if using Keys
    if (shotLevel >= 2) {
      cannon1.setPosition(Player.x - 35, Player.y - 5);

    }
    if (shotLevel == 3) {
      cannon2.setPosition(Player.x + 35, Player.y - 5);
    }
    //Stop the laser if the player is not firing
    if (!pointer.isDown && !ZKey.isDown) {
      if (grnActive == true) {
        beam1.disableBody(true,true);
        if (shotLevel >= 3) { beam2.disableBody(true,true); }
        grnActive = false;
      }
    }

    if (fightingBoss) {
      this.bossHealthDisplay.setText("boss health: " + bossEnemy.Health);
    } else {
      stageBG.tilePositionY -= 2;
    }
    //this.cameras.main.setPosition(this.cameras.main.x, this.cameras.main.y + 1);

    //Update the score, bomb display etc
    scoreText.setText(this.addLeadingZeros(score, 9));
    multiplierText.setText("x" + this.addLeadingZeros(multiplier, 3));
    //timer for the score multiplier
    if (multiplier > 1 && !multiTimerActive) {
      multiplier = multiplier - 1;
    }
    if (score >= highScore) {
      highScore = score;
    }
  }
}

//Level three
//level three once again repeats alot of functions #yolo
class PlayGame3 extends Phaser.Scene {
  constructor() {
    super("PlayGame3");
  }

  prelaod() {}

  passStage() {
    var nm;
    if (noMiss) {
      nm = 100000;
    } else if (!noMiss) {
       nm = 0;
    }
    let add;
    let stageComplete = this.add.sprite(0,0,"stageComplete");
    stageComplete.setDepth(0);
    stageComplete.setOrigin(0,0);
    let killAddup = this.add.text(
      this.scale.width * 0.20, this.scale.height * 0.25,
      ("Kills: " + kills + " x1000 = " + kills * 1000),
      { fontFamily: 'pxlFont', fontSize: '32px', fill: '#fff', stroke: '#000', strokeThickness: 1 }
    );
    let coinAddup = this.add.text(
      this.scale.width * 0.20, this.scale.height * 0.25 + 35,
      ("Coins: " + coinsCollected + " x1000 = " + coinsCollected * 1000),
      { fontFamily: 'pxlFont', fontSize: '32px', fill: '#fff', stroke: '#000', strokeThickness: 1 }
    );
    let noMissAddUp = this.add.text(
      this.scale.width * 0.20, this.scale.height * 0.25 + 70,
      ("No miss: " + nm),
      { fontFamily: 'pxlFont', fontSize: '32px', fill: '#fff', stroke: '#000', strokeThickness: 1 }
    );
    add = coinsCollected * 1000 + kills * 1000 + nm;
    score = score + add;
    this.time.delayedCall(4000, function() { this.cameras.main.fadeOut(1000,0,0,0); },[],this);
    this.time.delayedCall(5000, function() {
      this.bossMusic.stop();
      this.scene.start("TitleScreen"); }, [], this);
  }

  pauseGame( ) {
    globalPause();
    if(!gameOver) {
      pauseSound.play(sfxConfig);
      this.scene.pause("PlayGame3");
      this.scene.launch("PauseButton");
      console.log("Game paused.");
      pauseBtn.setActive(false);
      pauseBtn.setVisible(false);
      pauseText.setActive(true);
      pauseText.setVisible(true);
    } else if (gameOver) {
      this.continueGame();
    }
  }

  scorePoints(points, x, y){
    var total;
    total = points * multiplier;
    score += total;
    let popUp = this.add.text(x, y, "+" + total, { fontFamily: 'pxlFont', fontSize: '16px', fill: '#fff', stroke: '#000', strokeThickness: 1 });
    this.time.delayedCall(1000, function() { popUp.destroy(); }, [], this);
  }

  collectCoin(Player, coin) {
    coin.disableBody(true, true);
    coinsCollected = coinsCollected + 1;
    this.scorePoints(10, coin.x, coin.y);
    coinPickupSound.play(sfxConfig);
  }

  collectMiniCoin(Player, coin) {
    coin.disableBody(true, true);
    let popUp = this.add.text(coin.x, coin.y - 10, "MULTI + 1", { fontFamily: 'pxlFont', fontSize: '12px', fill: '#A7DBD8', stroke: '#000', strokeThickness: 1 });
    this.scorePoints(5, coin.x, coin.y + 15);
    multiplier += 1;
    this.time.delayedCall(1000, function () { popUp.destroy(); }, [], this);
    this.addTimer();
    coinPickupSound.play(sfxConfig);
  }

  powerUpPlayer(Player, powerUp) {
    powerUp.disableBody(true, true);
    laserPickupSound.play(sfxConfig);
    if (shotLevel == 1) {
      console.log("power up collected, power level: " + shotLevel);
      cannon1 = new Cannon({ scene: this, x: (Player.x - 15), y: (Player.y + 15)});
      shotLevel += 1;
      this.scorePoints(100, Player.x, Player.y + 10);
    } else if (shotLevel == 2) {
      console.log("power up collected, power level: " + shotLevel);
      cannon2 = new Cannon({scene: this, x: (Player.x + 15), y: (Player.y + 15)});
      shotLevel += 1;
      this.scorePoints(1000, Player.x, Player.y + 5);
      if (grnActive) {
          beam2 = new Beam ({scene: this, x: cannon2.x, y: cannon2.y - 10 });
          this.beams.add(beam2);
          beam2.setOrigin(0, 1);
          beam2.play("greenAnim");
      }
    }
  }

  explode(x,y,n) {
    for (let i = 0; i < n; i++) {
      this.time.delayedCall(i * 200, function () {
        this.add.sprite(Phaser.Math.Between(x- 10, x + 10),Phaser.Math.Between(y - 10, y + 10), 'expl1').play('explosion');
        explosionSound.play(sfxConfig);
      }, [], this);
    }
  }

  getBombed(enemy, bomb) {
    enemy.Health = enemy.Health - 100;
    this.damageEnemy(enemy, bomb);
  }

  damageEnemy(enemy, laserGroup) {
    if (this.cameras.main.worldView.contains(enemy.x, enemy.y) && enemy.canHit == true) {
      enemy.canHit = false;
      enemy.setTintFill(0xfffffff);
      enemy.Health = enemy.Health - (10 + shotLevel + (shotLevel * 3));
      console.log("enemy hit, health:" + enemy.Health);
      this.time.delayedCall(10, function() { enemy.clearTint(); }, [], this);
      this.time.delayedCall(100, function() { enemy.canHit = true; }, [], this);
      if (enemy.Health <= 0) {
      if (!enemy.isBoss) {
        kills = kills + 1;
        this.scorePoints(50, enemy.x, enemy.y + 5);
        this.explode(enemy.x, enemy.y, 2);
        let i = Phaser.Math.Between(0, 10);
        if (i == 5) {
          this.spawnPowerUp(enemy.x, enemy.y);
        } else if ( i > 5) {
          this.spawnCoin(enemy.x, enemy.y);
        } else if ( i < 5) {
          this.spawnMiniCoin(enemy.x, enemy.y);
        }
        enemy.setActive(false);
        enemy.setVisible(false);
        enemy.destroy();
      } else if (enemy.isBoss) {
        console.log ("boss destroyed");
        fightingBoss = false;
        kills = kills + 1;
        for (let i = 0; i < 12; i++) {
          this.time.delayedCall(i * 200, function () {
            explosionSound.play(sfxConfig);
            this.add.sprite(Phaser.Math.Between(enemy.x - 50, enemy.x + 50),Phaser.Math.Between(enemy.y + 60, enemy.y - 60), 'expl1').play('explosion');
          }, [], this);
          this.spawnCoin(Phaser.Math.Between(enemy.x - 100, enemy.x + 100),Phaser.Math.Between(enemy.y + 200, enemy.y - 50));
          }
          enemy.destroy();
          this.time.delayedCall(6000, this.passStage, [], this);
        }
      }
    }
  }

  killRedBullet(bullet, laserGroup) {
    console.log("red bullet hit");
    bullet.disableBody(true,true);
    laserGroup.setActive(false);
    laserGroup.setVisible(false);
    //this.spawnMiniCoin(bullet.x, bullet.y);
    this.scorePoints(1, bullet.x, bullet.y);
  }

  respawnPlayer() {
    sdk.showBanner();
    Player.setActive(true);
    Player.setVisible(true);
    Player.setAlpha(0.5);
    playerCanCollide = false;
    this.time.delayedCall(2500, function () {
      Player.body.enable = true;
      playerCanCollide = true;
      Player.setAlpha(1);
    }, [], this);
    canShoot = true;
    bombCount = 3;
  }

  continueGame() {
    pauseSound.play(sfxConfig);
    this.physics.world.timeScale = 1;
    this.respawnPlayer();
    lives = 3;
    score = 0;
    bombCount = 3;
    this.addLives();
    this.addBombs();
    gameOver = false;
    continueButton.setActive(false);
    continueButton.setVisible(false);
    titleButton.setActive(false);
    titleButton.setVisible(false);
    gameOverText.setVisible(false);
    pauseBtn.setActive(true);
    pauseBtn.setVisible(true);
  }

  toTitle() {
      //pauseSound.play();
      this.scene.stop("PlayGame");
      this.scene.start("BootGame");
  }

  addLives() {
    livesDisplay = this.add.group ({
      key: 'playerIcon',
      repeat: 1,
      setXY: { x: 16, y: 616, stepX: 32 }
    });
  }

  addBombs() {
    bombDisplay = this.add.group ({
      key: 'bombIcon',
      repeat: 2,
      setXY: { x: 390, y: 616, stepX: 32 }
    });
  }

  playerHit(Player, enemy) {
    if (!godMode) {
    if (playerCanCollide) {
      console.log("Player hit");
      noMiss = false;
      this.damageEnemy(enemy, this.laserGroup);
      canShoot = false;
      playerCanCollide = false;
      this.explode(Player.x, Player.y, 4);
      Player.setVisible(false);
      Player.setActive(false);
      Player.body.enable = false;
      lives = (lives - 1);
      livesDisplay.remove(livesDisplay.getLast(true), true);
      if (lives === 0) {
        this.initiateGameOver();
      } else {
        this.time.delayedCall(2000, this.respawnPlayer, [], this);
      }
    }
  }
  }

  addTimer() {
    multiTimerActive = true;
    this.time.addEvent({
      delay : 30000,
      callback: function () {
        multiTimerActive = false;
      },
      loop: false
    });
  }

  startBossBattle() {
    let warning = this.add.sprite(0,0, "warning");
    warning.setOrigin(0,0);
    warning.setAlpha(0);
    bossAlertSound.play({
      mute:false,
      volume: 0.5,
      loop: true,
      delay: 0
    });
    let wrntwn = this.tweens.add({
      targets: warning,
      alphaTopLeft: { value: 1, duration: 500, ease: 'Power1' },
      alphaBottomRight: { value: 1, duration: 500, ease: 'Power1' },
      alphaBottomLeft: { value: 1, duration: 500, ease: 'Power1' },
      yoyo: true,
      loop: -1
    });
    this.tweens.add ({
      targets: this.stageMusic,
      volume: 0,
      duration: 2000
    });
    this.time.delayedCall(4000, function () {
      warning.destroy();
      bossAlertSound.stop();
      this.bossMusic.play(musicConfig);
      this.addBoss(240,10);
    }, [], this);
  }

  create() {
    this.cameras.main.fadeIn(1000,0,0,0); // fade in effect
    //adding the background
    stageBG = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, "titleBackground");
    stageBG.setOrigin(0,0);
    this.bossMusic = this.sound.add("bossBattleSong");
    //Adding the player and its animations
    this.anims.create({
      key: "animPlayer",
      frames: this.anims.generateFrameNumbers("animatedPlayer", {start: 0, end : 3 }),
      frameRate: 10,
      repeat: -1
    });
    Player = this.physics.add.sprite(240, 400, "mech");
    Player.play("animPlayer");
    Player.setBounce(1);
    Player.setGravity(0);
    Player.setCollideWorldBounds(true);
    Player.setSize(1,1);
    Player.setOffset(23,23);

    if (shotLevel == 2) {
      cannon1 = new Cannon({ scene: this, x: (Player.x - 15), y: (Player.y + 15)});
    } else if (shotLevel == 3) {
      cannon1 = new Cannon({ scene: this, x: (Player.x - 15), y: (Player.y + 15)});
      cannon2 = new Cannon({scene: this, x: (Player.x + 15), y: (Player.y + 15)});
    }

    cursors = this.input.keyboard.createCursorKeys();
    var spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    //Better way of firing bullets using Phasers arcade physics group
    this.laserGroup = new LaserGroup(this);
    this.beams = new BeamGroup(this);
    //hidden information:
    noMiss = true;
    kills = 0;
    coinsCollected = 0;
    //Hud elments
    scoreText = this.add.text(5, 5, "000000000", { fontFamily: 'pxlFont', fontSize: '32px', fill: '#fff', stroke: '#000', strokeThickness: 3 });
    scoreText.setScrollFactor(0);
    multiplierText = this.add.text(5, 25, "x001", { fontFamily: 'pxlFont', fontSize: '32px', fill: '#A7DBD8', stroke: '#000', strokeThickness: 3 });
    multiplierText.setScrollFactor(0);
    this.addBombs();

    //enemies and their projectiles
    blueBullets = new BlueBullets(this);
    redBullets = new RedBullets(this);

    this.addLives();

    this.coins = new CoinGroup(this);
    this.spawnCoin(12, 450);
    this.powerUps = new PowerUps(this);
    this.miniCoins = new MiniCoinGroup(this);

    this.anims.create({
      key: "bossTwoA",
      frames: this.anims.generateFrameNumbers("bossTwoAnim", { start: 0, end: 4 }),
      frameRate: 5,
      repeat: -1
    });

    //adding enemies
    this.nmeGroup = new EnemyGroup(this);
    this.addAsteroid(200,200, "asteroid-04", 87, 8);
    this.addAsteroid(100,123,"asteroid-01", 87, 3);
    this.addAsteroid(341,300,"asteroid-02", 43, 0);

    this.time.delayedCall(6000, function() { this.startBossBattle(); }, [], this);
    //Detecting collisions between the bullets and the enemies
    this.physics.add.overlap(this.nmeGroup, this.laserGroup, this.damageEnemy, null, this);
    this.physics.add.collider(Player, this.nmeGroup, this.playerHit, null, this);
    this.physics.add.collider(Player, blueBullets, this.playerHit, null, this);
    this.physics.add.collider(Player, redBullets, this.playerHit, null, this);
    this.physics.add.overlap(redBullets, this.laserGroup, this.killRedBullet, null, this);
    this.physics.add.overlap(this.nmeGroup, this.beams, this.damageEnemy, null, this);


    this.anims.create({
      key: 'explosion',
      frames: [
        { key: "expl1" },
        { key: "expl2" },
        { key: "expl3" },
        { key: "expl4" },
        { key: "expl5" },
        { key: "expl6" },
        { key: "expl7" },
        { key: "expl8" },
        { key: "expl9" },
        { key: "expl10" },
        { key: "expl11", duration: 90 },
      ],
      frameRate: 15,
      repeat: 0
    });

    //Coin animation
    this.anims.create({
      key: "coinSh",
      frames: this.anims.generateFrameNumbers("animatedCoin", { start: 0, end: 5 }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "miniCoin",
      frames:this.anims.generateFrameNumbers("miniCoin", { start: 0, end: 5 }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "greenAnim",
      frames:this.anims.generateFrameNumbers("animatedBeam", {start: 0, end: 2}),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "shinyP",
      frames:this.anims.generateFrameNumbers("animPC", {start: 0, end: 3}),
      frameRate:20,
      repeat: -1
    });

    this.anims.create({
      key: "grnVoid",
      frames: this.anims.generateFrameNumbers("greenVoid", {start: 0, end: 3}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "lrgBlueAn",
      frames: this.anims.generateFrameNumbers("largeBlueAnim", {start: 0, end: 3}),
      frameRate: 20,
      repeat: -1
    });
    // Colllecting coins etc
    this.physics.add.overlap(Player, this.coins, this.collectCoin, null, this); //the collision between the player and the coin
    this.physics.add.overlap(Player, this.miniCoins, this.collectMiniCoin, null, this);
    this.physics.add.overlap(Player, this.powerUps, this.powerUpPlayer, null, this);

    //manual firing
    this.input.keyboard.on('keydown-X', this.shootLaser, this);

    //firing mah laser
    var pointer = this.input.activePointer;
    this.input.on('pointerdown', (pointer) => {
      this.shootLaser();
    })

    //the game over screen:
    //the Continue button:
    gameOverText = this.add.sprite(0,0, "gameOverScreen");
    gameOverText.setDepth(1);
    gameOverText.setOrigin(0,0);
    gameOverText.setActive(false);
    gameOverText.setVisible(false);
    continueButton = this.add.sprite(this.scale.width * 0.5, this.scale.height * 0.5, "continueButton");
    continueButton.setDepth(1);
    continueButton.setInteractive();
    continueButton.on('pointerdown', () => { this.continueGame();});
    continueButton.setActive(false);
    continueButton.setVisible(false);
    titleButton = this.add.sprite(this.scale.width * 0.5, this.scale.height * 0.7, "titleButton");
    titleButton.setInteractive();
    titleButton.on('pointerdown', () => { this.toTitle(); });
    titleButton.setActive(false);
    titleButton.setVisible(false);
    //the pause button:
    pauseBtn = this.add.sprite(440, 30, 'pauseButton');
    pauseBtn.setDepth(1);
    pauseBtn.setInteractive();
    pauseBtn.on('pointerdown', () => { this.pauseGame(); });
    //for the pause Screen
    pauseText = this.add.sprite(0,0, "pauseText");
    pauseText.setDepth(1);
    pauseText.setOrigin(0,0);
    pauseText.setActive(false);
    pauseText.setVisible(false);

    //shot power ups, bombs
    this.spawnPowerUp(400, 300);

    //Sound
    bulletSound = this.sound.add("shootingSound");
    laserPickupSound = this.sound.add("laserPickupSound");
    coinPickupSound = this.sound.add("coinPickupSound");
    explosionSound = this.sound.add("explosionSound");
    pauseSound = this.sound.add("pauseSound");
    bossAlertSound = this.sound.add("bossAlert");

  }
  handlePointer() {
    this.input.on('pointermove', (pointer) => {
      Player.setPosition(pointer.x, pointer.y); //You MUST use setPosition, player.x will NOT work in this context.
    });
  }

  initiateGameOver() {
    lives = -1;
    score = 0;
    gameOver = true;
    for (let i = 0; i < 3; i++) {
      this.spawnCoin(Player.x, Player.y);
      this.spawnPowerUp(Player.x, Player.y);
    }
    this.physics.world.timeScale = 8;
    console.log("game over, idiot");
    gameOverText.setActive(true);
    gameOverText.setVisible(true);
    continueButton.setActive(true);
    continueButton.setVisible(true);
    pauseBtn.setActive(false);
    pauseBtn.setVisible(false);
    //titleButton.setActive(true);
    //titleButton.setVisible(true);
  }

  shootLaser() {
    if (canShoot) {
      var lzrOffset = Math.floor(Math.random() * (3 - (-3) + 1) + -3);
      this.laserGroup.fireLaser((Player.x + lzrOffset), Player.y - 35);
      bulletSound.play(sfxConfig);
    }
  }

  moveEnemy(enemy, x,y) {
    if (this.cameras.main.worldView.contains(enemy.x, enemy.y)) {
      let tween = this.tweens.add({
        targets: enemy,
        x: x,
        y: y,
        duration: 4000,
        ease: 'Back',
        easeParams: [ 1.5 ],
        delay: 0
      });
      enemy.inPos = true;
    }
  }

  addBugEnemy(x,y, type, health, weapon, destX, destY, fdelay, stringDir, strLength) {
    var bugEnemy = new Enemy2({scene:this, x:x, y:y, type: type, health: health, weapon: weapon, fdelay: fdelay, destX: destX, destY: destY, stringDir: stringDir, strLength: strLength }).setScrollFactor(0,0);
    this.nmeGroup.add(bugEnemy);
    bugEnemy.setVelocity(0,87);
    //bugEnemy.setCollideWorldBounds(true);
    //bugEnemy.setGravity(0,1);
    //this.moveEnemy(bugEnemy, destX, destY);
  }

  addMiniBug(x,y, speed, ofstX) {
    var smallEnemy = new Enemy1({scene: this, x: x, y: y,key: "miniBug", speed: speed, ofstX: ofstX});
    this.nmeGroup.add(smallEnemy);
    smallEnemy.setVelocity(0,87);
  }

  addAsteroid(x, y, no, speed, ofstX) {
    var asteroid = new Enemy1({scene: this, x: x, y: y, key:no, speed: speed, ofstX: ofstX});
    this.nmeGroup.add(asteroid);
    asteroid.setVelocity(ofstX, speed);
  }

  addBoss(x,y) {
    bossEnemy = new BossThree({ scene: this, x:x, y:y, key: "bossThree" });
    this.moveEnemy(bossEnemy,240,180);
    fightingBoss = true;
    this.nmeGroup.add(bossEnemy);
    this.bossHealthDisplay = this.add.text(10, 100, "boss health: " + bossEnemy.Health, { fontSize: '16px' });
    for (let i = 0; i < 1000; i++) {
      if (i < 10) {
        this.time.delayedCall(2000 * i, function () {
          this.addBugEnemy(bossEnemy.x, bossEnemy.y + 113, "biomech", 300, "boss1patt2", Phaser.Math.Between(bossEnemy.x + 200, bossEnemy.x - 200), bossEnemy.y - 50, 1000);
        }, [], this);
        this.time.delayedCall(1000 * i, function() {
          if (bossEnemy.Health > 0) {
            this.arrowString(5, 0, bossEnemy.x - 113, bossEnemy.y + 92);
            this.arrowString(5, 0, bossEnemy.x + 113, bossEnemy.y + 92);
          }
        }, [], this);
      } else if (i > 10 && i < 30) {
        this.time.delayedCall(1000 * i + 200 * i , function () {
          if (bossEnemy.Health > 0) {
            this.directionalShotBlue(bossEnemy.x - 113, Phaser.Math.Between(bossEnemy.y + 87, bossEnemy.y + 97), 16, 50);//16 7 -14, -18 4 2 13 -25
            this.directionalShotBlue(bossEnemy.x - 113, Phaser.Math.Between(bossEnemy.y + 87, bossEnemy.y + 97), 7, 50);
            this.directionalShotBlue(bossEnemy.x - 113, Phaser.Math.Between(bossEnemy.y + 87, bossEnemy.y + 97), -18, 50);
            this.directionalShotRed(bossEnemy.x - 113, Phaser.Math.Between(bossEnemy.y + 87, bossEnemy.y + 97), 4, 50);
            this.directionalShotBlue(bossEnemy.x - 113, Phaser.Math.Between(bossEnemy.y + 87, bossEnemy.y + 97), 2, 50);
            this.directionalShotBlue(bossEnemy.x - 113, Phaser.Math.Between(bossEnemy.y + 87, bossEnemy.y + 97), 13, 50);
            this.directionalShotRed(bossEnemy.x - 113, Phaser.Math.Between(bossEnemy.y + 87, bossEnemy.y + 97), -25, 50);
            this.directionalShotRed(bossEnemy.x + 113, Phaser.Math.Between(bossEnemy.y + 87, bossEnemy.y + 97), 5, 50);//16 7 -14, -18 4 2 13 -25
            this.directionalShotBlue(bossEnemy.x + 113, Phaser.Math.Between(bossEnemy.y + 87, bossEnemy.y + 97), -18, 50);
            this.directionalShotRed(bossEnemy.x + 113, Phaser.Math.Between(bossEnemy.y + 87, bossEnemy.y + 97), -6, 50);
            this.directionalShotBlue(bossEnemy.x + 113, Phaser.Math.Between(bossEnemy.y + 87, bossEnemy.y + 97), -13, 50);
            this.directionalShotRed(bossEnemy.x + 113, Phaser.Math.Between(bossEnemy.y + 87, bossEnemy.y + 97), 24, 50);
            this.directionalShotBlue(bossEnemy.x + 113, Phaser.Math.Between(bossEnemy.y + 87, bossEnemy.y + 97), -29, 50);
            this.directionalShotBlue(bossEnemy.x + 113, Phaser.Math.Between(bossEnemy.y + 87, bossEnemy.y + 97), -7, 50);
            this.addMiniBug(Phaser.Math.Between(bossEnemy.x - 10, bossEnemy.x + 10), bossEnemy.y + 113, 300, Phaser.Math.Between(-50, 50));
            this.aimedShot(bossEnemy.x, bossEnemy.y);
          }
        },[],this);
      } else if (i > 30 && i < 40) {
        this.time.delayedCall(1000 * i, function() {
          if (bossEnemy.Health > 0) {
            this.arrowString(3, i * 2, bossEnemy.x - 113, bossEnemy.y + 92);
            this.arrowString(3, i * -2, bossEnemy.x + 113, bossEnemy.y + 92);
            this.octoShot(Phaser.Math.Between(bossEnemy.x - 20,bossEnemy.x + 20), bossEnemy.y + 113);
          }
        }, [], this);
      } else if (i > 40 && i < 100) {
        this.time.delayedCall(1000 * i, function() {
          if (bossEnemy.Health > 0) {
            this.addBugEnemy(bossEnemy.x, bossEnemy.y + 113, "baxter", 300, "blue", Phaser.Math.Between(bossEnemy.x + 200, bossEnemy.x - 200), bossEnemy.y - 50, 500);
            this.bulletString(8, Phaser.Math.Between(-40, 40), bossEnemy.x - 113, bossEnemy.y + 92);
            this.bulletString(8, Phaser.Math.Between(-40, 40), bossEnemy.x + 113, bossEnemy.y + 92);
          }
        }, [], this);
      } else if (i > 100) {
        this.time.delayedCall(1000 * i, function() {
          if (bossEnemy.Health > 0) {
            this.addBugEnemy(bossEnemy.x, bossEnemy.y + 113, "fish", 300, "largeBlue", Phaser.Math.Between(bossEnemy.x + 200, bossEnemy.x - 200), bossEnemy.y - 50, 2000);
            this.aimedShot(bossEnemy.x + 113, bossEnemy.y + 92);
            this.aimedShotRed(bossEnemy.x - 113, bossEnemy.y + 92);
          }
        }, [], this);
      }
    }
  }

  blueShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      console.log("blue bullet fired");
      var bBullet = new EnemyBulletBlue({scene: this, x:x, y:y});
      blueBullets.add(bBullet);
      bBullet.setVelocity(0,100);
    }
  }

  redShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      console.log("red bullet fired");
      var rBullet = new EnemyBulletRed({scene: this, x:x, y:y});
      redBullets.add(rBullet);
      rBullet.setVelocity(0,100);
    }
  }

  aimedShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      var target = new Phaser.Math.Vector2(Player.x, Player.y);
      var hBullet = new EnemyBulletBlue({scene: this, x:x, y:y});
      blueBullets.add(hBullet);
      this.physics.moveToObject(hBullet, target, 100);
    }
  }

  aimedShotRed(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      var target = new Phaser.Math.Vector2(Player.x, Player.y);
      var hBullet = new EnemyBulletRed({scene: this, x:x, y:y});
      redBullets.add(hBullet);
      this.physics.moveToObject(hBullet, target, 100);
    }
  }

  directionalShotBlue(x, y, ofstX, dirY) {
    if (this.cameras.main.worldView.contains(x, y)) {
      if (dirY == null) {
        this.dirY = 100;
      }
      var bBullet = new EnemyBulletBlue({scene: this, x:x, y:y});
      blueBullets.add(bBullet);
      bBullet.setVelocity(ofstX, dirY);
    }
  }

  directionalShotRed(x, y, ofstX, dirY) {
    if (this.cameras.main.worldView.contains(x, y)) {
      if (dirY == null) {
        this.dirY = 100;
      }
      var bBullet = new EnemyBulletRed({scene: this, x:x, y:y});
      redBullets.add(bBullet);
      bBullet.setVelocity(ofstX, dirY);
    }
  }
  //this function is NOT ready to use yet, configure a directional shot first
  bulletString(length, dirX, x, y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      for (var i = 0; i < length; i++) {
        var bBullet = new EnemyBulletBlue({scene: this, x: x + i * (dirX / 10), y: (y + i * 10)});
        blueBullets.add(bBullet);
        bBullet.setVelocity(dirX, 100);
      }
    }
  }

  arrowString(length, dirX, x, y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      for (var i = 0; i < length; i++) {
        var grnArrow = new EnemyBulletOther({scene: this, x:x, y:y, key: "greenArrow"});
        blueBullets.add(grnArrow);
        grnArrow.setVelocity(dirX, 100);
      }
    }
  }

  quadShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      var b1 = new EnemyBulletBlue({scene: this, x: x, y: y + 5});
      blueBullets.add(b1);
      b1.setVelocity(0, 100);
      var b2 = new EnemyBulletBlue({scene: this, x: x + 5, y: y});
      blueBullets.add(b2);
      b2.setVelocity(100, 0);
      var b3 = new EnemyBulletBlue({scene: this, x: x - 5, y: y});
      blueBullets.add(b3);
      b3.setVelocity(-100, 0);
      var b4 = new EnemyBulletBlue({scene: this, x: x, y: y - 5});
      blueBullets.add(b4);
      b4.setVelocity(0,-100);
    }
  }

  quadShot2(x,y) {
    if (this.cameras.main.worldView.contains(x,y)) {
      var b5 = new EnemyBulletBlue({scene: this, x: x + 5, y: y + 5});
      blueBullets.add(b5);
      b5.setVelocity(50, 100);
      var b6 = new EnemyBulletBlue({scene: this, x: x + 5, y: y - 5});
      blueBullets.add(b6);
      b6.setVelocity(50, -100);
      var b7 = new EnemyBulletBlue({scene: this, x: x - 5, y: y - 5});
      blueBullets.add(b7);
      b7.setVelocity(-50, 100);
      var b8 = new EnemyBulletBlue({scene: this, x: x - 5, y: y + 5});
      blueBullets.add(b8);
      b8.setVelocity(-50, -100);
    }
  }

  octoShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      this.quadShot(x,y);
      var b5 = new EnemyBulletBlue({scene: this, x: x + 5, y: y + 5});
      blueBullets.add(b5);
      b5.setVelocity(50, 100);
      var b6 = new EnemyBulletBlue({scene: this, x: x + 5, y: y - 5});
      blueBullets.add(b6);
      b6.setVelocity(50, -100);
      var b7 = new EnemyBulletBlue({scene: this, x: x - 5, y: y - 5});
      blueBullets.add(b7);
      b7.setVelocity(-50, 100);
      var b8 = new EnemyBulletBlue({scene: this, x: x - 5, y: y + 5});
      blueBullets.add(b8);
      b8.setVelocity(-50, -100);
    }
  }

  tripleShot(x,y) {
    if (this.cameras.main.worldView.contains(x, y)) {
      var b1 = new EnemyBulletRed({scene: this, x: x, y: y});
      redBullets.add(b1);
      b1.setVelocity(0, 100);
      var b2 = new EnemyBulletBlue({scene: this, x: x + 5, y: y});
      blueBullets.add(b2);
      b2.setVelocity(15, 100);
      var b3 = new EnemyBulletBlue({scene: this, x: x - 5, y: y});
      blueBullets.add(b3);
      b3.setVelocity(-15, 100);
    }
  }

  spinShot() {
  /*  let spinner = function () {
      for (let i = 0; i < 32; i++) {
      this.time.delayedCall(i * 10, function )
      }
    } */
  }

  clusterA(x,y) {
    this.directionalShotBlue(this.x, this.y, 12);
    this.directionalShotBlue(this.x, this.y, 18);
    this.directionalShotBlue(this.x, this.y, 15);
    this.directionalShotBlue(this.x, this.y, 5);
    this.directionalShotBlue(this.x, this.y, 0);
    this.directionalShotBlue(this.x, this.y, -2);
    this.directionalShotBlue(this.x, this.y, -1);
  }
  clusterB(x,y) {
    this.directionalShotBlue(this.x, this.y, 0);
    this.directionalShotBlue(this.x, this.y, -2);
    this.directionalShotBlue(this.x, this.y,-15);
    this.directionalShotBlue(this.x, this.y, -2);
    this.directionalShotBlue(this.x, this.y, 20);
    this.directionalShotBlue(this.x, this.y, 19);
    this.directionalShotBlue(this.x, this.y, -13);
  }

  largeBlueShot(x,y,dir){
    if (this.cameras.main.worldView.contains(x, y)) {
      var lrgblu = new EnemyBulletOther({scene: this, x:x, y:y, key:"largeBlue"});
      blueBullets.add(lrgblu);
      lrgblu.play("lrgBlueAn");
      lrgblu.setSize(16,16);
      lrgblu.setVelocity(0,-55);
      lrgblu.setGravity(Phaser.Math.Between(-5,5), 55);
    }
  }

  spawnCoin(x,y) {
    var ofstX = Math.floor(Math.random() * (10 - (-10) +1) -10);
    var ofstY = Math.floor(Math.random() * (10 - (-10) +1) -10);
    var newCoin = new Coin({scene: this, x: (x + ofstX), y: (y + ofstY)});
    this.coins.add(newCoin);
    newCoin.setGravity(0, 10);
    newCoin.setBounce(10);
    newCoin.setVelocity(ofstX, (ofstY * -2));
    newCoin.play("coinSh");
  }

  spawnMiniCoin(x,y) {
    var newMC = new MiniCoin({scene: this, x: x, y: y});
    this.miniCoins.add(newMC);
    newMC.setGravity(0, 140);
    newMC.setBounce(10);
    newMC.setVelocity(0, -140);
    newMC.play("miniCoin");
  }

  spawnPowerUp(x,y) {
    var newPU = new PowerUp({scene: this, x:x, y:y});
    this.powerUps.add(newPU);
    newPU.setGravity(0,90);
    newPU.setBounce(10);
    newPU.setVelocity(0, -140);
    newPU.play("shinyP");
  }

  activateBomb() {
    if (bombCount > 0 && canShoot) {
      bombCount = (bombCount - 1);
      this.bombing = true;
      console.log("Bomb activated");
      bombAnim = this.physics.add.sprite(0,0, "bombtest").setOrigin(0,0);
      bombAnim.body.enable = true;
      bombAnim.setActive(true);
      bombAnim.setVisible(true);
      this.cameras.main.shake(300);
      bombDisplay.remove(bombDisplay.getLast(true), true);
      this.time.delayedCall(50, function() {
        bombAnim.destroy();
        this.bombing = false;
      }, [], this);
    } else {
      console.log("no more bombs available");
    }
  }


  fireGreen() {
    if (canShoot) {
      if (!grnActive) {
        if(shotLevel == 2) {
          grnActive = true;
          beam1 = new Beam ({scene: this, x: cannon1.x, y: cannon1.y - 10 });
          this.beams.add(beam1);
          beam1.setOrigin(0, 1);
          beam1.play("greenAnim");
        }
        if (shotLevel == 3) {
          grnActive = true;
          beam1 = new Beam ({scene: this, x: cannon1.x, y: cannon1.y - 10 });
          this.beams.add(beam1);
          beam1.setOrigin(0, 1);
          beam1.play("greenAnim");
          beam2 = new Beam ({scene: this, x: cannon2.x, y: cannon2.y - 10 });
          this.beams.add(beam2);
          beam2.setOrigin(0, 1);
          beam2.play("greenAnim");
        }
      } else {
        beam1.setPosition(cannon1.x - 4, cannon1.y - 21);
        beam1.setActive(true, true);
        if (shotLevel == 3) {
          beam2.setPosition(cannon2.x - 4, cannon2.y - 21);
          beam2.setActive(true,true);
        }
      }
      console.log("lazer firing");
    }
  }

  addLeadingZeros(num, Lngth) {
    return String(num).padStart(Lngth, '0');
  }

  update() {
    //check if the player is using pointer controls
    var pointer = this.input.activePointer;
    if (pointer.isDown) {
      if (canShoot === true) {
        this.handlePointer();
        this.shootLaser();
        this.fireGreen();
      }// Attach the cannon to the player if using Pointer
      if (shotLevel >= 2) {
        cannon1.setPosition(Player.x - 35, Player.y - 5);
      }

    } else {
    //if not, use keyboard controls.
    var ZKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    var CKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    var enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    if (ZKey.isDown) {
      this.shootLaser();
      this.fireGreen();
    }
    if (Phaser.Input.Keyboard.JustDown(CKey)) {
      this.activateBomb();
    }
    if (Phaser.Input.Keyboard.JustDown(enterKey)) {
      this.pauseGame();
    }

      //horizontal controls:
     if (cursors.left.isDown) {
        Player.setVelocityX(-playerMoveSpeed);
      } else if (cursors.right.isDown) {
        Player.setVelocityX(playerMoveSpeed);
      } else {
        Player.setVelocityX(0);
      }
      // vertical controls:
      if (cursors.up.isDown) {
        Player.setVelocityY(-playerMoveSpeed);
      } else if (cursors.down.isDown) {
        Player.setVelocityY(playerMoveSpeed);
      } else {
        Player.setVelocityY(0);
      }
    }
    //Move the lazer cannons with the player if using Keys
    if (shotLevel >= 2) {
      cannon1.setPosition(Player.x - 35, Player.y - 5);

    }
    if (shotLevel == 3) {
      cannon2.setPosition(Player.x + 35, Player.y - 5);
    }
    //Stop the laser if the player is not firing
    if (!pointer.isDown && !ZKey.isDown) {
      if (grnActive == true) {
        beam1.disableBody(true,true);
        if (shotLevel >= 3) { beam2.disableBody(true,true); }
        grnActive = false;
      }
    }

    if (fightingBoss) {
      this.bossHealthDisplay.setText("boss health: " + bossEnemy.Health);
    } else {
      stageBG.tilePositionY -= 2;
    }
    //this.cameras.main.setPosition(this.cameras.main.x, this.cameras.main.y + 1);

    //Update the score, bomb display etc
    scoreText.setText(this.addLeadingZeros(score, 9));
    multiplierText.setText("x" + this.addLeadingZeros(multiplier, 3));
    //timer for the score multiplier
    if (multiplier > 1 && !multiTimerActive) {
      multiplier = multiplier - 1;
    }
    //setting the highScore
    if (score >= highScore) {
      highScore = score;
    }
  }
}
//in07
class bootGame extends Phaser.Scene {
  constructor() {
    super ("BootGame");
  }

  preload() {
    const x = this.scale.width * 0.5;
    const y = this.scale.height * 0.5;
    //preload screen progress bar
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBar.moveTo(x,y);
    progressBox.moveTo(x,y);
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(x * 0.3, y, 320, 50);
    this.load.on('progress', function (value) {
      console.log(value);
      progressBar.clear();
      progressBar.fillStyle(0x69D2E7, 1);
      progressBar.fillRect(x * 0.3 + 10, y + 10, 300 * value, 30);
    });

    this.load.on('fileprogress', function (file) {
      console.log(file.src);
    });

    this.load.on('complete', function() {
      console.log('complete');
      progressBar.destroy();
      progressBox.destroy();
    });

    //backgrounds
    this.load.image("background", "images/background.jpg");
    this.load.image("stageOneBG", "images/brStage1.png");
    this.load.image("stageTwoBG", "images/brStage2.png");
    this.load.image("blastBeatLogo", "images/blastbeatlogo.png");
    //Object sprites
    this.load.image("mech", "Player.png");
    this.load.spritesheet("animatedPlayer", "animations/animatedPlayer.png", { frameWidth: 48, frameHeight: 48 });
    this.load.image("coin", "coin.png");
    this.load.image("mCoin", "miniCoin1.png");
    this.load.image("laser", "bullet.png");
    this.load.image("tomato", "images/tomato.png");
    this.load.image("baxter", "images/baxter.png");
    this.load.image("fish", "images/dikbug.png");
    this.load.image("dikbug2", "images/dikbugLrg.png");
    this.load.image("purpleB", "images/purpleBaxter.png");
    this.load.image("miniBug", "images/mini_1.png");
    this.load.image("grnVoid1", "images/greenVoid.png");
    this.load.spritesheet("greenVoid", "animations/animatedVoid.png", { frameWidth: 32, frameHeight: 55 });
    this.load.image("Dbomber", "images/Dbomber.png");
    this.load.image("Mwing", "images/Mwing.png");
    this.load.image("Vwing", "images/Vwing.png");
    this.load.image("Xwing", "images/Xwing.png");
    this.load.image("biomech", "images/biomech1.png");
    this.load.image("blueBullet", "images/blueBullet.png");
    this.load.image("redBullet", "images/redBullet.png");
    this.load.image("largeBlue", "images/largeBlue.png");
    this.load.spritesheet("largeBlueAnim", "animations/lrgbBlueAnim.png", { frameWidth: 32, frameHeight: 32});
    this.load.image("greenArrow", "images/greenArrow.png");
    this.load.image("asteroid-01", "images/asteroid-01.png");
    this.load.image("asteroid-02", "images/asteroid-02.png");
    this.load.image("asteroid-03", "images/asteroid-03.png");
    this.load.image("asteroid-04", "images/asteroid-04.png");
    this.load.image("asteroid-05", "images/asteroid-05.png");

    this.load.image("lzrCannon", "images/lazerCannon1.png");
    this.load.image("lazerBeam", "images/stillBeam.png");
    this.load.spritesheet("animatedBeam", "animations/animatedLazer.png", { frameWidth: 8, frameHeight: 630 });
    //Bosses
    this.load.image("bossOne", "images/bawss1.png");
    this.load.image("bossTwo", "images/bawss2.png");
    this.load.image("bossThree", "images/bawss3.png");
    this.load.spritesheet("bossOneAnim", "animations/bossOneAnim.png", { frameWidth: 96, frameHeight: 118 });
    this.load.spritesheet("bossTwoAnim", "animations/bossTwoAnim.png", { frameWidth: 240, frameHeight: 240 });
    //UI elements
    this.load.image("playerIcon", "life_v1.png");
    this.load.image("bombIcon", "bomb_v3.png");
    this.load.image("pauseButton", "images/pause.png");
    this.load.image("pauseText", "images/pauseScreen.png");
    this.load.image("playButton", "images/playButton.png");
    //PowerUp:
    this.load.image("pCoin", "images/pCoin.png");
    this.load.spritesheet("animPC", "animations/shiningPcoin.png", { frameWidth: 32, frameHeight: 32 });
    //Explosion animation:
    this.load.image("expl1", "animations/Explosion/explosion-01.png");
    this.load.image("expl2", "animations/Explosion/explosion-02.png");
    this.load.image("expl3", "animations/Explosion/explosion-03.png");
    this.load.image("expl4", "animations/Explosion/explosion-04.png");
    this.load.image("expl5", "animations/Explosion/explosion-05.png");
    this.load.image("expl6", "animations/Explosion/explosion-06.png");
    this.load.image("expl7", "animations/Explosion/explosion-07.png");
    this.load.image("expl8", "animations/Explosion/explosion-08.png");
    this.load.image("expl9", "animations/Explosion/explosion-09.png");
    this.load.image("expl10", "animations/Explosion/explosion-10.png");
    this.load.image("expl11", "animations/Explosion/explosion-11.png");
    //for player  bomb:
    this.load.image("bombtest", "images/bombtest.png");
    //Coin animation:
    this.load.spritesheet("animatedCoin", "animations/animatedcoin.png", { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet("miniCoin", "animations/minicoin.png", { frameWidth: 16, frameHeight: 16 });
    //Title Screen images:
    this.load.image("logoMain", "images/gameSizeLogo.png");
    this.load.image("titleBackground", "images/titleBackground.png");
    this.load.image("gameOverScreen", "images/gameoverScreen.png");
    this.load.image("continueButton", "images/continueButton.png");
    this.load.image("titleButton", "images/titleButton.png");
    this.load.image("stageComplete", "images/stagecomplete.png");
    this.load.image("warning", "images/warning.png");
    //Sound effects
    this.load.audio("shootingSound", "sounds/scifi2_power_gun_single_07.ogg");
    this.load.audio("laserPickupSound", "sounds/scifi2_foley_pickup_03.ogg");
    this.load.audio("coinPickupSound", "sounds/Coin.ogg");
    this.load.audio("explosionSound", "sounds/Explossion.ogg");
    this.load.audio("pauseSound", "sounds/Menu_Click_3.ogg");
    this.load.audio("bossAlert", "sounds/Alert.ogg");
    //Music
    this.load.audio("stageOneSong", "sounds/shooting_01_loop.ogg");
    this.load.audio("stageTwoSong", "sounds/shooting_03_loop.ogg");
    this.load.audio("bossBattleSong", "sounds/boss_battle_01_loop.ogg");
  }

  create() {
    console.log("game is booting...");
    this.scene.start("TitleScreen");
  }
  update() {

  }
}
class TitleScreen extends Phaser.Scene {
  constructor() {
    super ("TitleScreen");
  }

  preload() {

  }

  create() {
    const x = this.scale.width * 0.5;
    const y = this.scale.height * 0.5;
    var background;
    this.background = this.add.tileSprite(0,0, this.scale.width, this.scale.height, "titleBackground");
    //var bbLogo = this.add.sprite(x * 1.75, this.scale.height - 50, "blastBeatLogo");
    this.background.setOrigin(0,0);
    var logo = this.add.sprite(0,0, "logoMain");
    logo.setOrigin(0,0);
    if (highScore == 0) {
      var startText = this.add.text(x * 0.25, y, "[TAP] , [CLICK] or [Press ENTER]", {
          fontSize: '16px',
          color: '#FF75D4E4',
          stroke: '#000',
          strokeThickness: '3',
          fixedWidth: 480,
          align: 'center',
      });
    } else {
      var startText = this.add.text(x * 0.25, y, "Thank you for playing.", {
          fontSize: '16px',
          color: '#FF75D4E4',
          stroke: '#000',
          strokeThickness: '3',
          fixedWidth: 480,
          align: 'center',
      });
      let highScoreText = this.add.text(this.scale.width * 0.25, this.scale.height * 0.75, "High: "+ String(highScore).padStart(9, '0'), { fontFamily: 'pxlFont', fontSize: '32px', fill: '#fff', stroke: '#000', strokeThickness: 3, align: 'center' });
    }

    coinPickupSound = this.sound.add("coinPickupSound");

    console.log("click, tap or press enter to start");

    this.input.keyboard.once('keydown-ENTER', () => {
      coinPickupSound.play();
      if (highScore == 0)  {
        this.cameras.main.fadeOut(1000,0,0,0)
      }
    });
    this.input.once('pointerdown', () => {
      coinPickupSound.play();
      if (highScore == 0) {
        this.cameras.main.fadeOut(1000,0,0,0);
      }
    });
    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
      this.startGame();
    });
    sdk.showBanner();
  }

  startGame() {
    this.time.delayedCall(1000, () => {
      this.scene.start("PlayGame");
    });
  }

  update() {
    //move the background
    this.background.tilePositionY -= 0.5;
  }
}

class pauseButton extends Phaser.Scene {
  constructor() {
    super("PauseButton");
  }
  create() {
    playButton = this.add.sprite(this.scale.width * 0.5, this.scale.height * 0.5, "playButton");
    playButton.setDepth(1);
    playButton.setInteractive();
    playButton.on('pointerdown', () => { this.resumeGame(); });
    pauseSound = this.sound.add("pauseSound");
    this.highScoreText = this.add.text(this.scale.width * 0.25, this.scale.height * 0.75, "High: "+ String(highScore).padStart(9, '0'), { fontFamily: 'pxlFont', fontSize: '32px', fill: '#fff', stroke: '#000', strokeThickness: 3, align: 'center' });
  }
  resumeGame() {
    globalStart();
    pauseSound.play(sfxConfig);
    this.highScoreText.destroy();
    pauseText.setActive(false);
    pauseText.setVisible(false);
    playButton.setActive(false);
    playButton.setVisible(false);
    pauseBtn.setActive(true);
    pauseBtn.setVisible(true);
    if (this.scene.isPaused("PlayGame")) {
      this.scene.resume("PlayGame");
    } else if(this.scene.isPaused("PlayGame2")) {
      this.scene.resume("PlayGame2");
    } else if (this.scene.isPaused("PlayGame3")) {
      this.scene.resume("PlayGame3");
    }
    console.log("Game unpaused.");
  }

  update() {
    var enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    if (enterKey.isDown) {
      this.resumeGame();
    }
  }
}

//in08
class GameOver1 extends Phaser.Scene {
  constructor () {
    super ("GameOver1");
  }
  create() {
  }
}
