class BackgroundObject extends MovableObject {
	width = windowWidth;
	constructor(imgPath, x) {
		super().loadImage(imgPath);
		this.x = x;
		this.y = windowHeight - this.height;
	}
}
