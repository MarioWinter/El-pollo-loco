class Chicken extends MovableObject {
	constructor() {
		super().loadImage(
			"./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"
		);
		this.x = 600 + Math.random() * 1960;
		this.y = 1100;
		this.height = 148;
		this.width = 143;
	}
}
