var config = {
  type: Phaser.AUTO,
  width: 3500,
  height: window.innerHeight,
  backgroundColor: '2192d9',

  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
      // gravity: { y: 50 }
    }
  }
};

var game = new this.Phaser.Game(config);

var gameSettings = {
  playerSpeed: 150
};
