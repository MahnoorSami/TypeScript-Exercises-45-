// Exercise 24 More Conditional Tests
// 1. Test for equality and inequality with strings
let name1 = 'John';
let name2 = 'john';
console.log("Are name1 and name2 equal when case is ignored? I predict False.");
console.log(name1.toLowerCase() == name2.toLowerCase());

// 2. Test using the lower case function
let city = 'New York';
console.log("Is city in lowercase equal to 'new york'? I predict False.");
console.log(city.toLowerCase() == 'new york');

// 3. Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 20;
let num2 = 10;
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);

console.log("Is num1 equal to num2? I predict False.");
console.log(num1 == num2);

// 4. Tests using "and" and "or" operators
let a = 5;
let b = 10;
let c = 15;
console.log("Is a greater than b and b less than c? I predict True.");
console.log(a > b && b < c);

console.log("Is a greater than b or b greater than c? I predict False.");
console.log(a > b || b > c);

// 5. Test whether an item is in an array
let colors = ['red', 'blue', 'green'];
console.log("Is 'yellow' in colors? I predict False.");
console.log(colors.includes('yellow'));

// 6. Test whether an item is not in an array
console.log("Is 'red' not in colors? I predict False.");
console.log(!colors.includes('red'));