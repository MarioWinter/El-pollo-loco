class World {
	ctx;
	canvas;
	keyboard;
	character = new Character();
	statusbarLife = new StatusBarLife();
	statusbarCoins = new StatusBarCoins();
	statusbarBottle = new StatusBarBottle();
	throwableObjects = [];
	level = level1;
	camera_x = 0;

	constructor(canvas, keyboard) {
		this.ctx = canvas.getContext("2d");
		this.canvas = canvas;
		this.keyboard = keyboard;
		this.draw();
		this.setWorld();

		this.runIntervals();
	}

	setWorld() {
		this.character.world = this;
	}

	runIntervals() {
		setInterval(() => {
			this.checkCollisions();
			this.checkThrowObjects();
			this.checkPickupBottle();
		}, 150);
	}

	checkCollisions() {
		this.level.enemies.forEach((enemy) => {
			if (this.character.isColliding(enemy)) {
				this.character.hit();
				this.statusbarLife.setLifeOnStatusbar(this.character.life);
			}
		});
	}

	checkPickupBottle() {
		this.level.bottles.forEach((bottle, index) => {
			if (this.character.isColliding(bottle)) {
				this.removeBottlefromLevel(index);
				// this.character.pickUp();
				// this.statusbarLife.setLifeOnStatusbar(this.character.life);
			}
		});
	}

	removeBottlefromLevel(index) {
		this.level.bottles.splice(index, 1);
	}

	checkThrowObjects() {
		if (this.keyboard.D) {
			let bottle = new ThrowableObject(
				this.character.x + 200,
				this.character.y + 250
			);
			this.throwableObjects.push(bottle);
		}
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		this.ctx.translate(this.camera_x, 0);
		this.addObjectsToCanvas(this.level.backgroundObject);
		this.addObjectsToCanvas(this.level.clouds);
		this.addObjectsToCanvas(this.level.bottles);
		this.addObjectsToCanvas(this.level.coins);
		this.drawOnCanvas(this.character);
		this.addObjectsToCanvas(this.level.enemies);
		this.addObjectsToCanvas(this.throwableObjects);
		this.ctx.translate(-this.camera_x, 0);

		this.drawOnCanvas(this.statusbarLife);
		this.drawOnCanvas(this.statusbarCoins);
		this.drawOnCanvas(this.statusbarBottle);
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
