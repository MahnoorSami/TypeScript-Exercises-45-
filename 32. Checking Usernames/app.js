// Exercise 32 Checking Usernames
// Make a list of current users
var current_users = ['john', 'alica', 'bob', 'jane', 'maria'];
// Make another list of new users
var new_users = ['sam', 'jane', 'MIKE', 'carol', 'maria'];
// Loop through new users to check if each username is available
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Convert both new user and current users to lowercase for case-insensitive comparison
    var lowercase_new_user = new_user.toLowerCase();
    // Check if lowercase_new_user exists in current_users
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(lowercase_new_user)) {
        console.log("Sorry, the username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_user, "' is available."));
    }
}
