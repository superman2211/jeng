import {
	Container, Engine2d,
} from '@e2d/core';
import CustomEngine2d from './engine/CustomEngine2d';
import main from './main';

// application
const app = main();
app.start();

// basic engine
const engine = new Engine2d();
engine.root = app as any as Container;
engine.play();

// custom engine
const customEngine = new CustomEngine2d();
customEngine.fullscreen = false;
customEngine.height = 600;
customEngine.context.updateEventEnabled = false;
customEngine.root = app as any as Container;
customEngine.play();
customEngine.view.style.position = 'absolute';
customEngine.view.style.top = '0px';
customEngine.view.style.left = '400px';
customEngine.view.style.backgroundColor = 'black';

// page
document.body.appendChild(engine.view);
document.body.appendChild(customEngine.view);
document.body.style.margin = '0';
document.body.style.padding = '0';

// test pause
setTimeout(() => engine.pause(), 5000);
setTimeout(() => engine.play(), 10000);
