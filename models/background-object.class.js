class BackgroundObject extends MovableObject {
	width = 2560;
	height = 1400;
	constructor(imgPath, x) {
		super().loadImage(imgPath);
		this.x = x;
		this.y = 1440 - this.height;
	}
}
