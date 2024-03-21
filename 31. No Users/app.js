// Exercise 31 No Users
var usernames = ['admin', 'erica', 'ali', 'jerry', 'tom'];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username.charAt(0).toUpperCase() + username.slice(1), ", thank you for logging in again."));
        }
    }
}
// Clearing the usernames array
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
