import { IGraphicsData, IGraphicsPath } from './interfaces';
import { TriangleCulling } from './enums';

export default class GraphicsTrianglePath implements IGraphicsData, IGraphicsPath {
	culling: TriangleCulling;
	indices: number[];
	uvtData: number[];
	vertices: number[];

	constructor(
		vertices?: number[],
		indices?: number[],
		uvtData?: number[],
		culling: TriangleCulling = TriangleCulling.NONE,
	) {
		this.indices = indices ?? [];
		this.uvtData = uvtData ?? [];
		this.vertices = vertices ?? [];
		this.culling = culling;
	}
}
