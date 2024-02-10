class MovableObject {
	x;
	y = 100;
	height = 350;
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
