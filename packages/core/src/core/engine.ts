/* eslint-disable import/prefer-default-export */
import { Component } from '../components/component';
import { Renderer } from '../features/renderer';
import { Updater } from '../features/updater';
import { Screen } from '../features/screen';
import { Pointer } from '../features/pointer';
import { Ticker } from '../features/ticker';
import { Platform } from '../features/platform';
import { ContainerExtension } from '../components/container';

export class Engine {
	root?: Component;

	depth = 32;

	screen: Screen;
	platform: Platform;
	updater: Updater;
	renderer: Renderer;
	pointer: Pointer;
	ticker: Ticker;

	constructor() {
		this.screen = new Screen();
		this.platform = new Platform(this);
		this.updater = new Updater(this);
		this.renderer = new Renderer(this);
		this.pointer = new Pointer(this);
		this.ticker = new Ticker(this);

		ContainerExtension.init(this);
	}
}
