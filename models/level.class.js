class Level {
	enemies;
	clouds;
	backgroundObject;
	bottles;
	coins;
	level_end_x = 2560 * 5;
	level_start_x = 0;

	constructor(enemies, clouds, backgroundObject, bottles, coins) {
		this.enemies = enemies;
		this.clouds = clouds;
		this.backgroundObject = backgroundObject;
		this.bottles = bottles;
		this.coins = coins;
	}
}
