import { IGraphicsData, IGraphicsFill, IGraphicsStroke } from './interfaces';
import { JointStyle, CapsStyle, LineScaleMode } from './enums';

export default class GraphicsStroke implements IGraphicsData, IGraphicsStroke {
	caps: CapsStyle;
	fill: IGraphicsFill | undefined;
	joints: JointStyle;
	miterLimit: number;
	pixelHinting: boolean;
	scaleMode: string;
	thickness: number;

	constructor(
		thickness: number = 0,
		pixelHinting: boolean = false,
		scaleMode: LineScaleMode = LineScaleMode.NONE,
		caps: CapsStyle = CapsStyle.BUTT,
		joints: JointStyle = JointStyle.ROUND,
		miterLimit: number = 3,
		fill?: IGraphicsFill,
	) {
		this.thickness = thickness;
		this.pixelHinting = pixelHinting;
		this.scaleMode = scaleMode;
		this.caps = caps;
		this.joints = joints;
		this.miterLimit = miterLimit;
		this.fill = fill;
	}
}
