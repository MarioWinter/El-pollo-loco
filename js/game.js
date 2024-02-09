let canvas;
let ctx;
let character = new Character();

function initGame() {
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	console.log(character);
}
