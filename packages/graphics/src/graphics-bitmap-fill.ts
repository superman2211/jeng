import { Matrix } from '@e2d/geom';
import { IGraphicsData, IGraphicsFill, IGraphicsBitmapData } from './interfaces';

export default class GraphicsBitmapFill implements IGraphicsData, IGraphicsFill {
	bitmapData: IGraphicsBitmapData | undefined;
	matrix: Matrix;
	repeat: boolean;
	smooth: boolean;

	constructor(
		bitmapData?: IGraphicsBitmapData,
		matrix?: Matrix,
		repeat: boolean = true,
		smooth: boolean = false,
	) {
		this.bitmapData = bitmapData;
		this.matrix = matrix || new Matrix();
		this.repeat = repeat;
		this.smooth = smooth;
	}
}
