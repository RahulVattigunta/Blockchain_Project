
// Simple Wallet Implementation
const EC = require('elliptic').ec;
const fs = require('fs');

const ec = new EC('secp256k1');
const privateKeyLocation = 'wallet/private_key';

const generatePrivateKey = () => {
    const keyPair = ec.genKeyPair();
    const privateKey = keyPair.getPrivate().toString(16);
    fs.writeFileSync(privateKeyLocation, privateKey);
    return privateKey;
};

const getPrivateKey = () => {
    if (!fs.existsSync(privateKeyLocation)) {
        return generatePrivateKey();
    }
    return fs.readFileSync(privateKeyLocation, 'utf8');
};

const getPublicKey = () => {
    const privateKey = getPrivateKey();
    const key = ec.keyFromPrivate(privateKey, 'hex');
    return key.getPublic().encode('hex');
};

console.log('Wallet Address:', getPublicKey());
