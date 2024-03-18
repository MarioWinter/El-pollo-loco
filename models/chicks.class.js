class Chicks extends MovableObject {
	moveLeftChicks;
	walkingChicks;
	IMAGES_WALKING = [
		"./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
		"./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
		"./img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
	];

	constructor() {
		super().loadImage(this.IMAGES_WALKING[0]);

		this.x = 600 + Math.random() * 1960;
		this.y = 1100;
		this.height = 148;
		this.width = 143;
		this.loadImageCache(this.IMAGES_WALKING);
		this.animate(100);
		this.speed = 1 + Math.random() * 0.5;
		this.offset.top = 0;
		this.offset.bottom = 0;
		this.offset.left = 0;
		this.offset.right = 0;
	}

	animate(animateTime) {
		this.moveLeftChicks = setInterval(() => {
			this.moveLeft(false);
		}, 1000 / 60);

		this.walkingChicks = setInterval(() => {
			this.playAnimation(this.IMAGES_WALKING);
		}, animateTime);
	}

	dead() {
		this.stopWalkingChicken();
		this.speedY = 30;
		this.applayGravity();
		this.playAnimation(this.IMAGES_WALKING);
	}

	stopWalkingChicken() {
		clearInterval(this.moveLeftChicks);
		clearInterval(this.walkingChicks);
	}
}
