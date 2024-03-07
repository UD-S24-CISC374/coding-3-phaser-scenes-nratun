import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("sky", "assets/sky.png");
        this.load.image("sunset", "assets/sunset.jpg");
        this.load.image("lake", "assets/lake.jpg");
        this.load.image("houses", "assets/houses.jpg");
        this.load.image("waterfall", "assets/waterfall.jpg");
    }

    create() {
        this.scene.start("MainScene");
    }
}
