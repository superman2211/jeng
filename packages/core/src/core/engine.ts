import { Component } from '../components/component';
import { Renderer } from '../features/renderer';
import { Updater } from '../features/updater';
import { Loading } from '../features/loading';
import { Screen } from '../features/screen';
import { Pointers } from '../features/pointers';
import { Ticker } from '../features/ticker';
import { Platform } from '../features/platform';
import { ContainerExtension } from '../components/container';
import { Debug } from '../features/debug';
import { Resources } from '../features/resources';
import { Components } from '../features/components';
import { LoaderExtension } from '../components/loader';
import { Keyboard } from '../features/keyboard';

export abstract class Engine {
	root?: Component;

	depth = 32;

	components: Components;
	updater: Updater;
	loading: Loading;
	renderer: Renderer;
	pointers: Pointers;
	keyboard: Keyboard;
	ticker: Ticker;
	debug: Debug;
	resources: Resources;

	abstract screen: Screen;
	abstract platform: Platform;

	constructor() {
		this.components = new Components(this);
		this.updater = new Updater(this);
		this.loading = new Loading(this);
		this.renderer = new Renderer(this);
		this.pointers = new Pointers(this);
		this.keyboard = new Keyboard(this);
		this.ticker = new Ticker(this);
		this.debug = new Debug(this);
		this.resources = new Resources(this);

		ContainerExtension.init(this);
		LoaderExtension.init(this);
	}
}
