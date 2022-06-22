require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index repeat magic essay gloom force force gather'; 
let testAccounts = [
"0xdadd1ac55a2d93aba1b03d2988a79ecd16f75884ad77f066aeaddae349269458",
"0x2c441aaaa725c7171c0de334ac07b64ccb4857581cc9476a64eb72be35b7b1b6",
"0x46047fde7f1a387a144212b8ee5427e0014087d8b14706f69c541b479fec2a06",
"0x7404ac38378e8eeaf08cdacf02e1b2b6e5c3440a5d63896d107b27bf4b59aa67",
"0x41425128598e2e3425930e3bcf7f2e499763a22260b676800dcc3d0891c95891",
"0x8a2f23160288b8564933de10d7d13b215c4bc33a01e5b3e96b47f926812b18da",
"0xc2d52995fd55d10620b5884bc27afd850503a1d261cfffc2dc4adb6b44cfc507",
"0xab6721d93c127e7b5a12025f59af355ce36d07368118c93c9cc070a8ab77eca5",
"0x221b83ca462651eb2c58f72ca8ed5224d26d805ca8d871f123f371d0c87e3b28",
"0x5164103063184c2ecc7f4c65f94af20d35848effffdc2562223c224889d06240"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

