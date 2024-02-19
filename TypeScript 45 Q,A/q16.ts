// // More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guests: string[] = ["Albert Einstein", "Ada Lovelace", "Marie Curie"];

// Inform people about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

// Add one new guest to the beginning of the array
let newGuest1: string = "Isaac Newton";
guests.unshift(newGuest1);

// Add one new guest to the middle of the array
let newGuest2: string = "Galileo Galilei";
let middleIndex: number = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, newGuest2);

// Add one new guest to the end of the array
let newGuest3: string = "Nikola Tesla";
guests.push(newGuest3);

// Print a new set of invitation messages
for (let guest of guests) {
    console.log(`Dear ${guest},\nI would be honored to have you join me for dinner.\nPlease let me know if you're available.\nBest regards,\n[Your Name]`);
}
