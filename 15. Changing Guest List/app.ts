// Exercise 15 Changing Guest List
const dinner_guests: string[] = ['Albert', 'Leo', 'Marie'];

const cancelled_guest = dinner_guests.pop(); // Remove the last guest

console.log(`${cancelled_guest} can't make it to the dinner.`);

dinner_guests.push('Ishaq'); // Replace cancelled guest with a new invitee

for (const guest of dinner_guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
