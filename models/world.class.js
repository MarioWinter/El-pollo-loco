class World {
	ctx;
	canvas;
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

	constructor(canvas) {
		this.ctx = canvas.getContext("2d");
		this.canvas = canvas;
		this.drawCharacter();
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
		this.ctx.drawImage(
			motif.img,
			motif.x,
			motif.y,
			motif.width,
			motif.height
		);
	}
}
