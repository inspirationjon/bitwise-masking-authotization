const { IO } = require('./io.js');
const path = require('path');

const pathName = path.resolve('./data.json');

const io = new IO(pathName);

async function monitor() {
	const data = await io.read();
	const dataParsed = JSON.parse(data);

	console.table(dataParsed);
}
monitor();
