// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guests = ["Albert Einstein", "Ada Lovelace", "Marie Curie"];
// The guest who can't make it
var oldGuest = "Ada Lovelace";
// The new guest
var newGuest = "Nikola Tesla";
// Find the index of the old guest
var oldGuestIndex = guests.indexOf(oldGuest);
// If the old guest is found in the array, replace it with the new guest
if (oldGuestIndex !== -1) {
    guests[oldGuestIndex] = newGuest;
}
// Print the updated guest list
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log(guest);
}
