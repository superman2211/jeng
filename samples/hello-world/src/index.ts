import { CanvasTextExtension, Text } from '@e2d/text';
import { CanvasEngine } from '@e2d/canvas-engine';

// engine
const engine = new CanvasEngine();
CanvasTextExtension.init(engine);
engine.screen.fullscreen = true;
engine.ticker.play();

// page
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.appendChild(engine.platform.view);

// app
engine.root = { type: 'text', text: 'Hello World!' } as Text;
