class StatusBarBottle extends DrawableObject {
	IMAGES_BOTTLE = [
		"./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
		"./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
		"./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
		"./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
		"./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
		"./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
	];
	statusBottle = 0;

	constructor() {
		super();
		this.width = 416.5;
		this.height = 110.6;
		this.x = 50;
		this.y = 200;
		this.loadImageCache(this.IMAGES_BOTTLE);
		this.setBottleOnStatusbar(0);
	}

	setBottleOnStatusbar(percentage) {
		this.statusBottle = percentage;
		let i = this.resolveImageIndex();
		let path = this.IMAGES_BOTTLE[i];
		this.img = this.ImageCache[path];
	}

	resolveImageIndex() {
		return this.statusBottle > 4
			? 5
			: this.statusBottle > 3
			? 4
			: this.statusBottle > 2
			? 3
			: this.statusBottle > 1
			? 2
			: this.statusBottle > 0
			? 1
			: 0;
	}
}
