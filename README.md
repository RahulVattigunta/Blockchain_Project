# 🚀 Minimal Blockchain Project

## 📌 Overview
This project is a **simple blockchain implementation** written in **Node.js**, featuring:

✅ Proof-of-Work mining ⛏️  
✅ Peer-to-Peer (P2P) network 🌐  
✅ Wallet for generating keys and signing transactions 🔑  
✅ Transaction handling 💰  
✅ Web-based Blockchain Explorer & Wallet UI 🖥️  

---

## 📂 Project Structure
```
blockchain_project/
│── node/                # Blockchain core & P2P server
│   ├── server.js        # API & Blockchain Node
│   ├── blockchain.js    # Core blockchain logic
│   ├── p2p.js           # Peer-to-peer communication
│   ├── wallet.js        # Wallet system
│   ├── transaction.js   # Transaction handling
│
│── wallet/              # Wallet service
│   ├── wallet.js        # Wallet private key & public address
│
│── ui/                  # Frontend UI for Blockchain Explorer
│   ├── index.html       # UI Page
│   ├── script.js        # Fetches blockchain data
│   ├── style.css        # UI Styling
│
│── docs/                # Documentation
│   ├── readme.md        # Project documentation
│
│── package.json         # Dependencies & scripts
│── README.md            # GitHub Readme
```

---

## 🛠️ Installation & Setup

### 1️⃣ Install Dependencies
```sh
npm install
```

### 2️⃣ Start the Blockchain Node
```sh
node node/server.js
```

### 3️⃣ Start the Wallet
```sh
node wallet/wallet.js
```
This will generate a **private key** and show the **public address**.

### 4️⃣ Start the Web UI
```sh
cd ui
npx http-server
```
Now, open **`http://localhost:8080`** in your browser to explore the blockchain.

---

## 🔗 API Endpoints
### 📦 Blocks
- **Get all blocks:** `GET /blocks`
- **Mine a new block:** `POST /mineBlock` (with JSON body `{ "data": "Your data" }`)

### 🔑 Wallet
- **Get public address:** `node wallet/wallet.js`

### 🌐 P2P Networking
- **Connect a peer:** `POST /addPeer` (body: `{ "peer": "ws://localhost:6001" }`)
- **List peers:** `GET /peers`

---

## 🎯 Features
- **Mine new blocks** with **proof-of-work** 🛠️
- **Secure transactions** using public/private key cryptography 🔒
- **Peer-to-peer networking** for decentralized blockchain nodes 📡
- **Interactive UI** to explore the blockchain 🌍

---

## 🏆 Contribution
Contributions are welcome! Feel free to **fork, open issues, or submit PRs** to improve this project. 🚀

---

## 📜 License
This project is **MIT licensed**. Feel free to use and modify it. 😃
