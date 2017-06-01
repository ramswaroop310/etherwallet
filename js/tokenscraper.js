/* todo

add ICO machine abi
*/

var abiICO = "contracts/icomachine.abi";
var abiERC = "contracts/ERC20.abi";

var contractAddress = "0x28bfbf40bf22e3e78767fa3ba321e7311374ddda";   // replace with a registery contract address
var contractICO = web3.eth.contract(abiICO).at(contractAddress);

/*get a list of all the tokes that have been created */
function getScamCoins(){
  var tokenCount = contractICO.getcount();
  var tokens = [];
  for (i = 0; i <= tokenCount; i++ ){
    var newT = contractICO.getToken(i);
    tokens[i] = newT;
  }
}


function tokenInformation(tokenAddress){
    var contractERC = web3.eth.contract(abiERC).at(tokenAddress);
    var name = contractERC.name();
    var symbol = contractERC.symbol();
    var decimals = contractERC.decimals();
    var totalSupply = contractERC.totalSupply();
    var tokenInfo = {name : name, symbol : symbol, decimals: decimals, totalSupply: totalSupply};

    return tokenInfo;
}
