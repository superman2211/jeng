import { IRenderingPattern } from './interfaces';
import ColorPattern from './color-pattern';

export default class GradientPattern implements IRenderingPattern {
	colors: ColorPattern[] = [];
	offsets: number[] = [];
}
