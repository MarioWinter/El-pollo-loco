class BackgroundObject extends MovableObject {
	width = 2562;
	height = 1440;
	constructor(imgPath, x) {
		super().loadImage(imgPath);
		this.x = x;
		this.y = 1440 - this.height;
	}
}
