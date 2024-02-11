class Cloud extends MovableObject {
	y = 0;
	x = 0;
	width = 1920;
	height = 1080;
	constructor() {
		super().loadImage("./img/5_background/layers/4_clouds/1.png");
		this.x = Math.random() * 800;
	}
}
