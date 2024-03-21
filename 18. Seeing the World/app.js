var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Exercise 18 Seeing the World
/// 1. Print Array in Original Order
var countries = ['Japan', 'Thailand', 'Spain', 'Italy', 'Peru'];
console.log('original :' + countries);
/// 2. Print Array in Alphabatical Order
console.log('copy : ' + __spreadArray([], countries, true).sort());
/// 3. Show Array in original order by printing it
console.log('original :' + countries);
/// 4. Print Array in Reverse order
console.log('copy :' + __spreadArray([], countries, true).sort().reverse());
/// 5. Reverse the order of list
console.log('original :' + countries.sort());
/// 6. Reverse the order of list again
console.log('original :' + countries.sort().reverse());
