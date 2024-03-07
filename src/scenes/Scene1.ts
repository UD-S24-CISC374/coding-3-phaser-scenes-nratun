import Phaser from "phaser";
import { InputHandler } from "../objects/InputHandler";
import { updateScore, score } from "../objects/score";

export default class Scene1 extends Phaser.Scene {
    inputHandler: InputHandler;
    scoreText?: Phaser.GameObjects.Text;

    constructor() {
        super({ key: "Scene1" });
    }

    create() {
        this.inputHandler = new InputHandler(this);

        this.add.image(400, 300, "waterfall");
        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "white",
                fontSize: "24px",
            })
            .setOrigin(1, 0);

        this.scoreText = this.add.text(16, 16, "Score: " + score, {
            fontSize: "32px",
            color: "white",
        });
    }

    update() {
        if (this.inputHandler.cursors?.right.isDown) {
            updateScore();
            this.scoreText?.setText(`Score: ${score}`);
            this.scene.start("Scene2");
        } else if (this.inputHandler.cursors?.left.isDown) {
            updateScore();
            this.scoreText?.setText(`Score: ${score}`);
            this.scene.start("MainScene");
        }
    }
}
