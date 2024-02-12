class Character extends MovableObject {
	y = 660;
	width = 310;
	height = 610;
	constructor() {
		super().loadImage("./img/2_character_pepe/2_walk/W-21.png");
		this.x = 100;
	}

	jump() {}
}
