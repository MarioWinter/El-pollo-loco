class World {
	character = new Character();
	enemies = [new Chicken(), new Chicken(), new Chicken()];
	ctx;
	canvas;
	clouds = [new Cloud()];
	backgroundObject = [
		new BackgroundObject(
			"./img/5_background/layers/3_third_layer/2.png",
			0,
			150
		),
	];

	constructor(canvas) {
		this.ctx = canvas.getContext("2d");
		this.canvas = canvas;
		this.drawCharacter();
	}

	drawCharacter() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.drawOnCanvas(this.character);
		this.addObjectsToCanvas(this.enemies);
		this.addObjectsToCanvas(this.clouds);
		this.addObjectsToCanvas(this.backgroundObject);

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
