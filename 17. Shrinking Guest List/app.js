// Exercise 17 Shrinking Guest List
var dinner_guests = ['Albert', 'Leo', 'Marie'];
dinner_guests.unshift('Noora'); // Add new guest to the beginning
dinner_guests.splice(Math.floor(dinner_guests.length / 2), 0, 'Nick'); // Add new guest to the middle
dinner_guests.push('Samreen'); // Add new guest to the end
console.log("Unfortunately, our new dinner table won't arrive in time, We can invite only two people for dinner.");
while (dinner_guests.length > 2) {
    var removed_guest = dinner_guests.pop();
    console.log("Sorry ".concat(removed_guest, ", we can't invite you to dinner."));
}
for (var _i = 0, dinner_guests_1 = dinner_guests; _i < dinner_guests_1.length; _i++) {
    var guest = dinner_guests_1[_i];
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
}
dinner_guests.splice(0); // Empty the array
console.log(dinner_guests); // Print the empty list
