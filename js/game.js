let canvas;
let ctx;
let character = new Image();

function initGame() {
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	character.src = "./img/2_character_pepe/1_idle/idle/I-1.png";

	setTimeout(function () {
		ctx.drawImage(character, 20, 20, 50, 150);
	}, 2000);
}
