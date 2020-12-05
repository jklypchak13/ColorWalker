import { randomColorRGB, randomColorHSL, random } from "./colors.js";
const MAX_MAG = 5;

export class Walker {
	constructor(x, y, ctx) {
		this.pos = [x, y];
		this.vel = [random(-1, 1), random(-1, 1)];
		this.acc = [random(-1, 1), random(-1, 1)];
		this.color = randomColorRGB();
		this.ctx = ctx;
	}

	/**
	 * Update this Walker, one iteration of the event loop
	 *
	 * @param {Number} canvasWidth the width of the current canvas
	 * @param {Number} canvasHeight the height of the current canvas
	 */
	update(canvasWidth, canvasHeight) {
		let boundaries = [canvasWidth, canvasHeight];

		/**
		 * Update the Movement Values
		 */
		let oldPos = this.pos;
		this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
		this.vel = [
			Math.max(-MAX_MAG, Math.min(MAX_MAG, this.vel[0] + this.acc[0])),
			Math.max(-MAX_MAG, Math.min(MAX_MAG, this.vel[1] + this.acc[1])),
		];
		this.acc = [random(-1, 1), random(-1, 1)];

		/**
		 * Check for Collisions with the Boundary
		 */
		for (let i = 0; i < this.pos.length; i++) {
			if (this.pos[i] < 0) {
				this.pos[i] = 0;
				this.vel[i] = 1;
			} else if (this.pos[i] > boundaries[i]) {
				this.pos[i] = boundaries[i];
				this.vel[i] = -1;
			}
		}

		/**
		 * Draw the movement trail
		 */
		drawLine(this.ctx, this.color, oldPos, this.pos);
	}
}

/**
 *	Draw a line between the two points
 *
 * @param {Context2D} ctx the context to draw to
 * @param {String} color the color of the line to draw
 * @param {Number} startPos the starting position of the line
 * @param {Number} endPos the ending position of the line
 */
function drawLine(ctx, color, startPos, endPos) {
	ctx.beginPath();
	ctx.moveTo(startPos[0], startPos[1]);
	ctx.lineTo(endPos[0], endPos[1]);
	ctx.strokeStyle = color;
	ctx.stroke();
	ctx.closePath();
}
