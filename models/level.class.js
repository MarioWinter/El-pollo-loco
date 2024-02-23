class Level {
	enemies;
	clouds;
	backgroundObject;
	tools;
	level_end_x = 2560 * 5;
	level_start_x = 0;

	constructor(enemies, clouds, backgroundObject, tools) {
		this.enemies = enemies;
		this.clouds = clouds;
		this.backgroundObject = backgroundObject;
		this.tools = tools;
	}
}
