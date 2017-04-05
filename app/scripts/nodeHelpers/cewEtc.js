'use strict';
var cewSrv = require('./cewServerTpl');
var cewEtc = new cewSrv();
cewEtc.post = function(data, callback) {
    data.isClassic = true;
    ajaxReq.http.post(this.SERVERURL, ajaxReq.postSerializer(data), this.config).then(function(data) {
        callback(data.data);
    },function(data){
        callback({ error: true, msg: "connection error", data: "" });
    });
}
module.exports = cewEtc;
