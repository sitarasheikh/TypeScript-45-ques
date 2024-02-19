// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


let guests: string[] = ["Albert Einstein", "Ada Lovelace", "Marie Curie"];

for (let guest of guests) {
    console.log(`Dear ${guest},\nI would be honored to have you join me for dinner.\nPlease let me know if you're available.\nBest regards,\n[Your Name]`);
}
