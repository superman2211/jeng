import { Entity, isEnabled } from '../components/Entity';
import { Resouces } from '../resources/Resources';

type UpdateHandler = (entity: Entity, context: Context) => void;

export interface ContextState {
}

export abstract class Context {
	time = 0;
	updateDepth = 0;
	updateEventEnabled = true;
	updateExtensionsEnabled = true;

	readonly components = new Map<string, UpdateHandler>();
	readonly extensions = new Map<string, UpdateHandler>();
	readonly resources = new Resouces();

	state: ContextState = {};

	update(entity: Entity) {
		if (this.updateDepth <= 0) {
			return;
		}

		if (isEnabled(entity)) {
			if (this.updateExtensionsEnabled) {
				this.extensions.forEach((handler, property) => {
					if ((entity as any)[property]) {
						handler(entity, this);
					}
				});
			}

			const componentHandler = this.components.get(entity.type);
			if (componentHandler) {
				if (this.updateEventEnabled && entity.onUpdate) {
					entity.onUpdate(this.time);
				}
				componentHandler(entity, this);
			} else {
				// eslint-disable-next-line no-console
				console.warn(`Type not found: ${entity.type}`);
			}
		}
	}

	abstract getState(entity: Entity): ContextState;
}
