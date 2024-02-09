class World {
	character = new Character();
	enemies = [new Chicken(), new Chicken(), new Chicken()];
	ctx;
	canvas;

	constructor(canvas) {
		this.ctx = canvas.getContext("2d");
		this.canvas = canvas;
		this.drawCharacter();
	}

	drawCharacter() {
		this.ctx.drawImage(
			this.character.img,
			this.character.x,
			this.character.y,
			this.character.width,
			this.character.height
		);

		let self = this;
		requestAnimationFrame(function () {
			self.drawCharacter();
		});
	}

	drawChickenEnemies() {}
}
