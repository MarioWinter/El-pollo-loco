class BackgroundObject extends MovableObject {
	constructor(imgPath, x, y) {
		super().loadImage(imgPath);
		this.x = x;
		this.y = y;
		this.width = 720;
	}
}
