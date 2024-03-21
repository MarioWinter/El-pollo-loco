class Character extends MovableObject {
	charAnimation;
	charWalkingAnimation;
	y = 660;
	width = 310;
	height = 610;

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

	IMGAGES_DEAD = [
		"./img/2_character_pepe/5_dead/D-51.png",
		"./img/2_character_pepe/5_dead/D-52.png",
		"./img/2_character_pepe/5_dead/D-53.png",
		"./img/2_character_pepe/5_dead/D-54.png",
		"./img/2_character_pepe/5_dead/D-55.png",
		"./img/2_character_pepe/5_dead/D-56.png",
		"./img/2_character_pepe/5_dead/D-57.png",
	];

	IMGAGES_HURT = [
		"./img/2_character_pepe/4_hurt/H-41.png",
		"./img/2_character_pepe/4_hurt/H-42.png",
		"./img/2_character_pepe/4_hurt/H-43.png",
	];

	walking_sound = new Audio("audio/running.mp3");
	constructor() {
		super().loadImage(this.IMGAGES_WALKING[0]);
		this.x = 100;
		this.offset.top = 230;
		this.offset.bottom = 0;
		this.offset.left = 20;
		this.offset.right = 70;
		this.loadImageCache(this.IMGAGES_WALKING);
		this.loadImageCache(this.IMGAGES_JUMPING);
		this.loadImageCache(this.IMGAGES_DEAD);
		this.loadImageCache(this.IMGAGES_HURT);
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
				this.walking_sound.play();
			}
			if (
				this.world.keyboard.LEFT &&
				this.x > this.world.level.level_start_x
			) {
				this.moveLeft(true);
				this.walking_sound.play();
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
			this.characterIsDead();
			this.characterIsJumping();
			if (this.isHurt()) {
				this.playAnimation(this.IMGAGES_HURT);
			} else {
				if (
					(this.world.keyboard.RIGHT && !this.isAboveGround) ||
					(this.world.keyboard.LEFT && !this.isAboveGround)
				) {
					this.playAnimation(this.IMGAGES_WALKING);
				}
			}
		}, 50);
	}

	characterIsDead() {
		let counter = 0;
		setGameInterval(() => {
			if (this.isDead()) {
				this.playAnimation(this.IMGAGES_DEAD);
				counter++;
				if (counter >= 7) {
					stopGame();
				}
			}
		}, 50);
	}

	characterIsJumping() {
		if (this.isAboveGround()) {
			//this.playAnimation(this.IMGAGES_JUMPING);
			console.log("y: " + this.y, "SpeedY: " + this.speedY);
			if (this.speedY >= 27) {
				this.loadImage(this.IMGAGES_JUMPING[0]);
				this.loadImage(this.IMGAGES_JUMPING[1]);
				this.loadImage(this.IMGAGES_JUMPING[2]);
			} else if (this.speedY > 0) {
				this.loadImage(this.IMGAGES_JUMPING[3]);
			} else if (this.speedY <= 1) {
				this.loadImage(this.IMGAGES_JUMPING[4]);
				this.loadImage(this.IMGAGES_JUMPING[5]);
			} else if (this.speedY >= -1) {
				this.loadImage(this.IMGAGES_JUMPING[6]);
			} else if (this.speedY > -25) {
				this.loadImage(this.IMGAGES_JUMPING[7]);
				this.loadImage(this.IMGAGES_JUMPING[8]);
			}
		}
	}
}
