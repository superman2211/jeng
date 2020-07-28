import { IRenderingPattern } from './interfaces';
import ColorPattern from './ColorPattern';

export default class GradientPattern implements IRenderingPattern {
	colors: ColorPattern[] = [];
	offsets: number[] = [];
}
