import {
	CanvasShapeExtension, Shape, SHAPE,
} from '@jeng/shape';
import { CanvasEngine } from '@jeng/canvas-engine';
import { Container, CONTAINER } from '@jeng/core';

// create engine
const engine = new CanvasEngine();
// add shape extension
CanvasShapeExtension.init(engine);
// set fullscreen mode
engine.screen.fullscreen = true;
// start update loop
engine.ticker.play();
// add engine view to page
document.body.appendChild(engine.platform.view);

// create simple app with shapes
engine.root = {
	type: CONTAINER,
	children: {
		rectangle: {
			type: SHAPE,
			data: {
				type: 'rectangle',
				x: 20,
				y: 20,
				width: 100,
				height: 50,
				fill: {
					type: 'linear',
					beginX: 20,
					endX: 120,
					colors: [0xff0000, 0x00ff00, 0x0000ff],
					alphas: [1, 0.5, 0.8],
					ratios: [0, 0.3, 1],
				},
				stroke: 0x0000ff,
			},
		} as Shape,
		ellipse: {
			type: SHAPE,
			x: 100,
			y: -30,
			data: {
				type: 'ellipse',
				x: 100,
				y: 100,
				radius: 50,
				fill: {
					type: 'radial',
					beginX: 80,
					beginY: 80,
					endRadius: 80,
					colors: [0xffffff, 0xff0000, 0x0000ff],
					alphas: [1, 0.5, 0.8],
					ratios: [0, 0.3, 1],
				},
			},
		} as Shape,
		heart: {
			type: SHAPE,
			x: 30,
			y: 120,
			scale: 2,
			data: {
				type: 'path',
				data: 'M 65,29 C 59,19 49,12 37,12 20,12 7,25 7,42 7,75 25,80 65,118 105,80 123,75 123,42 123,25 110,12 93,12 81,12 71,19 65,29 z',
				fill: {
					type: 'bitmap',
					matrix: {
						a: 0.3,
						b: 0,
						c: 0,
						d: 0.3,
						tx: 30,
						ty: 30,
					},
					src: 'assets/discharge.png',
				},
				stroke: 0,
			},
		} as Shape,
	},
} as Container;
