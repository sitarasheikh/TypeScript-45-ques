// // More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guests = ["Albert Einstein", "Ada Lovelace", "Marie Curie"];
// Inform people about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");
// Add one new guest to the beginning of the array
var newGuest1 = "Isaac Newton";
guests.unshift(newGuest1);
// Add one new guest to the middle of the array
var newGuest2 = "Galileo Galilei";
var middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, newGuest2);
// Add one new guest to the end of the array
var newGuest3 = "Nikola Tesla";
guests.push(newGuest3);
// Print a new set of invitation messages
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ",\nI would be honored to have you join me for dinner.\nPlease let me know if you're available.\nBest regards,\n[Your Name]"));
}
