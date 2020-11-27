"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var canAladdinTravel = function (n, magic, dist, start) {
    var cummulative = magic[start % n];
    for (var i = start; i < start + n; i++) {
        var index = i < n ? i : Math.abs(n - i);
        var nextIndex = index + 1 >= n ? Math.abs((index + 1) - n) : index + 1;
        var nextSource = (start + n === i + 1) ? 0 : magic[nextIndex];
        if (cummulative < dist[index])
            return false;
        cummulative = (cummulative - dist[index]) + nextSource;
    }
    return true;
};
var doesAlladinCompleteMagicOdyssey = function (n, magic, dist, start) {
    if (start === void 0) { start = 0; }
    if (start >= n)
        return -1;
    var canTravel = canAladdinTravel(n, magic, dist, start);
    return canTravel ? start : doesAlladinCompleteMagicOdyssey(n, magic, dist, start + 1);
};
exports.default = doesAlladinCompleteMagicOdyssey;
