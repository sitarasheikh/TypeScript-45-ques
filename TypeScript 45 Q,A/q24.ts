// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Test for equality and inequality with strings
let car: string = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False

// Tests using the lower case function
let str: string = 'HELLO';
console.log("Is str.toLowerCase() == 'hello'? I predict True.");
console.log(str.toLowerCase() == 'hello'); // True

// Numerical tests involving equality and inequality
let num: number = 5;
console.log("Is num == 5? I predict True.");
console.log(num == 5); // True
console.log("Is num != 5? I predict False.");
console.log(num != 5); // False
console.log("Is num > 10? I predict False.");
console.log(num > 10); // False
console.log("Is num < 10? I predict True.");
console.log(num < 10); // True
console.log("Is num >= 5? I predict True.");
console.log(num >= 5); // True
console.log("Is num <= 5? I predict True.");
console.log(num <= 5); // True

// Tests using "and" and "or" operators
let age: number = 25;
console.log("Is age >= 18 && age < 30? I predict True.");
console.log(age >= 18 && age < 30); // True
console.log("Is age < 18 || age >= 30? I predict False.");
console.log(age < 18 || age >= 30); // False

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.indexOf('apple') != -1); // True

// Test whether an item is not in an array
console.log("Is 'pear' not in fruits? I predict True.");
console.log(fruits.indexOf('pear') == -1); // True
