import { Component, MouseExtension } from '@e2d/core';
import { TweenExtension } from '@e2d/tween';
import { CanvasTextExtension } from '@e2d/text';
import { CanvasImageColorExtension } from '@e2d/image';
import { CanvasShapeExtension } from '@e2d/shape';
import { CanvasEngine } from '@e2d/canvas-engine';
import { ImageResource } from '@e2d/resources';
import CustomResourceManager from './engine/resources';
import CustomEngine from './engine/engine';
import main from './main';
import {
	ANIMALIST, ANIMALIST_IMAGE, ARCHER, ARCHER_IMAGE, TEST_CANVAS,
} from './assets';

// page
document.body.style.margin = '0';
document.body.style.padding = '0';

// application
const app = main();
app.start();

// basic engine
const engine = new CanvasEngine();
CanvasImageColorExtension.init(engine);
CanvasTextExtension.init(engine);
CanvasShapeExtension.init(engine);
TweenExtension.init(engine);
MouseExtension.init(engine);
engine.root = app as any as Component;
engine.screen.fullscreen = true;
engine.ticker.play();
document.body.appendChild(engine.platform.view);

// test pause
setTimeout(() => engine.ticker.pause(), 5000);
setTimeout(() => engine.ticker.play(), 10000);

// custom engine
const customEngine = new CustomEngine();
customEngine.screen.fullscreen = false;
customEngine.screen.height = 600;
customEngine.updater.enabled = false;
customEngine.root = engine.root;
customEngine.ticker.play();
customEngine.platform.view.style.position = 'absolute';
customEngine.platform.view.style.top = '0px';
customEngine.platform.view.style.left = '600px';
document.body.appendChild(customEngine.platform.view);

// // set custom resource
engine.resources.resources.set(
	TEST_CANVAS,
	{
		asset: TEST_CANVAS,
		image: customEngine.platform.view,
		loaded: true,
	} as ImageResource,
);
customEngine.resources.resources.set(
	TEST_CANVAS,
	{
		asset: TEST_CANVAS,
		image: engine.platform.view,
		loaded: true,
	} as ImageResource,
);

// custom resource resolver
const resourceManager = new CustomResourceManager();
resourceManager.aliases.set(ARCHER.replace('id:', ''), ARCHER_IMAGE);
resourceManager.aliases.set(ANIMALIST.replace('id:', ''), ANIMALIST_IMAGE);
resourceManager.init(engine);
resourceManager.init(customEngine);
