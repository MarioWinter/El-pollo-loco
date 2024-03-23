class Endboss extends MovableObject {
	y = 420;
	width = 700;
	height = 900;
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

	constructor() {
		super().loadImage("./img/4_enemie_boss_chicken/2_alert/G5.png");
		this.loadImageCache(this.IMAGES_WALKING);
		this.x = 2560 * 5;
		this.animate(200);
	}

	animate(animateTime) {
		setGameInterval(() => {
			this.playAnimation(this.IMAGES_WALKING);
		}, animateTime);
	}
}
