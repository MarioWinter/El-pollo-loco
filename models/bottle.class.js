class Bottle extends MovableObject {
	y = 1130;
	x = 0;
	width = 120;
	height = 120;
	constructor() {
		super().loadImage(
			"./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
		);
		this.x = Math.random() * 2560 * 5;
	}
}
