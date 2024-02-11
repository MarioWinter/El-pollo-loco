class MovableObject {
	y = 680;
	width = 310;
	height = 610;
	img;

	loadImage(imgPath) {
		this.img = new Image();
		this.img.src = imgPath;
	}

	moveRight() {
		console.log("Moving right");
	}

	moveLeft() {
		console.log("Moving left");
	}
}
