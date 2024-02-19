// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Array of magician's names
let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Call the make_great function with the magicians array
make_great(magicians);

// Call the show_magicians function with the magicians array to see that the list has been modified
show_magicians(magicians);
