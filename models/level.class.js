class Level {
	enemies;
	clouds;
	backgroundObject;
	level_end_x = 2560 * 5;
	level_start_x = 0;

	constructor(enemies, clouds, backgroundObject) {
		this.enemies = enemies;
		this.clouds = clouds;
		this.backgroundObject = backgroundObject;
	}
}
