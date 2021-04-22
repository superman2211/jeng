import { CanvasImageExtension, Image } from '@jeng/image';
import { CanvasEngine } from '@jeng/canvas-engine';
import { ComponentsMap, Container, MouseExtension } from '@jeng/core';

// create engine
const engine = new CanvasEngine();
// add image extension
CanvasImageExtension.init(engine);
// add mouse control extension
MouseExtension.init(engine);
// set fullscreen mode
engine.screen.fullscreen = true;
// start update loop
engine.ticker.play();
// add engine view to page
document.body.appendChild(engine.platform.view);

// create container with images
engine.root = {
	type: 'container',
	// position images
	children: {
		knight: {
			type: 'image',
			src: 'assets/Knight1_Defender_image.png',
			scale: 0.7,
			x: 20,
			y: 20,
		} as Image,
		shield: {
			type: 'image',
			src: 'assets/championItems_shield_mythic_secondary.png',
			visible: true,
			scaleX: 1.2,
			scaleY: 1.3,
			x: 55,
			y: 70,
		} as Image,
		mace: {
			type: 'image',
			src: 'assets/defenderItems_mace_mythic_primary.png',
			visible: true,
			scale: 1.1,
			x: 170,
			y: 67,
			rotation: 0.55,
		} as Image,
	},
	onPointerDown() {
		const { mace, shield } = this.children as ComponentsMap;
		mace.visible = !mace.visible;
		shield.visible = !shield.visible;
	},
} as Container;
