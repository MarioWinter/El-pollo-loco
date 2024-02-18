class World {
	ctx;
	canvas;
	keyboard;
	character = new Character();
	enemies = [new Chicken(), new Chicken(), new Chicken()];
	clouds = [new Cloud()];
	backgroundObject;
	camera_x = 0;

	constructor(canvas, keyboard) {
		this.endlessBackground();
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
		this.ctx.translate(this.camera_x, 0);
		this.addObjectsToCanvas(this.backgroundObject);
		this.addObjectsToCanvas(this.clouds);
		this.drawOnCanvas(this.character);
		this.addObjectsToCanvas(this.enemies);
		this.ctx.translate(-this.camera_x, 0);
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

	endlessBackground() {
		let backround = [];
		let index = 2;
		let imgSize = -2560;
		for (let i = 1; i < 10; i++) {
			backround.push(
				new BackgroundObject(
					`./img/5_background/layers/air.png`,
					imgSize
				),
				new BackgroundObject(
					`./img/5_background/layers/3_third_layer/${index}.png`,
					imgSize
				),
				new BackgroundObject(
					`./img/5_background/layers/2_second_layer/${index}.png`,
					imgSize
				),
				new BackgroundObject(
					`./img/5_background/layers/1_first_layer/${index}.png`,
					imgSize
				)
			);

			imgSize = imgSize + 2560;
			if (index === 1) {
				index = 2;
			} else {
				index = 1;
			}
		}
		this.backgroundObject = backround;
	}
}
