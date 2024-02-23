class Coins extends MovableObject {
	height = 150;
	width = 150;
	IMGAGES_WALKING = ["./img/8_coin/coin_1.png", "./img/8_coin/coin_2.png"];

	constructor() {
		super().loadImage(this.IMGAGES_WALKING[0]);

		this.x = 600 + Math.random() * 1960;
		this.y = 400 + Math.random() * 500;
		this.loadImagesForMovement(this.IMGAGES_WALKING);
		this.animate(150);
		//this.speed = 1 + Math.random() * 0.5;
		//this.moveLeft();
	}

	animate(animateTime) {
		setInterval(() => {
			this.playAnimation(this.IMGAGES_WALKING);
		}, animateTime);
	}
}
