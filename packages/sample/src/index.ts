import { Component, Engine, applyMouseSupportExtension } from '@e2d/engine';
import { applyTweenExtension } from '@e2d/tween';
import { applyCanvasTextExtension } from '@e2d/text';
import { applyCanvasImageColorExtension } from '@e2d/image';
import { applyCanvasShapeExtension } from '@e2d/shape';
import { CanvasSupport } from '@e2d/canvas-support';
import { ImageResource } from '@e2d/resources';
import CustomResourceManager from './engine/resources';
import main from './main';
import CustomSupport from './engine/support';
import {
	ANIMALIST, ANIMALIST_IMAGE, ARCHER, ARCHER_IMAGE, TEST_CANVAS,
} from './assets';

// application
const app = main();
app.start();

// basic engine
const engine = new Engine(new CanvasSupport());
applyCanvasImageColorExtension(engine.support);
applyCanvasTextExtension(engine.support);
applyCanvasShapeExtension(engine.support);
applyTweenExtension(engine.support);
applyMouseSupportExtension(engine);
engine.root = app as any as Component;
engine.play();
document.body.appendChild(engine.support.element);

// custom engine
const customEngine = new Engine(new CustomSupport());
customEngine.fullscreen = false;
customEngine.height = 600;
customEngine.updateEnabled = false;
customEngine.root = engine.root;
customEngine.play();
customEngine.support.element.style.position = 'absolute';
customEngine.support.element.style.top = '0px';
customEngine.support.element.style.left = '600px';
document.body.appendChild(customEngine.support.element);

// page
document.body.style.margin = '0';
document.body.style.padding = '0';

// test pause
setTimeout(() => engine.pause(), 5000);
setTimeout(() => engine.play(), 10000);

// set custom resource
engine.support.resources.add(
	TEST_CANVAS,
	{
		asset: TEST_CANVAS,
		image: customEngine.support.element,
		loaded: true,
	} as ImageResource,
);
customEngine.support.resources.add(
	TEST_CANVAS,
	{
		asset: TEST_CANVAS,
		image: engine.support.element,
		loaded: true,
	} as ImageResource,
);

// custom resource resolver
const resourceManager = new CustomResourceManager();
resourceManager.aliases.set(ARCHER.replace('id:', ''), ARCHER_IMAGE);
resourceManager.aliases.set(ANIMALIST.replace('id:', ''), ANIMALIST_IMAGE);
engine.support.resources.resolvers.add(resourceManager.resolve);
customEngine.support.resources.resolvers.add(resourceManager.resolve);
