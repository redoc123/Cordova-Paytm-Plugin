
var exec = require('cordova/exec');

var PLUGIN_NAME = 'PaytmPlugin';

var PaytmPlugin = {
   //orderid, cust_id, email, phone, txn_amt,callback_url,checksum_hash,environment
  payWithPaytm: function(options, successCallback, failureCallback) {
    exec(successCallback,
                 failureCallback,
                 PLUGIN_NAME,
                 "payWithPaytm",
                 options);
  }




};

module.exports = PaytmPlugin;
