const fs = require('fs');
const util = require('util');

class IO {
	path;

	constructor(path) {
		this.path = path;
	}

	read() {
		const read = util.promisify(fs.readFile);
		return read(this.path, 'utf8');
	}

	write(content) {
		const write = util.promisify(fs.writeFile);
		return write(this.path, content);
	}
}

module.exports.IO = IO;
