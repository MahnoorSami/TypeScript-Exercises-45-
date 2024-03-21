// Exercise 16 More Guest List
var dinner_guests = ['Albert', 'Leo', 'Marie'];
console.log("Good news! We found a bigger dinner table!");
dinner_guests.unshift('Noora'); // Add new guest to the beginning
dinner_guests.splice(Math.floor(dinner_guests.length / 2), 0, 'Nick'); // Add new guest to the middle
dinner_guests.push('Samreen'); // Add new guest to the end
for (var _i = 0, dinner_guests_1 = dinner_guests; _i < dinner_guests_1.length; _i++) {
    var guest = dinner_guests_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
