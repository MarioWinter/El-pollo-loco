class DrawableObject {
	ctx;
	ImageCache = {};
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

	loadImageCache(movementImgs) {
		movementImgs.forEach((path) => {
			let img = new Image();
			img.src = path;
			this.ImageCache[path] = img;
		});
	}

	drawFrame(ctx) {
		if (
			this instanceof Character ||
			this instanceof Chicken ||
			this instanceof Chicks
		) {
			ctx.beginPath();
			ctx.lineWidth = "5";
			ctx.strokeStyle = "blue";
			ctx.rect(this.x, this.y, this.width, this.height);
			ctx.stroke();
		}
	}
}
