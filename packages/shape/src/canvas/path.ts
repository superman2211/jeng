import {
	CubicCurveTo, CurveTo, LineTo, MoveTo, PathCommand,
} from '../data/path';

export function applyCommand(command: PathCommand, context: CanvasRenderingContext2D) {
	const { type } = command;
	switch (type) {
		case 'moveTo':
			const moveTo = command as MoveTo;
			context.moveTo(moveTo.x ?? 0, moveTo.y ?? 0);
			break;

		case 'lineTo':
			const lineTo = command as LineTo;
			context.lineTo(lineTo.x ?? 0, lineTo.y ?? 0);
			break;

		case 'curveTo':
			const curveTo = command as CurveTo;
			context.quadraticCurveTo(
				curveTo.cx ?? 0, curveTo.cy ?? 0,
				curveTo.x ?? 0, curveTo.y ?? 0,
			);
			break;

		case 'cubicCurveTo':
			const cubicCurveTo = command as CubicCurveTo;
			context.bezierCurveTo(
				cubicCurveTo.cx ?? 0, cubicCurveTo.cy ?? 0,
				cubicCurveTo.sx ?? 0, cubicCurveTo.sy ?? 0,
				cubicCurveTo.x ?? 0, cubicCurveTo.y ?? 0,
			);
			break;

		default:
			break;
	}
}

export function applyPath(data: PathCommand[], context: CanvasRenderingContext2D): boolean {
	if (!data.length) {
		return false;
	}

	context.beginPath();
	for (let i = 0; i < data.length; i++) {
		const command = data[i];
		applyCommand(command, context);
	}
	context.closePath();
	return true;
}
