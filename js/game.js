let canvas;
let world;
let windowWidth;
let windowHeight;
let keyboard = new Keyboard();
let intervalIds = [];

document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowRight") {
		keyboard.RIGHT = true;
	}

	if (event.key === "ArrowLeft") {
		keyboard.LEFT = true;
	}

	if (event.key === "ArrowUp") {
		keyboard.UP = true;
	}

	if (event.key === "ArrowDown") {
		keyboard.DOWN = true;
	}

	if (event.key === " ") {
		keyboard.SPACE = true;
	}

	if (event.key === "d") {
		if (!keyboard.isPressedD) {
			keyboard.D = true;
		}
	}
});

document.addEventListener("keyup", function (event) {
	if (event.key === "ArrowRight") {
		keyboard.RIGHT = false;
	}

	if (event.key === "ArrowLeft") {
		keyboard.LEFT = false;
	}

	if (event.key === "ArrowUp") {
		keyboard.UP = false;
	}

	if (event.key === "ArrowDown") {
		keyboard.DOWN = false;
	}

	if (event.key === " ") {
		keyboard.SPACE = false;
	}

	if (event.key === "d") {
		keyboard.D = false;
		keyboard.isPressedD = false;
	}
});

function initGame() {
	canvas = document.getElementById("myCanvas");
	world = new World(canvas, keyboard);
}

function setGameInterval(fn, time) {
	let id = setInterval(fn, time);
	intervalIds.push(id);
}

function stopGame() {
	intervalIds.forEach(clearInterval);
}
