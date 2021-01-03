import { Container, Engine } from '@e2d/engine';
import { TWEEN, TweenExtension } from '@e2d/tween';
import { CanvasTextExtension, TEXT } from '@e2d/text';
import { CanvasSupport } from '@e2d/canvas-support';
import {
	CanvasImageExtension, IMAGE, ImageResource, resolveImage,
} from '@e2d/image';
import CustomResourceManager from './engine/CustomResourceManager';
import main from './main';
import CustomSupport from './engine/CustomSupport';

// application
const app = main();
app.start();

// basic engine
const engine = new Engine(new CanvasSupport());
engine.support.components.set(IMAGE, new CanvasImageExtension());
engine.support.components.set(TEXT, new CanvasTextExtension());
engine.support.extensions.set(TWEEN, new TweenExtension());
engine.support.resources.resolvers.add(resolveImage);
engine.root = app as any as Container;
engine.play();

// custom engine
const customEngine = new Engine(new CustomSupport());
customEngine.fullscreen = false;
customEngine.height = 600;
customEngine.support.updateEventEnabled = false;
customEngine.support.updateExtensionsEnabled = false;
customEngine.root = app as any as Container;
customEngine.play();
customEngine.support.view.style.position = 'absolute';
customEngine.support.view.style.top = '0px';
customEngine.support.view.style.left = '400px';

// page
document.body.appendChild(engine.support.view);
document.body.appendChild(customEngine.support.view);
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
