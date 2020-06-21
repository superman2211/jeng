import { ByteArray } from '@e2d/utils';
import BitmapData from './bitmap-data';

export interface IRenderSupport {
}

export interface IBitmapDrawable {
	render(support: IRenderSupport): void;
}

export interface IBitmapCompressor {
	compress(bitmapData: BitmapData, byteArray: ByteArray): void;
}
