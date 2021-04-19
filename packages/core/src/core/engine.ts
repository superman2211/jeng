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

export interface EngineModule {
	Components?: typeof Components;
	Screen?: typeof Screen;
	Platform?: typeof Platform;
	Updater?: typeof Updater;
	Loading?: typeof Loading;
	Renderer?: typeof Renderer;
	Pointers?: typeof Pointers;
	Ticker?: typeof Ticker;
	Debug?: typeof Debug;
	Resources?: typeof Resources;
}

export class Engine {
	root?: Component;

	depth = 32;

	components: Components;
	screen: Screen;
	platform: Platform;
	updater: Updater;
	loading: Loading;
	renderer: Renderer;
	pointers: Pointers;
	ticker: Ticker;
	debug: Debug;
	resources: Resources;

	constructor(module: EngineModule = {}) {
		module.Components = module.Components ?? Components;
		module.Screen = module.Screen ?? Screen;
		module.Platform = module.Platform ?? Platform;
		module.Updater = module.Updater ?? Updater;
		module.Loading = module.Loading ?? Loading;
		module.Renderer = module.Renderer ?? Renderer;
		module.Pointers = module.Pointers ?? Pointers;
		module.Ticker = module.Ticker ?? Ticker;
		module.Debug = module.Debug ?? Debug;
		module.Resources = module.Resources ?? Resources;

		this.components = new module.Components();
		this.screen = new module.Screen();
		this.platform = new module.Platform(this);
		this.updater = new module.Updater(this);
		this.loading = new module.Loading(this);
		this.renderer = new module.Renderer(this);
		this.pointers = new module.Pointers(this);
		this.ticker = new module.Ticker(this);
		this.debug = new module.Debug();
		this.resources = new module.Resources(this);

		ContainerExtension.init(this);
		LoaderExtension.init(this);
	}
}
