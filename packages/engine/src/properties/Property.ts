import { Component } from '../components/Component';
import { Context } from '../engine/Context';

export interface PropertyExtension {
	update(component: Component, context: Context): void;
}
