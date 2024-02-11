class MovableObject {
	x;
	y = windowHeight * 0.55;
	height = 400;
	width = 150;
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
