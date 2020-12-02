import {
	Container, Engine2d, ImageResource,
} from '@e2d/core';
import CustomEngine2d from './engine/CustomEngine2d';
import CustomResourceManager from './engine/CustomResourceManager';
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

// page
document.body.appendChild(engine.view);
document.body.appendChild(customEngine.view);
document.body.style.margin = '0';
document.body.style.padding = '0';

// test pause
setTimeout(() => engine.pause(), 5000);
setTimeout(() => engine.play(), 10000);

// set custom resource
const customAsset = 'test.canvas';
engine.context.resources.add(
	customAsset,
	{
		asset: customAsset,
		image: customEngine.view,
	} as ImageResource,
);
customEngine.context.resources.add(
	customAsset,
	{
		asset: customAsset,
		image: engine.view,
	} as ImageResource,
);

// custom resource resolver
const resourceManager = new CustomResourceManager();
resourceManager.addResource('cat', 'sample.png');

engine.context.resources.resolvers.add(resourceManager.resolve);
customEngine.context.resources.resolvers.add(resourceManager.resolve);
