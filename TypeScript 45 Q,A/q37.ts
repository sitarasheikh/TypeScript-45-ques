// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string, message: string): void {
    console.log(`The size of the shirt is ${size} and the message printed on it is "${message}".`);
}

// Call the make_shirt function with size "M" and message "Hello, World!"
make_shirt('M', 'Hello, World!');
