'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.nodeTypes = {
    ETC: "ETC",
    Custom: "CUSTOM ETC"
};
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': true,
    'chainId': 61,
    'tokenList': [],
    'abiList': [],
    'estimateGas': false,
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'etherhub': {
        'name': 'Etherhub',
        'blockExplorerTX': 'http://etherhub.io/tx/[[txHash]]',
        'blockExplorerAddr': 'http://etherhub.io/addr/[[address]]',
        'type': nodes.nodeTypes.ETC,
        'eip155': true,
        'chainId': 61,
        'tokenList': require('./tokens/etcTokens.json'),
        'abiList': require('./abiDefinitions/etcAbi.json'),
        'estimateGas': false,
        'service': 'Etherhub.io',
        'lib': new nodes.customNode('https://classicetherwallet.com:8081/api', '')
    },
    'gastracker': {
        'name': 'Gastracker',
        'blockExplorerTX': 'https://gastracker.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://gastracker.io/addr/[[address]]',
        'type': nodes.nodeTypes.ETC,
        'eip155': true,
        'chainId': 61,
        'tokenList': require('./tokens/etcTokens.json'),
        'abiList': require('./abiDefinitions/etcAbi.json'),
        'estimateGas': false,
        'service': 'Gastracker.io',
        'lib': new nodes.customNode('https://api.gastracker.io/web3', '')
    },
    'etc_epool': {
        'name': 'EPool',
        'blockExplorerTX': 'https://gastracker.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://gastracker.io/addr/[[address]]',
        'type': nodes.nodeTypes.ETC,
        'eip155': true,
        'chainId': 61,
        'tokenList': require('./tokens/etcTokens.json'),
        'abiList': require('./abiDefinitions/etcAbi.json'),
        'estimateGas': false,
        'service': 'Epool.io',
        'lib': new nodes.customNode('https://mewapi.epool.io', '')
    }
};
nodes.etcPrice = require('./nodeHelpers/etcPrice');
module.exports = nodes;
