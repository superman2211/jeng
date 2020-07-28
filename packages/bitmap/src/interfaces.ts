import { ByteArray } from '@e2d/utils';
import BitmapData from './BitmapData';

export interface IBitmapCompressor {
	compress(bitmapData: BitmapData, byteArray: ByteArray): void;
}
