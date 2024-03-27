class Coins extends MovableObject {
	height = 150;
	width = 150;
	IMAGES_WALKING = ["./img/8_coin/coin_1.png", "./img/8_coin/coin_2.png"];

	constructor() {
		super().loadImage(this.IMAGES_WALKING[0]);

		this.x = 1900 + Math.random() * 6960;
		this.y = 700 + Math.random() * 400;
		this.offset.top = 0;
		this.offset.bottom = 30;
		this.offset.left = 10;
		this.offset.right = 10;
		this.loadImageCache(this.IMAGES_WALKING);
		this.animate(150);
	}

	animate(animateTime) {
		setGameInterval(() => {
			this.playAnimation(this.IMAGES_WALKING);
		}, animateTime);
	}
}
