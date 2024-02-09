class DefaultCharacter {
	x = 120;
	y = 400;
	img;

	loadImageForBody(imgPath) {
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
