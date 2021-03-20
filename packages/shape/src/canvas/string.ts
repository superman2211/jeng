import { GraphicsStringReader } from '../data/string';
import { applyCommand } from './path';

const reader = new GraphicsStringReader();

export function applyString(data: string, context: CanvasRenderingContext2D): boolean {
	reader.setPath(data);

	context.beginPath();

	while (reader.readNext()) {
		const command = reader.getCommand();
		if (command) {
			applyCommand(command, context);
		}
	}

	context.closePath();

	return true;
}
