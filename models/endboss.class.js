class Endboss extends MovableObject {
	y = 420;
	width = 700;
	height = 900;
	IMGAGES_WALKING = [
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
		this.loadImagesForMovement(this.IMGAGES_WALKING);
		this.x = 2000;
		this.animate(200);
	}

	animate(animateTime) {
		setInterval(() => {
			this.playAnimation(this.IMGAGES_WALKING);
		}, animateTime);
	}
}
