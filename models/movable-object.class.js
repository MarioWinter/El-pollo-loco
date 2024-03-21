class MovableObject extends DrawableObject {
	speed = 0.1;
	flipObjectDirection = false;
	speedY = 5;
	acceleration = 2;
	life = 100;
	lastHit = 0;
	bottles = 0;
	coins = 0;

	applayGravity() {
		setGameInterval(() => {
			if (this.isAboveGround() || this.speedY > 0) {
				this.y -= this.speedY;
				this.speedY -= this.acceleration;
			}
		}, 1000 / 25);
	}

	isAboveGround() {
		return (
			this instanceof ThrowableObject ||
			this instanceof Chicks ||
			this instanceof Chicken ||
			this.y < 633
		);
	}

	isColliding(mo) {
		return (
			this.x + this.width - this.offset.right >= mo.x + mo.offset.left &&
			this.x + this.offset.left <= mo.x + mo.width - mo.offset.right &&
			this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
			this.y + this.offset.top <= mo.y + mo.height - mo.offset.bottom
		);
	}

	isCollidingFromAbove(mo) {
		return (
			this.x + this.width - this.offset.right >= mo.x + mo.offset.left &&
			this.x + this.offset.left <= mo.x + mo.width - mo.offset.right &&
			this.y + this.offset.top >= mo.y + mo.height - mo.offset.bottom
		);
	}

	hit() {
		this.life -= 5;
		if (this.life < 0) {
			this.life = 0;
		} else {
			this.lastHit = new Date().getTime();
		}
	}

	pickUpItem(pickableBottles) {
		if (pickableBottles < 5 && pickableBottles >= 0) {
			this.bottles++;
		}
	}

	isHurt() {
		let timepassed = new Date().getTime() - this.lastHit;
		return timepassed < 500;
	}

	isDead() {
		return this.life == 0;
	}

	moveRight() {
		this.x += this.speed;
		this.flipObjectDirection = false;
	}

	moveLeft(flipStatus) {
		this.x -= this.speed;
		this.flipObjectDirection = flipStatus;
	}

	jump() {
		this.speedY = 35;
	}

	playAnimation(images) {
		let step = this.currentImageStep % images.length;
		let path = images[step];
		this.img = this.ImageCache[path];
		this.currentImageStep++;
	}

	variableAnimation(images, start, stop) {
		let step = this.currentImageStep % images.length;
		if (step == start && step <= stop) {
			let path = images[step];
			this.img = this.ImageCache[path];
		}
		this.currentImageStep++;
	}
}
