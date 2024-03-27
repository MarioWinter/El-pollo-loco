class StatusBarLife extends DrawableObject {
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
		this.width = 416.5;
		this.height = 110.6;
		this.x = 50;
		this.y = 0;
		this.loadImageCache(this.IMAGES_HEALTH);
		this.setLifeOnStatusbar(100);
	}

	setLifeOnStatusbar(percentage) {
		this.statusLife = percentage;
		let i = this.resolveImageIndex();
		let path = this.IMAGES_HEALTH[i];
		this.img = this.ImageCache[path];
	}

	resolveImageIndex() {
		return this.statusLife == 100
			? 5
			: this.statusLife > 75
			? 4
			: this.statusLife > 55
			? 3
			: this.statusLife > 35
			? 2
			: this.statusLife > 0
			? 1
			: 0;
	}
}
