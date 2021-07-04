import { CanvasTextExtension, Text, TEXT } from '@jeng/text';
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

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet ultricies nibh, at mattis sem volutpat et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
const multilineText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nPhasellus imperdiet ultricies nibh, at mattis sem volutpat et.';

// positioning texts
function positionTexts(texts: Array<Text>) {
	const x = 20;
	let y = 20;
	texts.forEach((text) => {
		text.x = x;
		text.y = y;
		y += 10 + (text.height ?? 0);
	});
	return texts;
}

// create simple app
const app: Container = {
	type: CONTAINER,
	children: positionTexts([
		{
			type: TEXT,
			text: [
				{
					text: 'Big text. ', size: 25, color: 0xff0000, verticalAlign: 'bottom',
				},
				{ text: 'Middle text. ', verticalAlign: 'bottom' },
				{
					text: 'Little text.', size: 10, verticalAlign: 'bottom', color: 0x0000ff,
				},
				'\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.',
			],
			format: {
				size: 15,
				color: 0x229933,
				leading: 5,
			},
			wordWrap: true,
			border: 0x223399,
			width: 300,
			height: 100,
		} as Text,
		{
			type: TEXT,
			text: [
				{ text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. LEFT\n\n', align: 'left' },
				{ text: 'Phasellus imperdiet ultricies nibh, at mattis sem volutpat et. CENTER\n\n', align: 'center', font: 'times new roman' },
				{ text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. RIGHT', align: 'right' },
			],
			format: {
				size: 13,
				color: 0x223399,
				letterSpacing: 1,
				verticalAlign: 'middle',
			},
			wordWrap: true,
			border: 0x993322,
			width: 300,
			height: 150,
		} as Text,
		{
			type: TEXT,
			text: longText,
			format: {
				size: 11,
				color: 0x993322,
				align: 'right',
				verticalAlign: 'bottom',
			},
			wordWrap: true,
			border: 0x229933,
			width: 300,
			height: 70,
		} as Text,
		{
			type: TEXT,
			text: longText,
			format: {
				size: 13,
				color: 0,
				verticalAlign: 'middle',
			},
			border: 0x229933,
			background: 0xffddbb,
			width: 300,
			height: 100,
		} as Text,
		{
			type: TEXT,
			text: `AUTO SIZE\n${multilineText}`,
			format: {
				size: 15,
				color: 0x0000ff,
			},
			border: 0x0000ff,
		} as Text,
	]),
};

// add app graph to engine
engine.root = app;
