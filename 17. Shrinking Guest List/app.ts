// Exercise 17 Shrinking Guest List
const dinner_guests: string[] = ['Albert', 'Leo', 'Marie'];
dinner_guests.unshift('Noora'); // Add new guest to the beginning
dinner_guests.splice(Math.floor(dinner_guests.length / 2), 0, 'Nick'); // Add new guest to the middle
dinner_guests.push('Samreen'); // Add new guest to the end
console.log("Unfortunately, our new dinner table won't arrive in time, We can invite only two people for dinner.");
while (dinner_guests.length > 2) {
    const removed_guest = dinner_guests.pop();
    console.log(`Sorry ${removed_guest}, we can't invite you to dinner.`);
}
for (const guest of dinner_guests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}
dinner_guests.splice(0); // Empty the array
console.log(dinner_guests); // Print the empty list