import {
	CanvasTextExtension, Text, TextMetrics, TEXT,
} from '@jeng/text';
import { CanvasEngine } from '@jeng/canvas-engine';
import { Container, CONTAINER } from '@jeng/core';

// create engine
const engine = new CanvasEngine();
// add text extension
CanvasTextExtension.init(engine);
// set fullscreen mode
engine.screen.fullscreen = true;
// start update loop
engine.ticker.play();
// add engine view to page
document.body.appendChild(engine.platform.view);

// positioning texts
function positionTexts(texts: Array<Text>) {
	const x = 20;
	let y = 20;
	texts.forEach((text) => {
		text.x = x;
		text.y = y;
		const height = text.height ?? TextMetrics.getMetrics(text)?.height ?? 0;
		y += 10 + height;
	});
	return texts;
}

// simple text
const text = 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing\nelit.';

// create simple app
const app: Container = {
	type: CONTAINER,
	children: positionTexts([
		{
			type: TEXT,
			text,
			format: {
				font: 'arial',
				size: 20,
				color: 0x229933,
			},
			border: 0x229933,
		} as Text,
		{
			type: TEXT,
			text,
			format: {
				font: 'arial',
				size: 20,
				color: 0x229933,
				italic: true,
			},
			border: 0x229933,
		} as Text,
		{
			type: TEXT,
			text,
			format: {
				font: 'arial',
				size: 20,
				color: 0x229933,
				bold: true,
			},
			border: 0x229933,
		} as Text,
		{
			type: TEXT,
			text,
			format: {
				font: 'times new roman',
				size: 20,
				color: 0x332299,
			},
			border: 0x332299,
		} as Text,
		{
			type: TEXT,
			text,
			format: {
				font: 'times new roman',
				size: 20,
				color: 0x332299,
				italic: true,
			},
			border: 0x332299,
		} as Text,
		{
			type: TEXT,
			text,
			format: {
				font: 'times new roman',
				size: 20,
				color: 0x332299,
				bold: true,
			},
			border: 0x332299,
		} as Text,
		{
			type: TEXT,
			text,
			format: {
				font: 'arial',
				size: 20,
				color: 0x993322,
				align: 'center',
				letterSpacing: 1,
				leading: 1,
			},
			border: 0x993322,
		} as Text,
	]),
};

// add app graph to engine
engine.root = app;
