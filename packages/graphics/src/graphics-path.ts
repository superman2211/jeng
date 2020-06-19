import { IGraphicsData, IGraphicsPath } from './interfaces';
import { GraphicsPathCommand, GraphicsPathWinding } from './enums';

export default class GraphicsPath implements IGraphicsData, IGraphicsPath {
	commands: GraphicsPathCommand[];
	data: number[];
	winding: GraphicsPathWinding;

	constructor(
		commands?: GraphicsPathCommand[],
		data?: number[],
		winding: GraphicsPathWinding = GraphicsPathWinding.EVEN_ODD,
	) {
		this.commands = commands || [];
		this.data = data || [];
		this.winding = winding;
	}

	moveTo(x: number, y: number) {
		this.commands.push(GraphicsPathCommand.MOVE_TO);
		this.data.push(x);
		this.data.push(y);
	}

	lineTo(x: number, y: number) {
		this.commands.push(GraphicsPathCommand.LINE_TO);
		this.data.push(x);
		this.data.push(y);
	}

	curveTo(
		controlX: number, controlY: number,
		anchorX: number, anchorY: number,
	) {
		this.commands.push(GraphicsPathCommand.CURVE_TO);
		this.data.push(controlX);
		this.data.push(controlY);
		this.data.push(anchorX);
		this.data.push(anchorY);
	}

	cubicCurveTo(
		controlX1: number, controlY1: number,
		controlX2: number, controlY2: number,
		anchorX: number, anchorY: number,
	) {
		this.commands.push(GraphicsPathCommand.CUBIC_CURVE_TO);
		this.data.push(controlX1);
		this.data.push(controlY1);
		this.data.push(controlX2);
		this.data.push(controlY2);
		this.data.push(anchorX);
		this.data.push(anchorY);
	}
}
