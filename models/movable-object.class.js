class MovableObject extends DrawableObject {
	speed = 0.1;
	flipObjectDirection = false;
	speedY = 5;
	acceleration = 2;
	life = 100;
	lastHit = 0;
	offset = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	};

	applayGravity() {
		setInterval(() => {
			if (this.isAboveGround() || this.speedY > 0) {
				this.y -= this.speedY;
				this.speedY -= this.acceleration;
			}
		}, 1000 / 25);
	}

	isAboveGround() {
		return this instanceof ThrowableObject || this.y < 633;
	}

	isColliding(mo) {
		return (
			this.x + this.width >= mo.x && // Char Rechts -> Objekt Links
			this.x <= mo.x + mo.width && // Char Rechts -> Objekt Links
			this.y + this.height >= mo.y &&
			this.y <= mo.y + mo.height &&
			this.x < mo.x
		);
	}

	isCollidingFrame(mo) {
		return (
			this.x + this.width > mo.x && // Char Rechts -> Objekt Links
			this.y + this.height > mo.y && // Char
			this.x < mo.x &&
			this.y < mo.y + mo.height
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
}
