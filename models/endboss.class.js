class Endboss extends MovableObject {
	y = 420;
	width = 700;
	height = 900;
	life = 5;
	IMAGES_WALKING = [
		"./img/4_enemie_boss_chicken/2_alert/G5.png",
		"./img/4_enemie_boss_chicken/2_alert/G6.png",
		"./img/4_enemie_boss_chicken/2_alert/G7.png",
		"./img/4_enemie_boss_chicken/2_alert/G8.png",
		"./img/4_enemie_boss_chicken/2_alert/G9.png",
		"./img/4_enemie_boss_chicken/2_alert/G10.png",
		"./img/4_enemie_boss_chicken/2_alert/G11.png",
		"./img/4_enemie_boss_chicken/2_alert/G12.png",
	];

	IMAGES_DEAD = [
		"./img/4_enemie_boss_chicken/5_dead/G24.png",
		"./img/4_enemie_boss_chicken/5_dead/G25.png",
		"./img/4_enemie_boss_chicken/5_dead/G26.png",
	];

	constructor() {
		super().loadImage("./img/4_enemie_boss_chicken/2_alert/G5.png");
		this.loadImageCache(this.IMAGES_WALKING);
		this.loadImageCache(this.IMAGES_DEAD);
		this.x = 2560 * 5;
		this.animate(200);
	}

	animate(animateTime) {
		setGameInterval(() => {
			this.playAnimation(this.IMAGES_WALKING);
			this.bossIsDead();
		}, animateTime);
	}

	hit() {
		this.life -= 1;
		console.log(this.life);
		if (this.life < 0) {
			this.life = 0;
		} else {
			this.lastHit = new Date().getTime();
		}
	}

	isHurt() {
		let timepassed = new Date().getTime() - this.lastHit;
		return timepassed > 800;
	}

	bossIsDead() {
		let counter = 0;
		setGameInterval(() => {
			if (this.isDead()) {
				this.playAnimation(this.IMAGES_DEAD);
				counter++;
				if (counter >= 2) {
					stopGame();
				}
			}
		}, 500);
	}
}
