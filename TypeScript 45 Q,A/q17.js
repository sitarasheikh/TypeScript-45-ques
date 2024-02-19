// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var guests = ["Albert Einstein", "Ada Lovelace", "Marie Curie", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"];
// Inform people about the smaller dinner table
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner, and we have space for only two guests.");
// Remove guests from the end of the array until only two guests remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", but we have to cancel the invitation due to space constraints."));
}
// Print a new set of invitation messages
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ",\nI would be honored to have you join me for dinner.\nPlease let me know if you're available.\nBest regards,\n[Your Name]"));
}
