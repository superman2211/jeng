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

export interface EngineModule {
	Components?: typeof Components;
	Screen?: typeof Screen;
	Platform?: typeof Platform;
	Updater?: typeof Updater;
	Renderer?: typeof Renderer;
	PointerEvents?: typeof PointerEvents;
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
	renderer: Renderer;
	pointerEvents: PointerEvents;
	ticker: Ticker;
	debug: Debug;
	resources: Resources;

	constructor(module: EngineModule = {}) {
		module.Components = module.Components ?? Components;
		module.Screen = module.Screen ?? Screen;
		module.Platform = module.Platform ?? Platform;
		module.Updater = module.Updater ?? Updater;
		module.Renderer = module.Renderer ?? Renderer;
		module.PointerEvents = module.PointerEvents ?? PointerEvents;
		module.Ticker = module.Ticker ?? Ticker;
		module.Debug = module.Debug ?? Debug;
		module.Resources = module.Resources ?? Resources;

		this.components = new module.Components();
		this.screen = new module.Screen();
		this.platform = new module.Platform(this);
		this.updater = new module.Updater(this);
		this.renderer = new module.Renderer(this);
		this.pointerEvents = new module.PointerEvents(this);
		this.ticker = new module.Ticker(this);
		this.debug = new module.Debug();
		this.resources = new module.Resources(this);

		ContainerExtension.init(this);
	}
}
