# HALAL COIN - Testnet Deployment Guide

## ✅ Project Readiness

All components are ready:
- ✅ Contracts compiled
- ✅ Tests passed (8/8)
- ✅ Deployment scripts configured
- ✅ Metadata prepared

## 📋 Token Parameters

- **Name:** HALAL COIN
- **Symbol:** HLLCN
- **Decimals:** 3
- **Total Supply:** 100,000,000 HLLCN (100,000,000,000 with decimals)
- **Admin/Deployer:** `0QCXmE4pmJLiJjekrTMh7vbDUxNwXbLO-hdY_7DsY6LPFiID` (single wallet for everything)
- **Mintable:** Yes (with ability to change)

## 🚀 Testnet Deployment

### Step 1: Preparation

1. Ensure deployer wallet has testnet TON (minimum 1 TON)
   - Get testnet TON: https://t.me/testgiver_ton_bot

2. Configure TON wallet in Blueprint:
   ```powershell
   cd "c:\Users\kenih\OneDrive\Рабочий стол\HALAL-COIN\onchain\halal-coin-onchain"
   ```

### Step 2: Deploy Jetton Master Contract

Run deployment script:
```powershell
npx blueprint run deployJettonController --testnet
```

The script will:
- Deploy Jetton Master contract
- Set admin address
- Configure metadata URI
- Output contract address

**Save the Jetton Master address!**

### Step 3: Minting Tokens

After successful deployment, mint 100M tokens:

```powershell
npx blueprint run mintTokens --testnet
```

When prompted for Jetton Master address, enter the address from Step 2.

The script will:
- Send 100,000,000 HLLCN to admin address
- Create Jetton Wallet for admin
- Confirm transaction

### Step 4: Verification

1. **Check contract on explorer:**
   ```
   https://testnet.tonviewer.com/<JETTON_MASTER_ADDRESS>
   ```

2. **Get your Jetton Wallet address:**
   - Call get-method `get_wallet_address` with admin address
   - Or check in minting transactions

3. **Check balance:**
   ```
   https://testnet.tonviewer.com/<YOUR_JETTON_WALLET_ADDRESS>
   ```

## 🔍 Testnet Testing

### Function Testing:

1. **Mint (additional):**
   - Send Mint message from admin wallet
   - Specify receiver and amount

2. **Transfer:**
   - Open your Jetton Wallet
   - Send JettonTransfer to another address
   - Check receiver's balance

3. **Burn:**
   - Send JettonBurn message
   - Verify that totalSupply decreased

4. **Change Owner:**
   - Send ChangeOwner message
   - Verify that new owner can mint

## 🎯 After Successful Testing

Once you've verified everything works on testnet:

### Mainnet Deployment

```powershell
# 1. Ensure deployer wallet has ~2 TON on mainnet
# 2. Deploy to mainnet
npx blueprint run deployJettonController --mainnet

# 3. Mint on mainnet
npx blueprint run mintTokens --mainnet
```

### Update Documentation:

1. Record addresses in [`deployment/mainnet.json`](../deployment/mainnet.json)
2. Add transaction hashes
3. Update README with deployed addresses

## 🔑 Important Addresses

**Admin/Deployer Wallet (testnet):**
```
0QCXmE4pmJLiJjekrTMh7vbDUxNwXbLO-hdY_7DsY6LPFiID
```

## 📝 Metadata

**Current metadata URL:**
```
https://raw.githubusercontent.com/NeoXonline-Development/HALAL-COIN/main/metadata/jetton.json
```

**To add logo:**
1. Create image (PNG/SVG, 256x256px+)
2. Upload to IPFS or GitHub
3. Update `image` field in jetton.json
4. Call `JettonUpdateContent` message from admin

## ⚠️ Security

- ✅ Keep seed phrases of admin and deployer wallets secure
- ✅ Use hardware wallet for mainnet operations
- ✅ Verify all transactions before confirmation
- ✅ Test on testnet before mainnet
- ✅ Never share private keys

### 🚨 IMPORTANT: DisableMint Function

**⚠️ IRREVERSIBLE ACTION!** The `DisableMint` function completely disables minting ability forever.

**Protection against accidental calls:**
- Requires special confirmation code: `0xDEADC0DE` (hex for "dead code")
- Without correct code, function will not work

**When NOT to use:**
- ❌ If token should remain mintable (like HALAL COIN)
- ❌ When transferring rights to client (leave minting ability)
- ❌ If not 100% certain

**When to use:**
- ✅ Only if supply needs to be fixed forever
- ✅ After final minting for "fair launch"
- ✅ By explicit client requirement

**Example call (if really needed):**
```typescript
await jettonController.send(
    admin.getSender(),
    { value: toNano('0.1') },
    {
        $$type: 'DisableMint',
        queryId: 0n,
        confirmationCode: 0xDEADC0DEn, // Required!
    }
);
```

## 📞 Troubleshooting

**Error "Insufficient funds":**
- Top up deployer wallet on testnet

**Error "Contract not deployed":**
- Wait 10-15 seconds after deployment
- Check contract address

**Error "Only owner can mint":**
- Ensure sending from admin address
- Verify using correct wallet

## 🎊 Ready!

Project is fully configured and ready for deployment. Follow steps above for testnet deployment.
