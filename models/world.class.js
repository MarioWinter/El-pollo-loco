class World {
	ctx;
	canvas;
	keyboard;
	character = new Character();
	statusbar = new StatusBar();
	level = level1;
	camera_x = 0;

	constructor(canvas, keyboard) {
		this.ctx = canvas.getContext("2d");
		this.canvas = canvas;
		this.keyboard = keyboard;
		this.draw();
		this.setWorld();
		this.checkCollisions();
	}

	setWorld() {
		this.character.world = this;
	}

	checkCollisions() {
		setInterval(() => {
			this.level.enemies.forEach((enemy) => {
				if (this.character.isColliding(enemy)) {
					this.character.hit();
					console.log(
						"Collision with Character enemy",
						this.character.life
					);
				}
			});
		}, 200);
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
		this.drawOnCanvas(this.statusbar);
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
			this.flipImage(motif);
		}

		motif.draw(this.ctx);
		motif.drawFrame(this.ctx);

		if (motif.flipObjectDirection) {
			this.flipImageBack(motif);
		}
	}

	flipImage(motif) {
		this.ctx.save();
		this.ctx.translate(motif.width, 0);
		this.ctx.scale(-1, 1);
		motif.x = motif.x * -1;
	}

	flipImageBack(motif) {
		motif.x = motif.x * -1;
		this.ctx.restore();
	}
}
