import { Component, Engine } from '@e2d/engine';
import { applyTweenExtension } from '@e2d/tween';
import { applyCanvasTextExtension } from '@e2d/text';
import { applyCanvasImageExtension, ImageResource } from '@e2d/image';
import { CanvasSupport } from '@e2d/canvas-support';
import CustomResourceManager from './engine/resources';
import main from './main';
import CustomSupport from './engine/support';

// application
const app = main();
app.start();

// basic engine
const engine = new Engine(new CanvasSupport());
applyCanvasImageExtension(engine.support);
applyCanvasTextExtension(engine.support);
applyTweenExtension(engine.support);
engine.root = app as any as Component;
engine.play();
document.body.appendChild(engine.support.view);

// custom engine
const customEngine = new Engine(new CustomSupport());
customEngine.fullscreen = false;
customEngine.height = 600;
customEngine.updateEnabled = false;
customEngine.root = engine.root;
customEngine.play();
customEngine.support.view.style.position = 'absolute';
customEngine.support.view.style.top = '0px';
customEngine.support.view.style.left = '400px';
document.body.appendChild(customEngine.support.view);

// page
document.body.style.margin = '0';
document.body.style.padding = '0';

// test pause
setTimeout(() => engine.pause(), 5000);
setTimeout(() => engine.play(), 10000);

// set custom resource
const customAsset = 'test.canvas';
engine.support.resources.add(
	customAsset,
	{
		asset: customAsset,
		image: customEngine.support.view,
		loaded: true,
	} as ImageResource,
);
customEngine.support.resources.add(
	customAsset,
	{
		asset: customAsset,
		image: engine.support.view,
		loaded: true,
	} as ImageResource,
);

// custom resource resolver
const resourceManager = new CustomResourceManager();
resourceManager.addResource('sample', 'sample.png');
engine.support.resources.resolvers.add(resourceManager.resolve);
customEngine.support.resources.resolvers.add(resourceManager.resolve);
