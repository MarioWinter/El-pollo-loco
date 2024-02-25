class Character extends MovableObject {
	y = 0;
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
	IMGAGES_JUMPING = [
		"./img/2_character_pepe/3_jump/J-31.png",
		"./img/2_character_pepe/3_jump/J-32.png",
		"./img/2_character_pepe/3_jump/J-33.png",
		"./img/2_character_pepe/3_jump/J-34.png",
		"./img/2_character_pepe/3_jump/J-35.png",
		"./img/2_character_pepe/3_jump/J-36.png",
		"./img/2_character_pepe/3_jump/J-37.png",
		"./img/2_character_pepe/3_jump/J-38.png",
		"./img/2_character_pepe/3_jump/J-39.png",
	];
	walking_sound = new Audio("audio/running.mp3");

	constructor() {
		super().loadImage(this.IMGAGES_WALKING[0]);
		this.x = 100;
		this.loadImagesForMovement(this.IMGAGES_WALKING);
		this.loadImagesForMovement(this.IMGAGES_JUMPING);
		this.animate();
		this.applayGravity();
	}

	jump() {}

	animate() {
		setInterval(() => {
			this.walking_sound.pause();
			if (
				this.world.keyboard.RIGHT &&
				this.x < this.world.level.level_end_x
			) {
				this.x += this.speed;
				this.flipObjectDirection = false;
				this.walking_sound.play();
			}
			if (
				this.world.keyboard.LEFT &&
				this.x > this.world.level.level_start_x
			) {
				this.x -= this.speed;
				this.flipObjectDirection = true;
				this.walking_sound.play();
			}

			this.world.camera_x = -this.x + 200;
		}, 1000 / 60);

		setInterval(() => {
			if (this.isAboveGround()) {
				this.playAnimation(this.IMGAGES_JUMPING);
			} else {
				if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
					this.playAnimation(this.IMGAGES_WALKING);
				}
			}
		}, 50);
	}
}
