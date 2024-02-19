// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["Albert Einstein", "Ada Lovelace", "Marie Curie"];
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ",\nI would be honored to have you join me for dinner.\nPlease let me know if you're available.\nBest regards,\n[Your Name]"));
}
