import { Container, Engine2d, IMAGE } from '@e2d/core';
import updateImage from './extensions/Image';
import main from './main';

const app = main();
app.start();

// first engine
const engine = new Engine2d();
engine.root = app as any as Container;
engine.play();

// second engine
const engineMini = new Engine2d();
engineMini.fullscreen = false;
engineMini.height = 500;
engineMini.context.updateEventEnabled = false;
engineMini.context.updateHandlers.set(IMAGE, updateImage);
engineMini.root = app as any as Container;
engineMini.play();
engineMini.view.style.position = 'absolute';
engineMini.view.style.top = '0px';
engineMini.view.style.left = '400px';
engineMini.view.style.backgroundColor = 'black';

// page
document.body.appendChild(engine.view);
document.body.appendChild(engineMini.view);
document.body.style.margin = '0';
document.body.style.padding = '0';

setTimeout(() => engine.pause(), 5000);
setTimeout(() => engine.play(), 10000);
