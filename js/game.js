let canvas;
let ctx;
let world = new World();

function initGame() {
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	console.log(world);
}
