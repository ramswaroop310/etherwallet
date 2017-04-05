'use strict';
var http;
var etcPrice = function() {}
var getValue = function(arr, pair) {
    for (var i in arr)
        if (arr[i].pair == pair) return arr[i].rate;
}
var COINMARKETCAPAPI = "https://coinmarketcap-nexuist.rhcloud.com/api/";
ethPrice.getETCvalue = function(callback) {
    ajaxReq.http.get(COINMARKETCAPAPI).then(function(data) {
        data = data['data']['objects'];
        var priceObj = {
            usd: parseFloat(getValue(data, 'ETHUSD')).toFixed(6),
            eur: parseFloat(getValue(data, 'ETHEUR')).toFixed(6),
            btc: parseFloat(getValue(data, 'ETHBTC')).toFixed(6)
        };
        callback(priceObj);
    });
}
etcPrice.getRates = function(callback) {
    ajaxReq.http.get(COINMARKETCAPAPI).then(function(data) {
        callback(data['data']['objects']);
    });
}
module.exports = etcPrice;
