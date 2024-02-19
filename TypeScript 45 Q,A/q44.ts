// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function make_sandwich(items: string[]): void {
    let summary: string = "You ordered a sandwich with ";

    // Check if there are any items in the array
    if (items.length > 0) {
        // Concatenate each item from the array to the summary string
        summary += items.join(', ');
    } else {
        summary += "nothing";
    }

    // Print the summary of the sandwich
    console.log(summary);
}

// Call the make_sandwich function with 3 different numbers of arguments
make_sandwich(['ham', 'cheese', 'lettuce']);
make_sandwich(['peanut butter', 'jelly']);
make_sandwich([]);
