"use strict";

function isArray(a) {
    return Object.prototype.toString.call(a) === "[object Array]";
}
module.exports = function (a, b) {
    if (isArray(a) && isArray(b)) {
        var alen = a.length,
            blen = b.length,
            res = {},
            i = 0;
        for (; i < alen; i++) {
            res[a[i]] = -1; //default get dropped
        }
        for (i = 0; i < blen; i++) {
            if (a.indexOf(b[i]) < 0) {
                res[b[i]] = 1;
            } else {
                delete res[a[i]];
            }
        }
        return res;
    } else {
        throw new Error('wrong type');
    }
};