import { Bounds } from '@e2d/geom';
import { PathCommand } from './path';
import { GraphicsString } from './string';
import { FillStyle, StrokeStyle } from './style';

export type GraphicsDataType = 'rectangle' | 'ellipse' | 'path';

export interface GraphicsData {
	type: GraphicsDataType;
	fill?: number | FillStyle;
	stroke?: number | StrokeStyle;
}

export interface RectangleData extends GraphicsData {
	x?: number,
	y?: number,
	width?: number,
	height?: number,
}

export namespace RectangleData {
	export function calculateBounds(data: RectangleData, bounds: Bounds) {
		const {
			x = 0, y = 0,
			width = 0, height = 0,
		} = data;

		Bounds.test(bounds, x, y);
		Bounds.test(bounds, x + width, y + height);
	}
}

export interface EllipseData extends GraphicsData {
	x?: number,
	y?: number,
	radius?: number,
	radiusX?: number,
	radiusY?: number,
}

export namespace EllipseData {
	export function calculateBounds(data: EllipseData, bounds: Bounds) {
		const {
			x = 0, y = 0,
			radius, radiusX = 0, radiusY = 0,
		} = data;

		const rx = radius ?? radiusX;
		const ry = radius ?? radiusY;
		Bounds.test(bounds, x - rx, y - ry);
		Bounds.test(bounds, x + rx, y + ry);
	}
}

export interface PathData extends GraphicsData {
	data: string | PathCommand[];
}

export namespace PathData {
	export function calculateBounds(pathData: PathData, bounds: Bounds) {
		const { data } = pathData;
		if (typeof data === 'string') {
			GraphicsString.calculateBounds(data, bounds);
		} else if (Array.isArray(data)) {
			for (let i = 0; i < data.length; i++) {
				const command = data[i];
				PathCommand.calculateBounds(command, bounds);
			}
		}
	}
}

export namespace GraphicsData {
	export function calculateBounds(data: GraphicsData, bounds: Bounds) {
		const { type } = data;
		switch (type) {
			case 'rectangle':
				RectangleData.calculateBounds(data as RectangleData, bounds);
				break;
			case 'ellipse':
				EllipseData.calculateBounds(data as EllipseData, bounds);
				break;
			case 'path':
				PathData.calculateBounds(data as PathData, bounds);
				break;
			default:
				break;
		}
	}
}
