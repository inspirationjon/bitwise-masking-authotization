const { IO } = require('./io.js');
const { User } = require('./user.js');

async function app(userName, userPassword, pathName) {
	const io = new IO(pathName);
	const user = new User(userName, userPassword);

	const data = await io.read();

	if (!data) {
		await io.write(JSON.stringify([user], null, 2));
	} else if (data) {
		const dataParsed = JSON.parse(data);
		dataParsed.push(user);
		await io.write(JSON.stringify(dataParsed, null, 2));
	}
}

module.exports.app = app;
