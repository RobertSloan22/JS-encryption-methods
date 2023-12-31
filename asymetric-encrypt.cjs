const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keypair.cjs');

const encrypted = publicEncrypt(publicKey, Buffer.from('Hello World!'));
console.log(encrypted.toString('base64'));
