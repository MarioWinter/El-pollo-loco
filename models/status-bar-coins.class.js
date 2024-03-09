class StatusBarCoins extends DrawableObject {
	IMAGES_COINS = [
		"./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
		"./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
		"./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
		"./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
		"./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
		"./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png",
	];
	statusCoins = 100;

	constructor() {
		super();
		this.width = 416.5;
		this.height = 110.6;
		this.x = 50;
		this.y = 100;
		this.loadImageCache(this.IMAGES_COINS);
		this.setCoinsOnStatusbar(100);
	}

	setCoinsOnStatusbar(percentage) {
		this.statusCoins = percentage;
		let i = this.resolveImageIndex();
		let path = this.IMAGES_COINS[i];
		this.img = this.ImageCache[path];
	}

	resolveImageIndex() {
		return this.statusCoins > 80
			? 5
			: this.statusCoins > 60
			? 4
			: this.statusCoins > 40
			? 3
			: this.statusCoins > 20
			? 2
			: this.statusCoins > 0
			? 1
			: 0;
	}
}
