'use strict';
var cewServer = function() {}
cewServer.prototype.SERVERURL = "https://classicetherwallet.com:8081/api";
cewServer.prototype.config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
};
cewServer.prototype.getCurrentBlock = function(callback) {
    this.post({
        currentBlock: '',
    }, callback);
}
cewServer.prototype.getBalance = function(addr, callback) {
    this.post({
        balance: addr,
    }, callback);
}
cewServer.prototype.getTransactionData = function(addr, callback) {
    this.post({
        txdata: addr,
    }, callback);
}
cewServer.prototype.sendRawTx = function(rawTx, callback) {
    this.post({
        rawtx: rawTx,
    }, callback);
}
cewServer.prototype.getEstimatedGas = function(txobj, callback) {
    this.post({
        estimatedGas: txobj,
    }, callback);
}
cewServer.prototype.getEthCall = function(txobj, callback) {
    this.post({
        ethCall: txobj,
    }, callback);
}
cewServer.prototype.getTraceCall = function(txobj, callback) {
    this.post({
        traceCall: txobj,
    }, callback);
}
cewServer.prototype.post = function(data, callback) {
	//overide this
}
module.exports = cewServer;
