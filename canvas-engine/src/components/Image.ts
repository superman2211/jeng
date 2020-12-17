import { Context, Entity } from '@e2d/core';
import { ColorTransform, Transform, Matrix } from '@e2d/geom';
import { CanvasContext, CanvasContextState } from '../engine/CanvasContext';
import { ImageResource } from '../resources/ImageResource';

const tempCanvas = document.createElement('canvas') as HTMLCanvasElement;
const tempContext = tempCanvas.getContext('2d') as CanvasRenderingContext2D;

function isDefaultColorTransform(ct: ColorTransform): boolean {
	return ct.redMultiplier === 1
		&& ct.greenMultiplier === 1
		&& ct.blueMultiplier === 1
		&& ct.redOffset === 0
		&& ct.greenOffset === 0
		&& ct.blueOffset === 0
		&& ct.alphaOffset === 0;
}

export const IMAGE = 'image';

export interface Image extends Entity, Transform {
	src?: string,
}

export function updateImage(image: Image, context: Context): void {
	if (image.src) {
		const canvasContext = context as CanvasContext;
		const resource: ImageResource = context.resources.get(image.src) as ImageResource;

		if (!resource?.image) {
			return;
		}

		const state = canvasContext.getState(image) as CanvasContextState;
		const { matrix, colorTransform } = state;
		const renderingContext = canvasContext.context;

		if (isDefaultColorTransform(colorTransform)) {
			if (colorTransform.alphaMultiplier <= 0) {
				return;
			}

			renderingContext.setTransform(
				matrix.a,
				matrix.b,
				matrix.c,
				matrix.d,
				matrix.tx,
				matrix.ty,
			);
			renderingContext.globalAlpha = colorTransform.alphaMultiplier;
			renderingContext.drawImage(resource.image, 0, 0);
		} else {
			if (colorTransform.alphaMultiplier <= 0 && colorTransform.alphaOffset <= 0) {
				return;
			}

			const bounds = Matrix.transformBounds(matrix, {
				x: 0,
				y: 0,
				width: resource.image.width,
				height: resource.image.height,
			});

			if (bounds.width === 0 || bounds.height === 0) {
				return;
			}

			if (tempCanvas.width !== canvasContext.canvas.width) {
				tempCanvas.width = canvasContext.canvas.width;
			}
			if (tempCanvas.height !== canvasContext.canvas.height) {
				tempCanvas.height = canvasContext.canvas.height;
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
			tempContext.drawImage(resource.image, 0, 0);

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

			renderingContext.setTransform();
			renderingContext.globalAlpha = 1;
			renderingContext.drawImage(
				tempCanvas,
				bounds.x, bounds.y, bounds.width, bounds.height,
				bounds.x, bounds.y, bounds.width, bounds.height,
			);
		}
	}
}
