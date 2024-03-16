class ThrowableObject extends MovableObject {
	IMAGES_BOTTLE = [
		"./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
		"./img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
		"./img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
		"./img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
	];
	constructor(x, y) {
		super().loadImage(this.IMAGES_BOTTLE[0]);
		this.loadImageCache(this.IMAGES_BOTTLE);
		this.x = x;
		this.y = y;
		this.width = 120;
		this.height = 120;
		this.throw();
	}

	throw() {
		this.speedY = 30;
		this.applayGravity();
		setInterval(() => {
			this.x += 25;
			this.playAnimation(this.IMAGES_BOTTLE);
		}, 50);
	}
}
