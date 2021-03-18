import { GraphicsStringReader } from '../data/string';
import { applyCommand } from './path';

const reader = new GraphicsStringReader();

export function applyString(data: string, context: CanvasRenderingContext2D): boolean {
	context.beginPath();

	reader.setPath(data);

	if (!reader.hasData()) {
		return false;
	}

	while (reader.hasData()) {
		reader.readNext();
		const command = reader.getCommand();
		if (command) {
			applyCommand(command, context);
		}
	}

	context.closePath();

	return true;
}
