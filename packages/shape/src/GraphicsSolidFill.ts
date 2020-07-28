import { IGraphicsFill, IGraphicsData } from './interfaces';

export default class GraphicsSolidFill implements IGraphicsData, IGraphicsFill {
	color: number;
	alpha: number;

	constructor(color: number = 0, alpha: number = 1) {
		this.color = color;
		this.alpha = alpha;
	}
}
