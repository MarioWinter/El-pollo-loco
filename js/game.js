let canvas;
let world;

function initGame() {
	canvas = document.getElementById("myCanvas");
	world = new World(canvas);
	console.log(world.character);
	console.log(world.enemies);
}
