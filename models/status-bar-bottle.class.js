class StatusBarBottle extends DrawableObject {
	IMAGES_BOTTLE = [
		"./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
		"./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
		"./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
		"./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
		"./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
		"./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
	];
	statusBottle = 100;

	constructor() {
		super();
		this.width = 416.5;
		this.height = 110.6;
		this.x = 50;
		this.y = 200;
		this.loadImageCache(this.IMAGES_BOTTLE);
		this.setBottleOnStatusbar(100);
	}

	setBottleOnStatusbar(percentage) {
		this.statusBottle = percentage;
		let i = this.resolveImageIndex();
		let path = this.IMAGES_BOTTLE[i];
		this.img = this.ImageCache[path];
	}

	resolveImageIndex() {
		return this.statusBottle > 80
			? 5
			: this.statusBottle > 60
			? 4
			: this.statusBottle > 40
			? 3
			: this.statusBottle > 20
			? 2
			: this.statusBottle > 0
			? 1
			: 0;
	}
}
