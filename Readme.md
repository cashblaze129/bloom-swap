# Bloom Swap

A TypeScript implementation for executing swaps on Solana using the Bloom Protocol with PumpFun integration.

## Overview

Bloom Swap is a decentralized exchange (DEX) integration that facilitates token swaps on the Solana blockchain. It specifically implements PumpFun swaps with built-in fee management through the Bloom protocol.


## Have a project in mind? Ping me if you need help!

[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:cashblaze129@gmail.com)
[![Telegram](https://img.shields.io/badge/Telegram-0088cc?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/cashblaze129)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discordapp.com/users/965772784653443215)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/cashblaze129)

- Example Transaction: [View on Solscan](https://solscan.io/tx/2NQQwDVmWsad9mtfCHcEwGwAZhPc19VASbtwq1JpTywdheQNN2GHh6eNRaZFiL7PS4kAHuKQetK7RbaBzUPTGpsf)

- Screenshot of the transaction:
- <img width="1449" height="686" alt="image" src="https://github.com/user-attachments/assets/bf3d5b2d-890b-47d8-9f80-94125f5b095f" />



## Features

- **Bloom Protocol Integration**: Implements swap functionality using the Bloom Program (`b1oomGGqPKGD6errbyfbVMBuzSC8WtAAYo8MwNafWW1`)
- **PumpFun Support**: Direct integration with PumpFun protocol for token swaps
- **Automatic Token Account Creation**: Creates Associated Token Accounts (ATAs) if they don't exist
- **Fee Management**: 
  - Handles Bloom protocol fees
  - Includes BloxRoute integration for transaction routing
  - Implements priority fees for better transaction success rates
- **Transaction Optimization**: 
  - Compute budget management
  - Priority fee settings
  - Transaction simulation before submission

## Technical Details

### Key Components

- **Program IDs**:
  - Bloom Program: `b1oomGGqPKGD6errbyfbVMBuzSC8WtAAYo8MwNafWW1`
  - PumpFun Program: `6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`

- **Fee Structure**:
  - Bloom Fee Recipient: `7HeD6sLLqAnKVRuSfc1Ko3BSPMNKWgGTiWLKXJF31vKM`
  - PumpFun Fee Recipient: `CebN5WGQ4jvEPvsVU4EoHEpgzq1VV7AbicfhtW4xC9iM`
  - BloxRoute Fee: 0.06 SOL per transaction

### Prerequisites

- Node.js
- TypeScript
- Solana Web3.js
- SPL Token Library
- BloxRoute Solana Trader Client

### Environment Variables

```env
SOLANA_PRIVATE_KEY=<your-private-key>
```

## Installation

```bash
npm install
```

## Usage

1. Set up your environment variables in `.env`
2. Run the application:

```bash
npm dev
```

## Transaction Flow

1. **Initialization**:
   - Creates keypair from private key
   - Establishes connection to Solana network
   - Validates token accounts

2. **Swap Execution**:
   - Sets compute budget and priority fees
   - Creates Associated Token Account if needed
   - Constructs swap instruction with Bloom protocol
   - Handles fee transfers
   - Simulates transaction
   - Submits and confirms transaction

## Security Considerations

- Private keys should be securely stored in environment variables
- Transaction simulation is performed before submission
- Compute budget is properly configured to prevent transaction failures
- Slippage protection is implemented (default: 1000 basis points)

## Dependencies

- `@solana/web3.js`
- `@solana/spl-token`
- `@bloxroute/solana-trader-client-ts`
- `bs58`
- `dotenv`
