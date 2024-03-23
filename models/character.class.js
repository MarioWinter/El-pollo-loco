class Character extends MovableObject {
	charAnimation;
	charWalkingAnimation;
	y = 660;
	width = 310;
	height = 610;

	speed = 25;
	IMAGES_WALKING = [
		"./img/2_character_pepe/2_walk/W-21.png",
		"./img/2_character_pepe/2_walk/W-22.png",
		"./img/2_character_pepe/2_walk/W-23.png",
		"./img/2_character_pepe/2_walk/W-24.png",
		"./img/2_character_pepe/2_walk/W-25.png",
		"./img/2_character_pepe/2_walk/W-26.png",
	];

	IMAGES_JUMPING = [
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

	IMAGES_DEAD = [
		"./img/2_character_pepe/5_dead/D-51.png",
		"./img/2_character_pepe/5_dead/D-52.png",
		"./img/2_character_pepe/5_dead/D-53.png",
		"./img/2_character_pepe/5_dead/D-54.png",
		"./img/2_character_pepe/5_dead/D-55.png",
		"./img/2_character_pepe/5_dead/D-56.png",
		"./img/2_character_pepe/5_dead/D-57.png",
	];

	IMAGES_HURT = [
		"./img/2_character_pepe/4_hurt/H-41.png",
		"./img/2_character_pepe/4_hurt/H-42.png",
		"./img/2_character_pepe/4_hurt/H-43.png",
	];

	walking_sound = new Audio("audio/running.mp3");
	constructor() {
		super().loadImage(this.IMAGES_JUMPING[0]);
		this.x = 100;
		this.offset.top = 230;
		this.offset.bottom = 0;
		this.offset.left = 20;
		this.offset.right = 70;
		this.loadImageCache(this.IMAGES_WALKING);
		this.loadImageCache(this.IMAGES_JUMPING);
		this.loadImageCache(this.IMAGES_DEAD);
		this.loadImageCache(this.IMAGES_HURT);
		this.animate();
		this.applayGravity();
	}

	animate() {
		this.charWalkingAnimation = setGameInterval(() => {
			this.walking_sound.pause();
			if (
				this.world.keyboard.RIGHT &&
				this.x < this.world.level.level_end_x
			) {
				this.x += this.speed;
				this.flipObjectDirection = false;
				if (!this.isAboveGround()) {
					this.walking_sound.play();
				}
			}
			if (
				this.world.keyboard.LEFT &&
				this.x > this.world.level.level_start_x
			) {
				this.moveLeft(true);
				if (!this.isAboveGround()) {
					this.walking_sound.play();
				}
			}

			if (
				(this.world.keyboard.SPACE && !this.isAboveGround()) ||
				(this.world.keyboard.UP && !this.isAboveGround())
			) {
				this.jump();
			}

			this.world.camera_x = -this.x + 200;
		}, 1000 / 60);

		this.charAnimation = setGameInterval(() => {
			if (this.isHurt()) {
				this.playAnimation(this.IMAGES_HURT);
			} else if (
				(this.world.keyboard.RIGHT && !this.isAboveGround()) ||
				(this.world.keyboard.LEFT && !this.isAboveGround())
			) {
				this.playAnimation(this.IMAGES_WALKING);
			}

			this.characterIsDead();
			this.characterIsJumping();
		}, 50);
	}

	characterIsDead() {
		let counter = 0;
		setGameInterval(() => {
			if (this.isDead()) {
				this.playAnimation(this.IMAGES_DEAD);
				counter++;
				if (counter >= 7) {
					stopGame();
				}
			}
		}, 50);
	}

	characterIsJumping() {
		if (this.isAboveGround()) {
			console.log("y: " + this.y, "SpeedY: " + this.speedY);
			if (this.SpeedY >= 27) {
				this.loadImage(this.IMAGES_JUMPING[1]);
			} else if (this.speedY >= 1) {
				this.loadImage(this.IMAGES_JUMPING[3]);
			} else if (this.speedY <= 0) {
				this.loadImage(this.IMAGES_JUMPING[4]);
				this.loadImage(this.IMAGES_JUMPING[5]);
			} else if (this.speedY >= -1) {
				this.loadImage(this.IMAGES_JUMPING[6]);
			} else if (this.speedY > -25) {
				this.loadImage(this.IMAGES_JUMPING[7]);
			}
		}
	}
}
