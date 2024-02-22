class Chicken extends MovableObject {
	IMGAGES_WALKING = [
		"./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
		"./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
		"./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
	];

	constructor() {
		super().loadImage(
			"./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"
		);

		this.x = 600 + Math.random() * 1960;
		this.y = 1100;
		this.height = 148;
		this.width = 143;
		this.loadImagesForMovement(this.IMGAGES_WALKING);
		this.animate(100);
		this.speed = 1 + Math.random() * 0.5;
		this.moveLeft();
	}

	animate(animateTime) {
		setInterval(() => {
			this.playAnimation(this.IMGAGES_WALKING);
		}, animateTime);
	}
}
