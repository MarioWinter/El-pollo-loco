class Character extends MovableObject {
	charAnimation;
	charMotion;
	y = 660;
	width = 310;
	height = 610;

	speed = 15;
	IMAGES_WALKING = [
		"./img/2_character_pepe/2_walk/W-21.png",
		"./img/2_character_pepe/2_walk/W-22.png",
		"./img/2_character_pepe/2_walk/W-23.png",
		"./img/2_character_pepe/2_walk/W-24.png",
		"./img/2_character_pepe/2_walk/W-25.png",
		"./img/2_character_pepe/2_walk/W-26.png",
	];

	IMAGES_IDL = [
		"./img/2_character_pepe/1_idle/idle/I-1.png",
		"./img/2_character_pepe/1_idle/idle/I-2.png",
		"./img/2_character_pepe/1_idle/idle/I-3.png",
		"./img/2_character_pepe/1_idle/idle/I-4.png",
		"./img/2_character_pepe/1_idle/idle/I-5.png",
		"./img/2_character_pepe/1_idle/idle/I-6.png",
		"./img/2_character_pepe/1_idle/idle/I-7.png",
		"./img/2_character_pepe/1_idle/idle/I-8.png",
		"./img/2_character_pepe/1_idle/idle/I-9.png",
		"./img/2_character_pepe/1_idle/idle/I-10.png",
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
		this.loadImageCache(this.IMAGES_IDL);
		this.loadImageCache(this.IMAGES_WALKING);
		this.loadImageCache(this.IMAGES_JUMPING);
		this.loadImageCache(this.IMAGES_DEAD);
		this.loadImageCache(this.IMAGES_HURT);
		this.animate();
		this.applayGravity();
	}

	animate() {
		this.charMotion = setGameInterval(() => {
			this.walking_sound.pause();
			if (
				this.world.keyboard.RIGHT &&
				this.x < this.world.level.level_end_x
			) {
				this.x += this.speed;
				this.flipObjectDirection = false;
				this.playWalkingSound();
			}
			if (
				this.world.keyboard.LEFT &&
				this.x > this.world.level.level_start_x
			) {
				this.moveLeft(true);
				this.playWalkingSound();
			}

			this.isJumping();

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
			} else if (!this.isAboveGround()) {
				this.playAnimation(this.IMAGES_IDL);
			}
			this.characterIsDead();
		}, 95);

		setGameInterval(() => {
			if (this.isAboveGround() && this.world.keyboard.SPACE) {
				this.characterIsJumpingAnimation();
			}
		}, 1000 / 35);
	}

	characterIsDead() {
		let counter = 0;
		setGameInterval(() => {
			if (this.isDead()) {
				this.playAnimation(this.IMAGES_DEAD);
				counter++;
				if (counter >= 7) {
					//stopGame();
				}
			}
		}, 50);
	}

	characterIsJumpingAnimation() {
		console.log("y: " + this.y, "SpeedY: " + this.speedY);
		let loadMovements = () => {
			if (
				(this.y >= 600 && this.speedY == 0) ||
				(this.y >= 600 && this.speedY == 30)
			) {
				this.loadImage(this.IMAGES_JUMPING[2]);
			} else if (this.y >= 510 && this.speedY == 30) {
				this.loadImage(this.IMAGES_JUMPING[3]);
			} else if (this.y >= 250 && this.speedY == 3) {
				this.loadImage(this.IMAGES_JUMPING[4]);
			} else if (this.y >= 250 && this.speedY == -3) {
				this.loadImage(this.IMAGES_JUMPING[5]);
			} else if (this.y > 250 && this.speedY < -3) {
				this.loadImage(this.IMAGES_JUMPING[6]);
			}
		};
		loadMovements();
	}

	playWalkingSound() {
		if (!this.isAboveGround()) {
			this.walking_sound.play();
		}
	}

	isJumping() {
		if (
			(this.world.keyboard.SPACE &&
				!this.isAboveGround() &&
				!this.world.keyboard.isPressedJump) ||
			(this.world.keyboard.UP &&
				!this.isAboveGround() &&
				!this.world.keyboard.isPressedJump)
		) {
			setTimeout(() => {
				this.jump();
				this.world.keyboard.isPressedJump = true;
			}, 100);
		}
	}
}
