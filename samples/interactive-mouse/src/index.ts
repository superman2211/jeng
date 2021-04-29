import { CanvasImageColorExtension, Image } from '@jeng/image';
import { CanvasEngine } from '@jeng/canvas-engine';
import { Container, MouseExtension } from '@jeng/core';

// create engine
const engine = new CanvasEngine();
// add image extension
CanvasImageColorExtension.init(engine);
// add mouse extension
MouseExtension.init(engine);
// set fullscreen mode
engine.screen.fullscreen = true;
// start update loop
engine.ticker.play();
// add engine view to page
document.body.appendChild(engine.platform.view);

const images = [
	'Artifacts_gift_0.png',
	'Artifacts_skullRing_mythic.png',
	'Artifacts3_brew_mythic.png',
	'Artifacts3_doll_mythic.png',
	'Artifacts3_mug_mythic.png',
	'Artifacts3_rose_mythic.png',
	'championItems_sword_rare.png',
];

// create container with image
engine.root = {
	type: 'container',
	children: images.map((image, index) => ({
		type: 'image',
		src: `assets/${image}`,
		x: 100 + 140 * (index % 2),
		y: 100 + 120 * (index / 2 | 0),
		pivotX: 0.5,
		pivotY: 0.5,
		onPointerOver() {
			this.brightness = 0.5;
		},
		onPointerOut() {
			this.brightness = 0;
		},
		onPointerDown() {
			this.scale = 0.95;
		},
		onPointerUp() {
			this.scale = 1;
		},
	} as Image)),
} as Container;
