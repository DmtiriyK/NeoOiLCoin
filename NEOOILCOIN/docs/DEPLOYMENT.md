# NeoOiLCoin (OiLC) – Jetton deployment checklist

## Token parameters (source of truth)
- Name: NeoOiLCoin
- Symbol: OiLC
- Decimals: 3
- Metadata: /metadata/jetton.json

## Deployment method
- Deploy via Jetton Minter UI (e.g. minter.ton.org) using the admin wallet.

## Post-deploy (must-have proofs)
Save and publish:
- Jetton Master address
- Deploy tx hash/link
- Initial mint tx hash/link (if separate)
- Admin transfer tx hash/link (if we transfer to customer)
- Mint close / revoke tx hash/link (if fixed supply)

## Admin policy
- If token will be changed later: DO NOT revoke ownership yet.
- If fixed supply and no further changes: revoke/disable minting after final checks.

## Mainnet Deployment ✅

**Deployment Date:** TBD

### Contract Addresses
- **Jetton Master:** `TBD`
- **Admin Address:** `UQBhrm5E2njlRRCvJbOAuO0Sp-o7HHEsWaiSoDhI6CiDFZuO`

### Explorers
- TONScan: TBD (will be available after deployment)
- TONViewer: TBD (will be available after deployment)

### Supply Configuration
- **Maximum Supply (Cap):** 200,000,000 OiLC
- **Initial Circulation:** 100,000,000 OiLC
- **Reserved for Future:** 100,000,000 OiLC

### Token Features
- ✅ Mintable (owner can mint more tokens within cap)
- ✅ Metadata updatable (owner can update token info)
- ✅ Ownership transferable (owner can change admin)
- ✅ Burnable (users can burn their tokens)
- ⚠️ Immutable code (contract logic cannot be changed)

### Security
- Smart contract code available in project repository
- Metadata: Available after deployment
