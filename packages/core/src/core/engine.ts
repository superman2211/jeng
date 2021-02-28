import { Component } from '../components/component';
import { Renderer } from '../features/renderer';
import { Updater } from '../features/updater';
import { Screen } from '../features/screen';
import { PointerEvents } from '../features/pointer-events';
import { Ticker } from '../features/ticker';
import { Platform } from '../features/platform';
import { ContainerExtension } from '../components/container';
import { Debug } from '../features/debug';
import { Resources } from '../features/resources';
import { Components } from '../features/components';

export class Engine {
	root?: Component;

	depth = 32;

	components: Components;
	screen: Screen;
	platform: Platform;
	updater: Updater;
	renderer: Renderer;
	pointerEvents: PointerEvents;
	ticker: Ticker;
	debug: Debug;
	resources: Resources;

	constructor() {
		this.components = new Components();
		this.screen = new Screen();
		this.platform = new Platform(this);
		this.updater = new Updater(this);
		this.renderer = new Renderer(this);
		this.pointerEvents = new PointerEvents(this);
		this.ticker = new Ticker(this);
		this.debug = new Debug();
		this.resources = new Resources();

		ContainerExtension.init(this);
	}
}
