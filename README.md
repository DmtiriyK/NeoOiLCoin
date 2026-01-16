# NeoOiLCoin (OiLC)

A decentralized token on TON Blockchain for fair exchange and commerce.

## 📊 Token Information

- **Name:** NeoOiLCoin
- **Symbol:** OiLC
- **Decimals:** 3
- **Standard:** TEP-74 (Jetton)
- **Initial Supply:** 0 (minted on demand)
- **Max Supply:** Controlled by admin

## 🔗 Contract Addresses

- **Jetton Master:** TBD (after deployment)
- **Admin Address:** `UQBhrm5E2njlRRCvJbOAuO0Sp-o7HHEsWaiSoDhI6CiDFZuO`

## ✨ Features

- ✅ **Mintable** - Admin can mint new tokens
- ✅ **Burnable** - Users can burn their tokens
- ✅ **Metadata Updatable** - Token information can be updated
- ✅ **Ownership Transferable** - Admin rights can be transferred
- ⚠️ **Immutable Code** - Contract logic cannot be upgraded (security feature)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- TON Wallet with testnet/mainnet TON

### Installation

```bash
cd NEOOILCOIN/onchain/neooilcoin-onchain
npm install
```

### Configuration

1. Copy `.env.example` to `.env`
2. Add your wallet mnemonic:
```
WALLET_MNEMONIC=word1 word2 word3 ... word24
NETWORK=testnet
```

### Build Contracts

```bash
npx blueprint build
```

### Deploy to Testnet

```bash
npx blueprint run deployJettonController --testnet
```

### Mint Tokens

```bash
npx blueprint run mintTokens --testnet
```

## 📁 Project Structure

```
NEOOILCOIN/
├── deployment/         # Deployment configurations
├── docs/              # Documentation
├── metadata/          # Token metadata (JSON)
├── onchain/           # Smart contracts
│   └── neooilcoin-onchain/
│       ├── contracts/     # Tact smart contracts
│       ├── scripts/       # Deployment scripts
│       └── tests/         # Contract tests
└── ops/               # Operational scripts
    └── scripts/       # Python management scripts
```

## 🧪 Testing

```bash
cd NEOOILCOIN/onchain/neooilcoin-onchain
npm test
```

## 📖 Documentation

- [Mainnet Deployment Guide](MAINNET_DEPLOYMENT.md)
- [Testnet Deployment Guide](TESTNET_DEPLOYMENT.md)
- [Detailed Deployment Checklist](NEOOILCOIN/docs/DEPLOYMENT.md)

## 🛠️ Tech Stack

- **Smart Contracts:** Tact 1.6.13
- **Framework:** Blueprint 0.40.0+
- **Blockchain:** TON (The Open Network)
- **Standard:** TEP-74 Jetton

## 🔐 Security

- Contract code is immutable after deployment
- Admin key must be kept secure
- All operations are on-chain and verifiable
- Standard TEP-74 implementation

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ⚠️ Disclaimer

This is experimental software. Use at your own risk. Always verify contract addresses before interacting with them.