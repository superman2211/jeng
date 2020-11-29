export interface Entity {
	type: string;
	enabled?: boolean;
	onUpdate?: (time: number) => void;
}

export function isEnabled(entity: Entity) {
	return entity.enabled ?? true;
}
