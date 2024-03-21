// Exercise 30 Hello Admin
var usernames = ['admin', 'erica', 'dora', 'jerry', 'tom'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username.charAt(0).toUpperCase() + username.slice(1), ", thank you for logging in again."));
    }
}
