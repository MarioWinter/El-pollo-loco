class Cloud extends MovableObject {
	y = 0;
	x = 0;
	width = 1920;
	height = 1080;
	constructor(cloudType) {
		super().loadImage(cloudType);
		this.x = Math.random() * 2560 * 5;
		this.animate();
	}

	animate() {
		setGameInterval(() => {
			this.moveLeft(false);
		}, 25);
	}
}
