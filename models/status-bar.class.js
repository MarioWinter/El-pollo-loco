class StatusBar extends DrawableObject {
	x;
	y;
	IMAGES_HEALTH = [
		"./img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
		"./img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
		"./img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
		"./img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
		"./img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
		"./img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
	];
	statusLife = 100;

	constructor() {
		super();
		this.x = 100;
		this.y = 1000;
		this.loadImageCache(this.IMAGES_HEALTH);
		this.setLifeOnStatusbar(100);
	}

	setLifeOnStatusbar(percentage) {
		this.statusLife = percentage;
		let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
		this.img = this.ImageCache[path];
	}

	resolveImageIndex() {
		return this.statusLife > 80
			? 5
			: this.statusLife > 60
			? 4
			: this.statusLife > 40
			? 3
			: this.statusLife > 20
			? 2
			: this.statusLife > 0
			? 1
			: 0;
	}
}
