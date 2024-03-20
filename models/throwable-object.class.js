class ThrowableObject extends MovableObject {
	counter = 0;
	rotateAnimation;
	IMAGES_BOTTLE = [
		"./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
		"./img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
		"./img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
		"./img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
	];

	IMAGES_BOTTLE_SPLASH = [
		"./img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
		"./img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
		"./img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
		"./img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
		"./img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
		"./img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
	];
	constructor(x, y) {
		super().loadImage(this.IMAGES_BOTTLE[0]);
		this.loadImageCache(this.IMAGES_BOTTLE);
		this.loadImageCache(this.IMAGES_BOTTLE_SPLASH);
		this.x = x;
		this.y = y;
		this.width = 120;
		this.height = 120;
		this.throw();
	}

	throw() {
		this.speedY = 30;
		this.applayGravity();
		this.rotateAnimation = setGameInterval(() => {
			this.x += 25;
			this.playAnimation(this.IMAGES_BOTTLE);
		}, 50);
	}

	stopThrowing() {
		clearInterval(this.rotateAnimation);
		this.splashAnimation();
	}

	splashAnimation() {
		let bottleSplash = setGameInterval(() => {
			this.x += 10;
			this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
			this.counter++;
			if (this.counter >= 6) {
				clearInterval(bottleSplash);
			}
		}, 100);
	}
}
