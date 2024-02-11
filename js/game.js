let canvas;
let world;
let windowWidth;
let windowHeight;

document.addEventListener("DOMContentLoaded", function () {
	//window.addEventListener("resize", adjustCanvasSize);
});

function initGame() {
	canvas = document.getElementById("myCanvas");
	//adjustCanvasSize();
	world = new World(canvas);

	console.log(world.character);
	console.log(world.enemies);
}

function adjustCanvasSize() {
	windowWidth = canvas.clientWidth;
	windowHeight = canvas.clientHeight;
}
