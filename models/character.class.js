class Character extends MovableObject {
	constructor() {
		super().loadImage("./img/2_character_pepe/2_walk/W-21.png");
		this.x = windowWidth * 0.05;
	}

	jump() {}
}
