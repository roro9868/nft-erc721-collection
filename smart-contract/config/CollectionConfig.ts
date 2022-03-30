import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'RominalsContract',
  tokenName: 'Ronimals',
  tokenSymbol: 'RONIMALS',
  hiddenMetadataUri: 'ipfs://QmS62Me3TYhhR1hJPWrmhRGJpLFQYHKEqz3pyuujJ8H1fB/hidden.json',
  maxSupply: 200,
  whitelistSale: {
    price: 0.001,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.001,
    maxMintAmountPerTx: 200,
  },
  publicSale: {
    price: 0.003,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x5b44D8007796da2F730B9db4477eeF317d611Fe5",
  marketplaceIdentifier: 'rominals-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
