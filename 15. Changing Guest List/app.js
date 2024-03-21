// Exercise 15 Changing Guest List
var dinner_guests = ['Albert', 'Leo', 'Marie'];
var cancelled_guest = dinner_guests.pop(); // Remove the last guest
console.log("".concat(cancelled_guest, " can't make it to the dinner."));
dinner_guests.push('Ishaq'); // Replace cancelled guest with a new invitee
for (var _i = 0, dinner_guests_1 = dinner_guests; _i < dinner_guests_1.length; _i++) {
    var guest = dinner_guests_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
