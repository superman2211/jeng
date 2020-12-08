export interface Entity {
	type: string;
	enabled?: boolean;
	onUpdate?: (time: number) => void;
}

export namespace Entity {
	export function isEnabled(entity: Entity) {
		return entity.enabled ?? true;
	}
}
