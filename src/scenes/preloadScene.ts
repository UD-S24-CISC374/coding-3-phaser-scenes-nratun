import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("sky", "assets/sky.png");
        this.load.image("lightblue", "assets/lightblue.jpeg");
        this.load.image("lightpink", "assets/lightpink.png");
        this.load.image("lightyellow", "assets/lightyellow.png");
    }

    create() {
        this.scene.start("MainScene");
    }
}
