import Phaser from 'phaser';
import PlayScene from './scenes/Play';




const WIDTH = 1280;
const HEIGHT = 600;


const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
}

const Scenes = [PlayScene];

const createScene = Scene => new Scene(SHARED_CONFIG)

const initScenes = () => Scenes.map(createScene)




const config = {
  // WebGL (web graphics library) JS api for rendering 2D and 3D graphics
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  pixelArt: true,
  physics: {
    // arcade physics plugin, manages physics simulations
    default: 'arcade',
    arcade: {
      debug: true,
    }
  },
  scene: initScenes()
}


new Phaser.Game(config);