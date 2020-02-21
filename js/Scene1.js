class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {
    this.load.image('tiles', '../assets/downground1.png');
  }
  //----------------------------------------------------------------------------//
  // ---------------------load al the resourses befor start the game -----------//
  //----------------------------------------------------------------------------//

  //---------------------- load the font map -----------------------------------//
  // this.load.bitmapFont('pixelFont', '../font/font.png', '../font/font.xml');

  //---------- load the background of the game stage ---------------------------//
  // this.load.image('Background', '../imges/2ef.gif');

  //---------- load the player fire-----------------------//
  // this.load.spritesheet('beam', '../imges/beam.png', {
  //   frameWidth: 30,
  //   frameHeight: 30
  // });

  create() {
    // Load a map from a 2D array of tile indices
    const level = bakgroubdMatrix;
    const forgroundMatrix = foregroubdMatrix;

    // When loading from an array, make sure to specify the tileWidth and tileHeight

    const map = this.make.tilemap({
      data: level,
      tileWidth: 80,
      tileHeight: 80
    });
    const tiles = map.addTilesetImage('tiles');
    const layer = map.createStaticLayer(0, tiles, 0, 0);

    const map2 = this.make.tilemap({
      data: forgroundMatrix,
      tileWidth: 80,
      tileHeight: 80
    });

    const tiles2 = map2.addTilesetImage('tiles');
    const layer2 = map2.createStaticLayer(0, tiles2, 0, 0);
  }
}
