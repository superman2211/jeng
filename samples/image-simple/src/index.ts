import { CanvasImageExtension, Image } from '@jeng/image';
import { CanvasEngine } from '@jeng/canvas-engine';
import { Container } from '@jeng/core';

// create engine
const engine = new CanvasEngine();
// add image extension
CanvasImageExtension.init(engine);
// set fullscreen mode
engine.screen.fullscreen = true;
// start update loop
engine.ticker.play();
// add engine view to page
document.body.appendChild(engine.platform.view);

// create container with image
engine.root = {
	type: 'container',
	children: {
		type: 'image',
		src: 'assets/championItems_sword_rare.png',
		pivotX: 0.5,
		pivotY: 0.5,
		x: 100,
		y: 100,
		rotation: 0,
		onUpdate(time: number) {
			// update every frame
			this.rotation! += time * 2;
		},
	} as Image,
} as Container;
