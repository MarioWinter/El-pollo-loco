class World {
	ctx;
	canvas;
	keyboard;
	character = new Character();
	level = level1;
	camera_x = 0;

	constructor(canvas, keyboard) {
		//this.endlessBackground();
		this.ctx = canvas.getContext("2d");
		this.canvas = canvas;
		this.keyboard = keyboard;
		this.draw();
		this.setWorld();
	}

	setWorld() {
		this.character.world = this;
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.translate(this.camera_x, 0);
		this.addObjectsToCanvas(this.level.backgroundObject);
		this.addObjectsToCanvas(this.level.clouds);
		this.addObjectsToCanvas(this.level.tools);
		this.drawOnCanvas(this.character);
		this.addObjectsToCanvas(this.level.enemies);
		this.ctx.translate(-this.camera_x, 0);
		requestAnimationFrame(() => {
			this.draw();
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

		motif.draw(this.ctx);
		motif.drawFrame(this.ctx);

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
