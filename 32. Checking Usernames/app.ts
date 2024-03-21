// Exercise 32 Checking Usernames
// Make a list of current users
const current_users: string[] = ['john', 'alica', 'bob', 'jane', 'maria'];

// Make another list of new users
const new_users: string[] = ['sam', 'jane', 'MIKE', 'carol', 'maria'];

// Loop through new users to check if each username is available
for (const new_user of new_users) {
    // Convert both new user and current users to lowercase for case-insensitive comparison
    const lowercase_new_user = new_user.toLowerCase();

    // Check if lowercase_new_user exists in current_users
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        console.log(`Sorry, the username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
