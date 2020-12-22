import { Component } from '@e2d/engine';

export const TEXT = 'text';

export interface TextFromat {
	font?: string;
	size?: number;
	color?: number;
}

export interface Text extends Component {
	text?: string;
	textFormat?: TextFromat;
	width?: number;
	height?: number;
}
