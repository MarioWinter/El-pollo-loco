class Character extends MovableObject {
	y = 660;
	width = 310;
	height = 610;
	IMGAGES_WALKING = [
		"./img/2_character_pepe/2_walk/W-21.png",
		"./img/2_character_pepe/2_walk/W-22.png",
		"./img/2_character_pepe/2_walk/W-23.png",
		"./img/2_character_pepe/2_walk/W-24.png",
		"./img/2_character_pepe/2_walk/W-25.png",
		"./img/2_character_pepe/2_walk/W-26.png",
	];
	currentImageStep = 0;

	constructor() {
		super().loadImage("./img/2_character_pepe/2_walk/W-21.png");
		this.x = 100;
		this.loadImagesForMovement(this.IMGAGES_WALKING);
		this.animate();
	}

	animate() {
		setInterval(() => {
			let step = this.currentImageStep % this.IMGAGES_WALKING.length;
			let path = this.IMGAGES_WALKING[step];
			this.img = this.ImagesForMovement[path];
			this.currentImageStep++;
		}, 100);
	}

	jump() {}
}
