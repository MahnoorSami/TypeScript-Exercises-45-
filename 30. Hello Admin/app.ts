// Exercise 30 Hello Admin
const usernames: string[] = ['admin', 'erica', 'dora', 'jerry', 'tom'];
for (const username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username.charAt(0).toUpperCase() + username.slice(1)}, thank you for logging in again.`);
    }
}
