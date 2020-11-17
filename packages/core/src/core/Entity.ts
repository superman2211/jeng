export interface Entity {
	type: string;
	enabled?: boolean;
	onUpdate?: (time: number) => void;
	[key: string]: any;
}

export function isEnabled(entity: Entity) {
	return entity.enabled || entity.enabled === undefined;
}
