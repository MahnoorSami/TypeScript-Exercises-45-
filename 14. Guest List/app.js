"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dinner_guests = void 0;
// Exercise 14 Guest List
var dinner_guests = ['Albert', 'Leo', 'Marie'];
exports.dinner_guests = dinner_guests;
for (var _i = 0, dinner_guests_1 = dinner_guests; _i < dinner_guests_1.length; _i++) {
    var guest = dinner_guests_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
