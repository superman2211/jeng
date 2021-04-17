export interface Update {
	enabled?: boolean;
	onUpdate?: (time: number) => void;
}

export namespace Update {
	export function isEnabled(component: Update) {
		return component.enabled ?? true;
	}

	export function update(component: Update, time: number) {
		if (component.onUpdate) {
			component.onUpdate(time);
		}
	}
}
