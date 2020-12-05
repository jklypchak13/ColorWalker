import { Walker } from "./walker.js";
import { random } from "./colors.js";
const BORDER = 20;
const WIDTH = window.innerWidth - BORDER;
const HEIGHT = window.innerHeight - BORDER;

/**
 * Resize the canavs to take up the whole browser
 */
function resizeCanvas() {
	canvas.width = window.innerWidth - BORDER;
	canvas.height = window.innerHeight - BORDER;
}

/**
 * The Draw Loop
 */
function eventLoop() {
	if (!pause) {
		for (let walker of walkers) {
			walker.update(
				window.innerWidth - BORDER,
				window.innerHeight - BORDER
			);
		}
	}
}

/**
 * Pause the Event Loop
 * @param {Event} e the event triggering the pause
 */
function pauseEventLoop(e) {
	pause = !pause;
}

/**
 * Set Up the State
 */
let pause = false;
let canvas = document.getElementById("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;
document.addEventListener("click", pauseEventLoop);
window.onresize = resizeCanvas;
let ctx = canvas.getContext("2d");
let walkers = [];
for (let i = 0; i < 100; i++) {
	walkers.push(new Walker(random(0, WIDTH), random(0, HEIGHT), ctx));
}

/**
 * Start Event Loop
 */
setInterval(eventLoop, 10);
