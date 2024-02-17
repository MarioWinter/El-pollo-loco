class Character extends MovableObject {
	y = 660;
	width = 310;
	height = 610;
	world;
	speed = 25;
	IMGAGES_WALKING = [
		"./img/2_character_pepe/2_walk/W-21.png",
		"./img/2_character_pepe/2_walk/W-22.png",
		"./img/2_character_pepe/2_walk/W-23.png",
		"./img/2_character_pepe/2_walk/W-24.png",
		"./img/2_character_pepe/2_walk/W-25.png",
		"./img/2_character_pepe/2_walk/W-26.png",
	];

	constructor() {
		super().loadImage("./img/2_character_pepe/2_walk/W-21.png");
		this.x = 100;
		this.loadImagesForMovement(this.IMGAGES_WALKING);
		this.animate();
	}

	jump() {}

	animate() {
		setInterval(() => {
			if (this.world.keyboard.RIGHT) {
				this.x += this.speed;
				this.flipObjectDirection = false;
			}
			if (this.world.keyboard.LEFT) {
				this.x -= this.speed;
				this.flipObjectDirection = true;
			}
		}, 1000 / 60);

		setInterval(() => {
			if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
				let step = this.currentImageStep % this.IMGAGES_WALKING.length;
				let path = this.IMGAGES_WALKING[step];
				this.img = this.ImagesForMovement[path];
				this.currentImageStep++;
			}
		}, 50);
	}
}
