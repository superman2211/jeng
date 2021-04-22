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

// create simple app
engine.root = {
	type: CONTAINER,
	children: [
		{
			type: TEXT,
			text: longText,
			textFormat: {
				size: 15,
				color: 0x229933,
				leading: 5,
			},
			border: 0x223399,
			x: 20,
			y: 20,
			width: 300,
			height: 150,
		} as Text,
		{
			type: TEXT,
			text: longText,
			textFormat: {
				size: 17,
				color: 0x223399,
				letterSpacing: 1,
				align: 'center',
				verticalAlign: 'middle',
			},
			border: 0x993322,
			x: 20,
			y: 180,
			width: 300,
			height: 150,
		} as Text,
		{
			type: TEXT,
			text: longText,
			textFormat: {
				size: 11,
				color: 0x993322,
				align: 'right',
				verticalAlign: 'bottom',
			},
			border: 0x229933,
			x: 20,
			y: 340,
			width: 300,
			height: 150,
		} as Text,
		{
			type: TEXT,
			text: longText,
			textFormat: {
				size: 13,
				color: 0,
				verticalAlign: 'middle',
			},
			wordWrap: false,
			border: 0x229933,
			background: 0xffddbb,
			x: 20,
			y: 500,
			width: 300,
			height: 150,
		} as Text,
		{
			type: TEXT,
			text: multilineText,
			textFormat: {
				size: 15,
				color: 0x0000ff,
			},
			wordWrap: false,
			border: 0x0000ff,
			x: 20,
			y: 660,
		} as Text,
	],
} as Container;
