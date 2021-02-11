import {
	Pivot, RenderContext, Source, Support,
} from '@e2d/engine';
import { CanvasSupport } from '@e2d/canvas-support';
import { ColorTransform, Matrix, Rectangle } from '@e2d/geom';
import { ImageResource } from './resources';
import { applyImageExtension, IMAGE, Image } from './image';

let tempContext: CanvasRenderingContext2D;

function isDefaultColorTransform(ct: ColorTransform): boolean {
	return ct.redMultiplier === 1
		&& ct.greenMultiplier === 1
		&& ct.blueMultiplier === 1
		&& ct.redOffset === 0
		&& ct.greenOffset === 0
		&& ct.blueOffset === 0
		&& ct.alphaOffset === 0;
}

function updateTempContext(context: CanvasRenderingContext2D) {
	if (!tempContext) {
		const canvas = document.createElement('canvas');
		tempContext = canvas.getContext('2d') as CanvasRenderingContext2D;
	}

	if (tempContext.canvas.width !== context.canvas.width) {
		tempContext.canvas.width = context.canvas.width;
	}

	if (tempContext.canvas.height !== context.canvas.height) {
		tempContext.canvas.height = context.canvas.height;
	}
}

export function renderCanvasColor(image: Image, context: RenderContext) {
	const resource = Source.getResource(image, context) as ImageResource;
	if (!resource?.loaded || !resource?.image) {
		return;
	}

	const { colorTransform } = context;
	if (colorTransform.alphaMultiplier <= 0) {
		return;
	}

	const { support, matrix } = context;
	const { context2d } = support as CanvasSupport;

	const { width, height } = resource.image;
	const x = Pivot.getX(image, width);
	const y = Pivot.getY(image, height);

	if (isDefaultColorTransform(colorTransform)) {
		context2d.setTransform(
			matrix.a,
			matrix.b,
			matrix.c,
			matrix.d,
			matrix.tx,
			matrix.ty,
		);

		context2d.globalAlpha = colorTransform.alphaMultiplier;
		context2d.drawImage(resource.image, x, y);
	} else {
		updateTempContext(context2d);

		const bounds = Matrix.transformBounds(matrix, {
			x, y, width, height,
		});

		if (Rectangle.isEmpty(bounds)) {
			return;
		}

		tempContext.clearRect(bounds.x, bounds.y, bounds.width, bounds.height);
		tempContext.setTransform(
			matrix.a,
			matrix.b,
			matrix.c,
			matrix.d,
			matrix.tx,
			matrix.ty,
		);
		tempContext.drawImage(resource.image, x, y);

		const imageData = tempContext.getImageData(bounds.x, bounds.y, bounds.width, bounds.height);

		const rm = colorTransform.redMultiplier;
		const gm = colorTransform.greenMultiplier;
		const bm = colorTransform.blueMultiplier;
		const am = colorTransform.alphaMultiplier;

		const ro = colorTransform.redOffset;
		const go = colorTransform.greenOffset;
		const bo = colorTransform.blueOffset;
		const ao = colorTransform.alphaOffset;

		const { data } = imageData;
		const { length } = data;

		for (let i = 0; i < length;) {
			data[i] = data[i++] * rm + ro;
			data[i] = data[i++] * gm + go;
			data[i] = data[i++] * bm + bo;
			data[i] = data[i++] * am + ao;
		}

		tempContext.putImageData(imageData, bounds.x, bounds.y);

		context2d.setTransform();
		context2d.globalAlpha = 1;
		context2d.drawImage(
			tempContext.canvas,
			bounds.x, bounds.y, bounds.width, bounds.height,
			bounds.x, bounds.y, bounds.width, bounds.height,
		);
	}
}

export function applyCanvasImageColorExtension(support: Support) {
	applyImageExtension(support);
	support.renderHandlers.set(IMAGE, renderCanvasColor);
}
