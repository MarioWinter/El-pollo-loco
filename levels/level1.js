let cloudType1 = "./img/5_background/layers/4_clouds/2.png";
let cloudType2 = "./img/5_background/layers/4_clouds/2.png";

const level1 = new Level(
	[
		new Chicken(),
		new Chicken(),
		new Chicken(),
		new Endboss(),
		new Chicks(),
		new Chicks(),
		new Chicks(),
	],
	[
		new Cloud(cloudType1),
		new Cloud(cloudType2),
		new Cloud(cloudType1),
		new Cloud(cloudType2),
		new Cloud(cloudType1),
	],
	[
		new BackgroundObject(`./img/5_background/layers/air.png`, -2560),
		new BackgroundObject(
			`./img/5_background/layers/3_third_layer/2.png`,
			-2560
		),
		new BackgroundObject(
			`./img/5_background/layers/2_second_layer/2.png`,
			-2560
		),
		new BackgroundObject(
			`./img/5_background/layers/1_first_layer/2.png`,
			-2560
		),
		new BackgroundObject(`./img/5_background/layers/air.png`, 0),
		new BackgroundObject(
			`./img/5_background/layers/3_third_layer/1.png`,
			0
		),
		new BackgroundObject(
			`./img/5_background/layers/2_second_layer/1.png`,
			0
		),
		new BackgroundObject(
			`./img/5_background/layers/1_first_layer/1.png`,
			0
		),
		new BackgroundObject(`./img/5_background/layers/air.png`, 2560),
		new BackgroundObject(
			`./img/5_background/layers/3_third_layer/2.png`,
			2560
		),
		new BackgroundObject(
			`./img/5_background/layers/2_second_layer/2.png`,
			2560
		),
		new BackgroundObject(
			`./img/5_background/layers/1_first_layer/2.png`,
			2560
		),
		new BackgroundObject(`./img/5_background/layers/air.png`, 2560 * 2),
		new BackgroundObject(
			`./img/5_background/layers/3_third_layer/1.png`,
			2560 * 2
		),
		new BackgroundObject(
			`./img/5_background/layers/2_second_layer/1.png`,
			2560 * 2
		),
		new BackgroundObject(
			`./img/5_background/layers/1_first_layer/1.png`,
			2560 * 2
		),
		new BackgroundObject(`./img/5_background/layers/air.png`, 2560 * 3),
		new BackgroundObject(
			`./img/5_background/layers/3_third_layer/2.png`,
			2560 * 3
		),
		new BackgroundObject(
			`./img/5_background/layers/2_second_layer/2.png`,
			2560 * 3
		),
		new BackgroundObject(
			`./img/5_background/layers/1_first_layer/2.png`,
			2560 * 3
		),
		new BackgroundObject(`./img/5_background/layers/air.png`, 2560 * 4),
		new BackgroundObject(
			`./img/5_background/layers/3_third_layer/1.png`,
			2560 * 4
		),
		new BackgroundObject(
			`./img/5_background/layers/2_second_layer/1.png`,
			2560 * 4
		),
		new BackgroundObject(
			`./img/5_background/layers/1_first_layer/1.png`,
			2560 * 4
		),
		new BackgroundObject(`./img/5_background/layers/air.png`, 2560 * 5),
		new BackgroundObject(
			`./img/5_background/layers/3_third_layer/2.png`,
			2560 * 5
		),
		new BackgroundObject(
			`./img/5_background/layers/2_second_layer/2.png`,
			2560 * 5
		),
		new BackgroundObject(
			`./img/5_background/layers/1_first_layer/2.png`,
			2560 * 5
		),
	],
	[new Coins(), new Coins(), new Coins()]
);

// function endlessBackground() {
// 	let backround = [];
// 	let index = 2;
// 	let imgSize = -2560;
// 	for (let i = 1; i < 10; i++) {
// 		backround.push(
// 			new BackgroundObject(`./img/5_background/layers/air.png`, imgSize),
// 			new BackgroundObject(
// 				`./img/5_background/layers/3_third_layer/${index}.png`,
// 				imgSize
// 			),
// 			new BackgroundObject(
// 				`./img/5_background/layers/2_second_layer/${index}.png`,
// 				imgSize
// 			),
// 			new BackgroundObject(
// 				`./img/5_background/layers/1_first_layer/${index}.png`,
// 				imgSize
// 			)
// 		);

// 		imgSize = imgSize + 2560;
// 		if (index === 1) {
// 			index = 2;
// 		} else {
// 			index = 1;
// 		}
// 	}
// 	return backround;
// }
