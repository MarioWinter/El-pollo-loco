class Chicks extends MovableObject {
	moveLeftChicks;
	walkingChicks;
	IMAGES_WALKING = [
		"./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
		"./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
		"./img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
	];

	IMAGES_DEAD = ["./img/3_enemies_chicken/chicken_small/2_dead/dead.png"];

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
		this.moveLeftChicks = setGameInterval(() => {
			this.moveLeft(false);
		}, 1000 / 60);

		this.walkingChicks = setGameInterval(() => {
			this.playAnimation(this.IMAGES_WALKING);
		}, animateTime);
	}

	dead() {
		this.stopWalkingChicken();
		this.speedY = -20;
		this.applayGravity();
		this.loadImage(this.IMAGES_DEAD);
		setGameInterval(() => {
			this.x += 30;
		}, 50);
	}

	stopWalkingChicken() {
		clearInterval(this.moveLeftChicks);
		clearInterval(this.walkingChicks);
	}
}
