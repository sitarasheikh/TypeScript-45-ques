// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Example 1
// Program to find and print all prime numbers up to a given number
// Declare a function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// Function to find and print all prime numbers up to a given number
function printPrimesUpTo(maxNumber) {
    for (var i = 2; i <= maxNumber; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
// Test the program
printPrimesUpTo(20);
//Example 2
// Program to calculate the average of an array of numbers
// Array of numbers
var numbers = [10, 15, 20, 25, 30];
// Function to calculate the average of an array of numbers
function calculateAverage(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        sum += num;
    }
    return sum / arr.length;
}
// Calculate and print the average of the array
var average = calculateAverage(numbers);
console.log("The average of the numbers is: ".concat(average));
