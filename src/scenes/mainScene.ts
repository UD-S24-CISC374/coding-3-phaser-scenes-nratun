import Phaser from "phaser";
import { InputHandler } from "../objects/InputHandler";
import { updateScore, score } from "../objects/score";

export default class MainScene extends Phaser.Scene {
    inputHandler: InputHandler;
    scoreText?: Phaser.GameObjects.Text;

    constructor() {
        super({ key: "MainScene" });
    }

    create() {
        this.inputHandler = new InputHandler(this);

        this.add.image(400, 300, "sky");
        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "24px",
            })
            .setOrigin(1, 0);

        this.add.text(
            300,
            200,
            "This is the first scene.\nClick the left or right\narrow key to switch scenes"
        );
        this.add.text(
            200,
            300,
            "Switching scenes will incrmeent the score by 1"
        );
        this.scoreText = this.add.text(16, 16, "Score: " + score, {
            fontSize: "32px",
            color: "#000",
        });
    }

    update() {
        if (this.inputHandler.cursors?.right.isDown) {
            updateScore();
            this.scoreText?.setText(`Score: ${score}`);
            this.scene.start("Scene1");
        }
    }
}
