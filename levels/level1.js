const level1 = new Level(
	[new Chicken(), new Chicken(), new Chicken()],
	[new Cloud()],
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
	]
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
