const path = require('path');
const { app } = require('./app.js');

const pathName = path.resolve('./data.json');

const [, , userName, userPassword] = process.argv;

if (userName && userPassword) {
	return app(userName, userPassword, pathName);
} else {
	return;
}
