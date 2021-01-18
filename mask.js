function mask(input) {
	const sha1 = require('sha1');

	// Message
	let message = String(input);
	let arrayMessage = message.split('');
	let arrayChar = [];
	arrayMessage.forEach((char) => {
		arrayChar.push(char.charCodeAt(0));
	});

	// Encrypted
	let encrypted = sha1(message);
	let arrayEncrypted = encrypted.split('').slice(0, arrayMessage.length);
	let arrayEnc = [];
	arrayEncrypted.forEach((char) => {
		arrayEnc.push(char.charCodeAt(0));
	});

	// XOR Musk
	let arrayXor = [];
	for (let i = 0; i < arrayChar.length; i++) {
		let xor = arrayChar[i] ^ arrayEnc[i];
		arrayXor.push(xor);
	}

	// console.log('Message');
	// console.log(arrayChar);

	// console.log('Encrypted');
	// console.log(arrayEnc);

	// console.log('Xor');
	// console.log(arrayXor);

	return arrayXor.join('');
}

module.exports.mask = mask;
