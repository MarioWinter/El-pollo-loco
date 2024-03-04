class MovableObject {
	y = 0;
	width = 310;
	height = 610;
	img;
	ImagesForMovement = {};
	IMGAGES_WALKING = [];
	currentImageStep = 0;
	speed = 0.1;
	flipObjectDirection = false;
	speedY = 5;
	acceleration = 2;
	life = 100;
	lastHit = 0;

	applayGravity() {
		setInterval(() => {
			if (this.isAboveGround() || this.speedY > 0) {
				this.y -= this.speedY;
				this.speedY -= this.acceleration;
			}
		}, 1000 / 25);
	}

	isAboveGround() {
		return this.y < 633;
	}

	isColliding(mo) {
		return (
			this.x + this.width > mo.x &&
			this.y + this.height > mo.y &&
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

	loadImage(imgPath) {
		this.img = new Image();
		this.img.src = imgPath;
	}

	loadImagesForMovement(movementImgs) {
		movementImgs.forEach((path) => {
			let img = new Image();
			img.src = path;
			this.ImagesForMovement[path] = img;
		});
	}

	draw(ctx) {
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	}

	drawFrame(ctx) {
		if (
			this instanceof Character ||
			this instanceof Chicken ||
			this instanceof Chicks
		) {
			ctx.beginPath();
			ctx.lineWidth = "5";
			ctx.strokeStyle = "blue";
			ctx.rect(this.x, this.y, this.width, this.height);
			ctx.stroke();
		}
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
		this.img = this.ImagesForMovement[path];
		this.currentImageStep++;
	}
}
