# NonFungibleAchievements
Celebrate your achievements on-chain

## File Structure

### [packages/website](/packages/website/)
React website for building & minting achievements
Stack:
- Next.JS
- TailwindCSS
- Ethers

### [packages/contracts](packages/contracts/)
Folder containing two subfolders for smart contracts & connection to different chains
    - [solidity](/packages/contracts/solidity)
    - [rust](/packages/contracts/rust)

### [packages/contracts/solidity](/packages/contracts/solidity/)
Contains:
- Solidity Contracts for connectivity to Ethereum
- Typescript & Chai tests
- Typescript deployment scripts

Powered by Hardhat tooling

### [packages/contracts/rust](/packages/contracts/rust/)
Contains:
- Rust Contracts for connectivity to Solana
- Rust Test Scripts