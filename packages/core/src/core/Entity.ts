export interface Entity {
	type: string,
	enabled?: boolean,
}

export function isEnabled(entity: Entity) {
	return entity.enabled || entity.enabled === undefined;
}
