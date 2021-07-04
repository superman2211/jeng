import { CanvasTextExtension, Text } from '@jeng/text';
import { CanvasEngine } from '@jeng/canvas-engine';

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

// create simple app
engine.root = {
	type: 'text',
	text: 'Hello World!',
	x: 30,
	y: 30,
} as Text;
