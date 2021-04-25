import { GraphicsStringReader } from '../data/string';
import { applyCommand } from './path';

const reader = new GraphicsStringReader();

export function applyString(data: string, hasFill: boolean, context: CanvasRenderingContext2D): boolean {
	if (!data.length) {
		return false;
	}

	context.beginPath();

	reader.setPath(data);
	while (reader.readNext()) {
		const command = reader.getCommand();
		if (command) {
			applyCommand(command, context);
		}
	}

	if (hasFill) {
		context.closePath();
	}
	return true;
}
