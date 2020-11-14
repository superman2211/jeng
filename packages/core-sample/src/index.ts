import { Engine2d } from '@e2d/core';
import main from './main';

const app = main();
app.start();

const engine = new Engine2d();
engine.root = app;
engine.fullscreen = true;
engine.play();

document.body.appendChild(engine.view);
document.body.style.margin = '0';
document.body.style.padding = '0';
