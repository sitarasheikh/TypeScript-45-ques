// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guests: string[] = ["Albert Einstein", "Ada Lovelace", "Marie Curie"];

// The guest who can't make it
let oldGuest: string = "Ada Lovelace";

// The new guest
let newGuest: string = "Nikola Tesla";

// Find the index of the old guest
let oldGuestIndex: number = guests.indexOf(oldGuest);

// If the old guest is found in the array, replace it with the new guest
if (oldGuestIndex !== -1) {
    guests[oldGuestIndex] = newGuest;
}

// Print the updated guest list
for (let guest of guests) {
    console.log(guest);
}
