import { CanvasTextExtension, Text } from '@e2d/text';
import { CanvasEngine } from '@e2d/canvas-engine';

// create engine
const engine = new CanvasEngine();
// add text extension
CanvasTextExtension.init(engine);
// set fullscreen mode
engine.screen.fullscreen = true;
// start update loop
engine.ticker.play();

// setup page
document.body.style.margin = '0';
document.body.style.padding = '0';
// add engine view to page
document.body.appendChild(engine.platform.view);

// create simple app
engine.root = { type: 'text', text: 'Hello World!' } as Text;
