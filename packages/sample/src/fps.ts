export default function fps() {
	return {
		type: 'text',
		text: 'fps',
		textFormat: {
			size: 30,
			color: 0xffffff,
			align: 'center',
		},
		onUpdate(time: number) {
			const frameRate = Math.round(1 / time);
			this.text = `${frameRate} fps`;
		},
	};
}
