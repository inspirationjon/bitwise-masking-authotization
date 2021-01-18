const path = require('path');
const { mask } = require('./mask.js');
const { IO } = require('./io.js');

const pathName = path.resolve('./data.json');

const [, , userName, userPassword] = process.argv;

const io = new IO(pathName);

async function checkUser() {
	const data = await io.read();
	const dataParsed = JSON.parse(data);

	try {
		const found = dataParsed.find((user) => {
			return user.userName === userName;
		});

		if (
			found.userName === userName &&
			mask(userPassword) === found.passwordEncrypted
		) {
			console.log(`Welcome, ${userName}!`);
		} else {
			console.log(`Register, ${userName}!`);
		}
	} catch {
		console.log(`Register, ${userName}!`);
	}
}

checkUser();
