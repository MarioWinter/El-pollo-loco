let canvas;
let world;
let windowWidth;
let windowHeight;

function initGame() {
	canvas = document.getElementById("myCanvas");
	world = new World(canvas);
	adjustCanvasSize();
	console.log(world.character);
	console.log(world.enemies);
}

function adjustCanvasSize() {
	let windowWidth = window.innerWidth * 0.7;
	let windowHeight = windowWidth * (3 / 4);

	canvasFrame = document.getElementById("myCanvas");
	canvasFrame.width = windowWidth;
	canvasFrame.height = windowHeight;
}
document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("resize", adjustCanvasSize);
});
