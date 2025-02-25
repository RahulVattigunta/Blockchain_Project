
// Import required modules
const CryptoJS = require('crypto-js');
const express = require('express');
const WebSocket = require('ws');
const bodyParser = require('body-parser');
const EC = require('elliptic').ec;

const ec = new EC('secp256k1');

// Block structure
class Block {
    constructor(index, previousHash, timestamp, data, hash, difficulty, nonce) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
        this.difficulty = difficulty;
        this.nonce = nonce;
    }
}

// Blockchain array
let blockchain = [createGenesisBlock()];

// Create Genesis Block
function createGenesisBlock() {
    return new Block(0, "0", Date.now(), "Genesis Block", "hash", 0, 0);
}

// Calculate Block Hash
function calculateHash(index, previousHash, timestamp, data, nonce) {
    return CryptoJS.SHA256(index + previousHash + timestamp + data + nonce).toString();
}

// Generate Next Block
function generateNextBlock(blockData) {
    const previousBlock = blockchain[blockchain.length - 1];
    let nonce = 0;
    let nextHash;
    let timestamp;

    do {
        timestamp = Date.now();
        nextHash = calculateHash(previousBlock.index + 1, previousBlock.hash, timestamp, blockData, nonce);
        nonce++;
    } while (!nextHash.startsWith("000"));

    return new Block(previousBlock.index + 1, previousBlock.hash, timestamp, blockData, nextHash, 3, nonce);
}

// Add Block to Blockchain
function addBlock(newBlock) {
    blockchain.push(newBlock);
}

// Express server setup
const app = express();
app.use(bodyParser.json());

// Routes to interact with blockchain
app.get('/blocks', (req, res) => res.json(blockchain));
app.post('/mineBlock', (req, res) => {
    const newBlock = generateNextBlock(req.body.data);
    addBlock(newBlock);
    res.json(newBlock);
});

// Start server
const HTTP_PORT = 3001;
app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));

// P2P WebSocket Server
const peers = [];
const wsServer = new WebSocket.Server({ port: 6001 });
wsServer.on('connection', ws => peers.push(ws));
