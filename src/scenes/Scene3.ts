import Phaser from "phaser";
import { InputHandler } from "../objects/InputHandler";
import { updateScore, score } from "../objects/score";

export default class Scene3 extends Phaser.Scene {
    inputHandler: InputHandler;
    scoreText?: Phaser.GameObjects.Text;

    constructor() {
        super({ key: "Scene3" });
    }

    create() {
        this.inputHandler = new InputHandler(this);

        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "24px",
            })
            .setOrigin(1, 0);

        this.add.image(400, 300, "purple");
        this.add.text(250, 300, "And this is the last scene (four)", {
            font: "20px Arial",
            color: "brown",
        });
        this.scoreText = this.add.text(16, 16, "Score: " + score, {
            fontSize: "32px",
            color: "#000",
        });
    }

    update() {
        if (this.inputHandler.cursors?.left.isDown) {
            updateScore();
            this.scoreText?.setText(`Score: ${score}`);
            this.scene.start("Scene2");
        }
    }
}
