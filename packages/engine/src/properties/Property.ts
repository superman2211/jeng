import { Component } from '../components/Component';
import { UpdateContext } from '../engine/Context';

export interface PropertyExtension {
	update(component: Component, context: UpdateContext): void;
}
