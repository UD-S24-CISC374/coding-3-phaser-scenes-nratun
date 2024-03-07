import Phaser from "phaser";
import { InputHandler } from "../objects/InputHandler";
import { updateScore, score } from "../objects/score";

export default class Scene2 extends Phaser.Scene {
    inputHandler: InputHandler;
    scoreText?: Phaser.GameObjects.Text;

    constructor() {
        super({ key: "Scene2" });
    }

    create() {
        this.inputHandler = new InputHandler(this);

        this.add.image(400, 300, "lake");
        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "orange",
                fontSize: "24px",
            })
            .setOrigin(1, 0);

        this.scoreText = this.add.text(16, 16, "Score: " + score, {
            fontSize: "32px",
            color: "orange",
        });
    }

    update() {
        if (this.inputHandler.cursors?.right.isDown) {
            updateScore();
            this.scoreText?.setText(`Score: ${score}`);
            this.scene.start("Scene3");
        } else if (this.inputHandler.cursors?.left.isDown) {
            updateScore();
            this.scoreText?.setText(`Score: ${score}`);
            this.scene.start("Scene1");
            console.log("Got here");
        }
    }
}
