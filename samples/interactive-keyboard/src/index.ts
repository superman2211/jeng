import { CanvasImageExtension, Image } from '@jeng/image';
import { CanvasEngine } from '@jeng/canvas-engine';
import { KeyEvent, Container } from '@jeng/core';
import { Point } from '@jeng/geom';
import { KeyboardExtension } from '@jeng/web';

// create engine
const engine = new CanvasEngine();
// add image extension
CanvasImageExtension.init(engine);
// add mouse control extension
KeyboardExtension.init(engine);
// set fullscreen mode
engine.screen.fullscreen = true;
// start update loop
engine.ticker.play();
// add engine view to page
document.body.appendChild(engine.platform.view);

// unit speed
const unitSpeed = 100;

// unit skins
const skins = [
	'assets/Archer3_hunter_image.png',
	'assets/Archer5_ranger_image.png',
];

// unit extension
interface Unit extends Image {
	speed: Point;
}

// create container with images
engine.root = {
	type: 'container',
	children: {
		archer: {
			type: 'image',
			src: skins[0],
			pivotX: 0.5,
			pivotY: 0.5,
			x: engine.screen.getWidth() / 2,
			y: engine.screen.getHeight() / 2,
			speed: {
				x: 0,
				y: 0,
			},
			onUpdate(time: number) {
				this.x! += this.speed.x * time;
				this.y! += this.speed.y * time;
			},
			onKeyDown(e: KeyEvent) {
				switch (e.code.toLocaleLowerCase()) {
					case 'space':
					case 'enter':
						let index = skins.indexOf(this.src!);
						index++;
						if (index >= skins.length) {
							index = 0;
						}
						this.src = skins[index];
						break;

					case 'arrowleft':
						this.speed.x = -unitSpeed;
						break;

					case 'arrowright':
						this.speed.x = unitSpeed;
						break;

					case 'arrowup':
						this.speed.y = -unitSpeed;
						break;

					case 'arrowdown':
						this.speed.y = unitSpeed;
						break;

					default:
				}
			},
			onKeyUp(e: KeyEvent) {
				switch (e.code.toLocaleLowerCase()) {
					case 'arrowleft':
					case 'arrowright':
						this.speed.x = 0;
						break;

					case 'arrowup':
					case 'arrowdown':
						this.speed.y = 0;
						break;

					default:
				}
			},
		} as Unit,
	},
} as Container;
