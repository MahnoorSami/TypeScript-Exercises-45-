// Exercise 31 No Users
let usernames: string[] = ['admin', 'erica', 'ali', 'jerry', 'tom'];
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (const username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username.charAt(0).toUpperCase() + username.slice(1)}, thank you for logging in again.`);
        }
    }
}
// Clearing the usernames array
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
