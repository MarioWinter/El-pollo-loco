class Cloud extends MovableObject {
	y = 10;
	width = 500;
	height = 250;
	constructor() {
		super().loadImage("./img/5_background/layers/4_clouds/full.png");
		this.x = Math.random() * 500;
	}
}
