// Dinner Guests: Working with one of the programs from Exercises 

let guests: string[] = ["Albert Einstein", "Ada Lovelace", "Marie Curie", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"];
let actual_guests = guests.splice(0, 2);
console.log(`Total Guests: ${actual_guests.length}`); // Output: 2
