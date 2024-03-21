// Exercise 16 More Guest List
const dinner_guests: string[] = ['Albert', 'Leo', 'Marie'];
console.log("Good news! We found a bigger dinner table!");
dinner_guests.unshift('Noora'); // Add new guest to the beginning
dinner_guests.splice(Math.floor(dinner_guests.length / 2), 0, 'Nick'); // Add new guest to the middle
dinner_guests.push('Samreen'); // Add new guest to the end
for (const guest of dinner_guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}