class MovableObject {
	y = 680;
	width = 310;
	height = 610;
	img;
	ImagesForMovement = {};

	loadImage(imgPath) {
		this.img = new Image();
		this.img.src = imgPath;
	}

	loadImagesForMovement(movementImgs) {
		movementImgs.forEach(() => {
			let img = new Image();
			img.src = path;
			this.ImagesForMovement[path] = path;
		});
	}

	moveRight() {
		console.log("Moving right");
	}

	moveLeft() {
		console.log("Moving left");
	}
}
