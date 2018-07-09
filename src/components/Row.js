class Row {
	constructor(root, props) {
		this.root = root;
		this.props = props;

		this.generator = this.root.generator;
	}

	appendChild(child) {
		if (typeof child === 'string' || typeof child === 'number') {
			this.generator.appendRow(child);
		}
	}
}

export default Row;
