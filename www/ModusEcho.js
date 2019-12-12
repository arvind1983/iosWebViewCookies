var exec = require('cordova/exec');

exports.echo = function(arg0, success, error) {
    exec(success, error, "ModusEcho", "echo", [arg0]);
};

exports.getCookies = function(success, error) {
    exec(success, error, "ModusEcho", "getCookies");
};

exports.echojs = function(arg0, success, error) {
    if (arg0 && typeof(arg0) === 'string' && arg0.length > 0) {
        success(arg0);
    } else {
        error('Empty message!');
    }
};
