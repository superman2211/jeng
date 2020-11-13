import { Engine2d } from '@e2d/core';
import main from './main';

const app = main();
app.start();

const canvas = document.createElement('canvas');
canvas.width = 400;
canvas.height = 300;
document.body.appendChild(canvas);

const engine = new Engine2d(canvas);
engine.root = app;

function update(time: number = 0): void {
	app.update();

	engine.update(time);

	requestAnimationFrame(update);
}

update();
