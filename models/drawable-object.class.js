class DrawableObject {
	ctx;
	ImagesForMovement = {};
	currentImageStep = 0;
	img;
	x = 0;
	y = 0;
	width = 310;
	height = 610;

	loadImage(imgPath) {
		this.img = new Image();
		this.img.src = imgPath;
	}

	draw(ctx) {
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	}

	loadImagesForMovement(movementImgs) {
		movementImgs.forEach((path) => {
			let img = new Image();
			img.src = path;
			this.ImagesForMovement[path] = img;
		});
	}
}
