// Exercise 18 Seeing the World
/// 1. Print Array in Original Order
let countries : string[] = ['Japan', 'Thailand', 'Spain', 'Italy', 'Peru'];
console.log('original :' + countries);
/// 2. Print Array in Alphabatical Order
console.log('copy : ' + [...countries].sort());
/// 3. Show Array in original order by printing it
console.log('original :' + countries);
/// 4. Print Array in Reverse order
console.log('copy :' + [...countries].sort().reverse());
/// 5. Reverse the order of list
console.log('original :' + countries.sort());
/// 6. Reverse the order of list again
console.log('original :' + countries.sort().reverse());