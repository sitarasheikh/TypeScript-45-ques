// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Call the show_magicians function with the magicians array
show_magicians(magicians);
