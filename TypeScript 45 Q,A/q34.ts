// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// Store numbers 1 through 9 in an array
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let num of numbers) {
    // Use an if-else chain to determine the proper ordinal ending
    if (num === 1) {
        console.log(`${num}st`);
    } else if (num === 2) {
        console.log(`${num}nd`);
    } else if (num === 3) {
        console.log(`${num}rd`);
    } else {
        console.log(`${num}th`);
    }
}