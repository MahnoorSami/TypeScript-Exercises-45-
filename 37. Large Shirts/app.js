// Exercise 37 Large Shirts
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size, " and the message printed on it is \"").concat(message, "\"."));
}
make_shirt(); // Default large shirt with default message
make_shirt('Medium'); // Medium shirt with default message
make_shirt('Small', 'Hello, World!'); // Small shirt with custom messag
