// Exercise 33 Ordinal Numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    var ordinal = void 0;
    if (number === 1) {
        ordinal = '1st';
    }
    else if (number === 2) {
        ordinal = '2nd';
    }
    else if (number === 3) {
        ordinal = '3rd';
    }
    else {
        ordinal = "".concat(number, "th");
    }
    console.log(ordinal);
}
