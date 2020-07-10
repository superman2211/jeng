import { IRenderingPattern } from './interfaces';

export default class GradientPattern implements IRenderingPattern {
	colors: number[] = [];
	offsets: number[] = [];
}
