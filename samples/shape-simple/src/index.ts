import {
	CanvasShapeExtension, PathData, Shape, SHAPE,
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
				fill: 0xff00ff,
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
				fill: { type: 'solid', color: 0xffff00, alpha: 1 },
				stroke: { fill: 0x0000ff, thickness: 5 },
			},
		} as Shape,
		triangle: {
			type: SHAPE,
			x: 10,
			y: 100,
			data: {
				type: 'path',
				data: [
					{ type: 'moveTo', x: 10, y: 10 },
					{ type: 'lineTo', x: 60, y: 90 },
					{ type: 'lineTo', x: 110, y: 10 },
					{ type: 'lineTo', x: 10, y: 10 },
				],
				fill: { type: 'solid', color: 0x00ffff, alpha: 1 },
				stroke: { fill: 0x009900, thickness: 2 },
			},
		} as Shape,
		star: {
			type: SHAPE,
			x: 30,
			y: 30,
			scale: 4,
			data: {
				type: 'path',
				data: 'M 46.296296,51.906272 L 31.916351,42.474649 L 17.502712,51.8547 L 22.029072,35.264028 L 8.654054,24.454438 L 25.831443,23.632463 L 31.978866,7.5717174 L 38.068716,23.65438 L 55.243051,24.537884 L 41.829396,35.299492 L 46.296296,51.906272 z ',
				fill: { type: 'solid', color: 0xff00ff, alpha: 0.5 },
				stroke: { fill: 0, thickness: 1 },
			},
		} as Shape,
		heart: {
			type: SHAPE,
			x: 30,
			y: 300,
			scale: 2,
			tint: { color: 0xff0000, value: 1 },
			data: {
				type: 'path',
				data: 'M 65,29 C 59,19 49,12 37,12 20,12 7,25 7,42 7,75 25,80 65,118 105,80 123,75 123,42 123,25 110,12 93,12 81,12 71,19 65,29 z',
				fill: { type: 'solid', color: 0x112233, alpha: 1 },
			},
		} as Shape,
		curvedLine: {
			type: SHAPE,
			x: 20,
			y: 150,
			scale: 2,
			data: [
				{
					type: 'path',
					data: 'M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80',
					stroke: { fill: 0, thickness: 9 },
				} as PathData,
				{
					type: 'path',
					data: 'M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80',
					stroke: { fill: 0xffff00, thickness: 3 },
				},
			],
		} as Shape,
	},
} as Container;
