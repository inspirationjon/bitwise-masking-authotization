const { mask } = require('./mask.js');

class User {
	userName;
	passwordEncrypted;

	constructor(userName, userPassword) {
		this.userName = userName;
		this.passwordEncrypted = mask(userPassword);
	}
}

module.exports.User = User;
