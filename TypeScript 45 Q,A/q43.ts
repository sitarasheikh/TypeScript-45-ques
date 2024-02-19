// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];

    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }

    return great_magicians;
}

// Array of magician's names
let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Make a copy of the magicians array
let magicians_copy: string[] = magicians.slice();

// Call the make_great function with the copy of the magicians array
let great_magicians: string[] = make_great(magicians_copy);

// Call the show_magicians function with the original magicians array
show_magicians(magicians);

// Call the show_magicians function with the great_magicians array
show_magicians(great_magicians);
