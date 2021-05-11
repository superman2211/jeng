import { Component } from '../components/component';
import { Engine } from '../core/engine';

export type PropertyHandler = (component: Component, engine: Engine) => void;
export type RenderHandler = (component: Component, engine: Engine) => void;
export type UpdateHandler = (component: Component, engine: Engine) => void;
export type HitTestHandler = (component: Component, engine: Engine) => boolean;
export type KeyTestHandler = (component: Component, engine: Engine) => void;
export type LoadedHandler = (component: Component, engine: Engine) => void;

export class Components {
	properties = new Map<string, PropertyHandler>();
	render = new Map<string, RenderHandler>();
	update = new Map<string, UpdateHandler>();
	hitTest = new Map<string, HitTestHandler>();
	keyTest = new Map<string, KeyTestHandler>();
	loaded = new Map<string, LoadedHandler>();
}
