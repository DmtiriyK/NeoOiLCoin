import { Address } from '@ton/core';

/**
 * NeoOiLCoin Configuration
 * 
 * Change these addresses before mainnet deployment!
 */

export const CONFIG = {
    // Token Parameters
    TOKEN: {
        TOTAL_SUPPLY: 0n, // (with decimals=3)
        DECIMALS: 3,
        SYMBOL: 'OiLC',
        NAME: 'NeoOiLCoin',
    },

    // Admin/Owner address - receives all token management rights
    // Can: mint, change metadata, transfer ownership, disable minting
    ADMIN_ADDRESS: 'UQBhrm5E2njlRRCvJbOAuO0Sp-o7HHEsWaiSoDhI6CiDFZuO',

    // Deployer address - taken from .env WALLET_MNEMONIC
    // Pays for contract deployment gas fees

    // Metadata URL
    METADATA_URL: 'https://raw.githubusercontent.com/NeoXonline-Development/NeoOiLCoin/main/metadata/jetton.json',
};

// Helper function to parse admin address
export function getAdminAddress(): Address {
    return Address.parse(CONFIG.ADMIN_ADDRESS);
}

export function getMetadataUrl(): string {
    return CONFIG.METADATA_URL;
}
