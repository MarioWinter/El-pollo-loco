class Chicken extends MovableObject {
	moveLeftChicken;
	walkingChicken;

	IMAGES_WALKING = [
		"./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
		"./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
		"./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
	];

	IMAGES_DEAD = ["./img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];

	pickUpItem;

	constructor() {
		super().loadImage(this.IMAGES_WALKING[0]);
		this.x = 5200 + Math.random() * 1960;
		this.y = 1100;
		this.height = 148;
		this.width = 143;
		this.loadImageCache(this.IMAGES_WALKING);
		this.loadImageCache(this.IMAGES_DEAD);
		this.animate(100);
		this.speed = 1 + Math.random() * 0.5;
	}

	animate(animateTime) {
		this.moveLeftChicken = setGameInterval(() => {
			this.moveLeft(false);
		}, 1000 / 60);

		this.walkingChicken = setGameInterval(() => {
			this.playAnimation(this.IMAGES_WALKING);
		}, animateTime);
	}

	dead() {
		this.stopWalkingChicken();
		this.speedY = -30;
		this.applayGravity();
		this.loadImage(this.IMAGES_DEAD);
	}

	stopWalkingChicken() {
		clearInterval(this.moveLeftChicken);
		clearInterval(this.walkingChicken);
	}
}
