class Coins extends MovableObject {
	height = 150;
	width = 150;
	IMAGES_WALKING = ["./img/8_coin/coin_1.png", "./img/8_coin/coin_2.png"];

	constructor() {
		super().loadImage(this.IMAGES_WALKING[0]);

		this.x = 1900 + Math.random() * 6960;
		this.y = 700 + Math.random() * 400;
		this.loadImageCache(this.IMAGES_WALKING);
		this.animate(150);
	}

	animate(animateTime) {
		setGameInterval(() => {
			this.playAnimation(this.IMAGES_WALKING);
		}, animateTime);
	}
}
