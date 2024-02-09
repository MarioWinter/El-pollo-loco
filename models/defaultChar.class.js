class DefaultCharacter {
	x = 120;
	y = 400;
	img;

	constructor(img) {
		this.img = img;
	}

	moveRight() {
		console.log("Moving right");
	}

	moveLeft() {
		console.log("Moving left");
	}
}
