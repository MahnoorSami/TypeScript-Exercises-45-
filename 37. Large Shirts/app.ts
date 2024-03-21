// Exercise 37 Large Shirts
function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and the message printed on it is "${message}".`);
}
make_shirt(); // Default large shirt with default message
make_shirt('Medium'); // Medium shirt with default message
make_shirt('Small', 'Hello, World!'); // Small shirt with custom messag