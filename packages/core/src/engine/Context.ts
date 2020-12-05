import { Entity, isEnabled } from '../components/Entity';
import { Resouces } from '../resources/Resources';

type UpdateHandler = (entity: Entity, context: Context) => void;

export interface ContextState {
}

export abstract class Context {
	time = 0;
	updateDepth = 0;
	updateEventEnabled = true;

	readonly updateHandlers = new Map<string, UpdateHandler>();
	readonly propertyHandlers = new Map<string, UpdateHandler>();
	readonly resources = new Resouces();

	state: ContextState = {};

	update(entity: Entity) {
		if (this.updateDepth <= 0) {
			return;
		}

		if (isEnabled(entity)) {
			const updateHandler = this.updateHandlers.get(entity.type);
			if (updateHandler) {
				if (this.updateEventEnabled && entity.onUpdate) {
					entity.onUpdate(this.time);
				}
				updateHandler(entity, this);
			} else {
				// eslint-disable-next-line no-console
				console.warn(`Type not found: ${entity.type}`);
			}
		}
	}

	abstract getState(entity: Entity): ContextState;
}
