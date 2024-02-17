let canvas;
let world;
let windowWidth;
let windowHeight;
let keyboard = new Keyboard();

document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowRight") {
		keyboard.RIGHT = true;
		console.log("RIGHT:" + keyboard.RIGHT);
	}

	if (event.key === "ArrowLeft") {
		keyboard.LEFT = true;
		console.log("LEFT:" + keyboard.LEFT);
	}

	if (event.key === "ArrowUp") {
		keyboard.UP = true;
		console.log("UP:" + keyboard.UP);
	}

	if (event.key === "ArrowDown") {
		keyboard.DOWN = true;
		console.log("DOWN:" + keyboard.DOWN);
	}

	if (event.key === " ") {
		keyboard.SPACE = true;
		console.log("SPACE:" + keyboard.SPACE);
	}
});

document.addEventListener("keyup", function (event) {
	if (event.key === "ArrowRight") {
		keyboard.RIGHT = false;
		console.log("RIGHT:" + keyboard.RIGHT);
	}

	if (event.key === "ArrowLeft") {
		keyboard.LEFT = false;
		console.log("LEFT:" + keyboard.LEFT);
	}

	if (event.key === "ArrowUp") {
		keyboard.UP = false;
		console.log("UP:" + keyboard.UP);
	}

	if (event.key === "ArrowDown") {
		keyboard.DOWN = false;
		console.log("DOWN:" + keyboard.DOWN);
	}

	if (event.key === " ") {
		keyboard.SPACE = false;
		console.log("SPACE:" + keyboard.SPACE);
	}
});

function initGame() {
	canvas = document.getElementById("myCanvas");
	world = new World(canvas, keyboard);
	console.log(world.character);
	console.log(world.enemies);
}
