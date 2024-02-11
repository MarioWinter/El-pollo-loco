let canvas;
let world;
let windowWidth;
let windowHeight;

document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("resize", adjustCanvasSize);
	initGame();
});

function initGame() {
	canvas = document.getElementById("myCanvas");
	adjustCanvasSize();
	world = new World(canvas);

	console.log(world.character);
	console.log(world.enemies);
}

function adjustCanvasSize() {
	windowWidth = window.innerWidth * 0.7;
	windowHeight = windowWidth * (3 / 4);
	canvasFrame = document.getElementById("myCanvas");
	canvasFrame.width = windowWidth;
	canvasFrame.height = windowHeight;
}
