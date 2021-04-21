import { CanvasImageColorExtension, Image } from '@e2d/image';
import { CanvasEngine } from '@e2d/canvas-engine';
import { Container, Transform } from '@e2d/core';

// create engine
const engine = new CanvasEngine();
// add image extension
CanvasImageColorExtension.init(engine);
// set fullscreen mode
engine.screen.fullscreen = true;
// start update loop
engine.ticker.play();

// setup page
document.body.style.margin = '0';
document.body.style.padding = '0';
// add engine view to page
document.body.appendChild(engine.platform.view);

const ring = {
	type: 'image',
	src: 'assets/Rings_promo_mythic.png',
	scale: 0.4,
} as Image;

const transforms: Array<Transform> = [
	{},
	{ alpha: 0.2 },
	{ tint: { color: 0xff0000, value: 0.5 } },
	{ brightness: 0.5 },
	{ brightness: 0 },
	{ brightness: -0.5 },
];

// create container with image
engine.root = {
	type: 'container',
	children: transforms.map((transform, index) => ({
		...transform,
		type: 'container',
		children: ring,
		x: 20 + 150 * (index % 3),
		y: 20 + 120 * ((index / 3) | 0),
	} as Container)),
} as Container;
