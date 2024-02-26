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

	applayGravity() {
		setInterval(() => {
			if (this.isAboveGround() || this.speedY > 0) {
				this.y -= this.speedY;
				this.speedY -= this.acceleration;
				console.log(this.speedY);
			}
		}, 1000 / 25);
	}

	isAboveGround() {
		return this.y < 633;
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
		let step = this.currentImageStep % this.IMGAGES_WALKING.length;
		let path = images[step];
		this.img = this.ImagesForMovement[path];
		this.currentImageStep++;
	}
}
