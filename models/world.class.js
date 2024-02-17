class World {
	ctx;
	canvas;
	keyboard;
	character = new Character();
	enemies = [new Chicken(), new Chicken(), new Chicken()];
	clouds = [new Cloud()];
	backgroundObject = [
		new BackgroundObject("./img/5_background/layers/air.png", 0),
		new BackgroundObject(
			"./img/5_background/layers/3_third_layer/1.png",
			0
		),
		new BackgroundObject(
			"./img/5_background/layers/2_second_layer/1.png",
			0
		),
		new BackgroundObject(
			"./img/5_background/layers/1_first_layer/1.png",
			0
		),
	];

	constructor(canvas, keyboard) {
		this.ctx = canvas.getContext("2d");
		this.canvas = canvas;
		this.keyboard = keyboard;
		this.drawCharacter();
		this.setWorld();
	}

	setWorld() {
		this.character.world = this;
	}

	drawCharacter() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.addObjectsToCanvas(this.backgroundObject);
		this.addObjectsToCanvas(this.clouds);
		this.drawOnCanvas(this.character);
		this.addObjectsToCanvas(this.enemies);

		requestAnimationFrame(() => {
			this.drawCharacter();
		});
	}

	addObjectsToCanvas(objects) {
		objects.forEach((object) => {
			this.drawOnCanvas(object);
		});
	}

	drawOnCanvas(motif) {
		if (motif.flipObjectDirection) {
			this.ctx.save();
			this.ctx.translate(motif.width, 0);
			this.ctx.scale(-1, 1);
			motif.x = motif.x * -1;
		}
		this.ctx.drawImage(
			motif.img,
			motif.x,
			motif.y,
			motif.width,
			motif.height
		);
		if (motif.flipObjectDirection) {
			motif.x = motif.x * -1;
			this.ctx.restore();
		}
	}
}
