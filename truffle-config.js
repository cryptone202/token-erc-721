const PrivateKeyProvider = require('@truffle/hdwallet-provider');

require('dotenv').config();

const privateKeys = [
    "//"
]

module.exports = {
    networks: {
        besu: {
            gas: 4700000,
            gasPrice: 0,
            provider: () => new PrivateKeyProvider(privateKeys, 'http://127.0.0.1:8545', 0, 10),
            network_id: '*',

        },
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*'
        },
        ropsten: {
            provider: () => new PrivateKeyProvider(process.env.MNENOMIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY),
            network_id: 3,
            gas: 3000000,
            gasPrice: 10000000000
        },
        kovan: {
            provider: () => new PrivateKeyProvider(process.env.MNENOMIC, "https://kovan.infura.io/v3/" + process.env.INFURA_API_KEY),
            network_id: 42,
            gas: 3000000,
            gasPrice: 10000000000
        },
        rinkeby: {
            provider: () => new PrivateKeyProvider(process.env.MNENOMIC, "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY),
            network_id: 4,
            gas: 4000000,
            gasPrice: 10000000000
        },
        main: {
            provider: () => new PrivateKeyProvider(process.env.MNENOMIC, "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY),
            network_id: 1,
            gas: 3000000,
            gasPrice: 10000000000
        }
    },
    compilers: {
        solc: {
            version: "0.8.0",
            docker: false,
            settings: {
                optimizer: {
                    enabled: true,
                }
            }
        }
    }
}