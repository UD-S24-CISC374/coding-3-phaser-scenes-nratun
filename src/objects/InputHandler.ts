import Phaser from "phaser";

export class InputHandler {
    cursors?: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor(scene: Phaser.Scene) {
        this.cursors = scene.input.keyboard?.createCursorKeys();
    }
}
