class Bottle extends PickableObject {
	y = 1120;
	x = 0;
	width = 120;
	height = 120;
	constructor() {
		super().loadImage(
			"./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
		);
		this.x = Math.random() * 2560 * 5;
		this.offset.top = -10;
		this.offset.bottom = 0;
		this.offset.left = 0;
		this.offset.right = 0;
	}
}
