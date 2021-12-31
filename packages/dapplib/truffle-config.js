require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet rescue rural equip inflict dry equal giant'; 
let testAccounts = [
"0x0925f38a6b2585bb487ffcca101e2719245f33f2dced47b5c8adb9168569bdc2",
"0x13f462d42295bc8e3d92a25cf6e795e58e53da67e7c9e26ec1b2047e0b1a2dac",
"0x8c8e229483552af4951c171f657d3af7e532c56ae2aa6055ee38477e4f5733dd",
"0x6c1d77519bc465c61e8238b4d26d870d145413695d8addf3566bffc6dc7c56d8",
"0x0a2609e1ef75cd368a73f8c6a96f7fab48b687f78217969480950e1a9fa604ac",
"0xd7dfaa009e5f9f99b0e851b690fe6607bec4fa58033dbf22ae6a7196ea956419",
"0xde8f864cd25dd422577715b5b891fba9d72a5e9cdbf8e833e06f734d4fdd6059",
"0x70421d3664354806fa8905cd987da14063cd67cd76673b0acf4e0ed157df2a4a",
"0x28264075b790ec3b420b440d52495916e70ad70c7845374def205a4aca76ed54",
"0xde26a1afc85c2e1d165d6ce31c695f2260693107fef9ad6362b2a8f3a5f15833"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

