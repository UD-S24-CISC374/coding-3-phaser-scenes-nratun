import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("sky", "assets/sky.png");
        this.load.image("purple", "assets/purple.png");
    }

    create() {
        this.scene.start("MainScene");
    }
}
