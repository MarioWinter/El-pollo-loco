class MovableObject {
	y = 680;
	width = 310;
	height = 610;
	img;
	ImagesForMovement = {};
	IMGAGES_WALKING = [];
	currentImageStep = 0;
	speed = 0.1;

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

	animate(animateTime) {
		setInterval(() => {
			let step = this.currentImageStep % this.IMGAGES_WALKING.length;
			let path = this.IMGAGES_WALKING[step];
			this.img = this.ImagesForMovement[path];
			this.currentImageStep++;
		}, animateTime);
	}

	moveRight() {
		setInterval(() => {
			this.x += this.speed;
		}, 1000 / 60);
	}

	moveLeft() {
		setInterval(() => {
			this.x -= this.speed;
		}, 1000 / 60);
	}
}
