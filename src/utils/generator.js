import fs from 'fs';

class Generator {
	constructor() {
		this.raw = '';
		this.header = [];
		this.error = false;
	}

	onError = msg => {
		this.error = true;
		console.warn('Error: ' + msg);
	};

	/**
	 * @param {String} header
	 */
	appendHeader = header => {
		let arr = [];
		if (typeof header === 'string') {
			arr = header.split(',');
		}
		if (!arr || arr.length <= 0) {
			this.onError('Header length should be > 0');
		}
		this.header = arr; // Used to know if header is missing
		this.raw += arr.join();
	};

	/**
	 * @param {String} row
	 */
	appendRow = row => {
		// Header required
		if (!this.header || this.header.length <= 0) {
			this.onError('Header missing. Make sure to add Header component first');
		}
		let arr = [];
		if (typeof row === 'string') {
			arr = row.split(',');
		}
		if (!arr) {
			this.onError('Trying to add empty row');
		}
		if (arr.length !== this.header.length) {
			this.onError(`Row length (${arr.length}) does not match header length (${this.header.length})`);
		}
		this.raw += '\n' + arr.join();
	};

	/**
	 * @param {String} filePath
	 */
	generate(filePath) {
		if (this.error) {
			console.log('CSV was not generated due to error(s)');
			return;
		}

		const writeStream = fs.createWriteStream(filePath);
		writeStream.write(this.raw);
		writeStream.on('finish', () => {
			console.log('CSV successfully generated');
		});
		writeStream.end();
	}
}

export default Generator;
