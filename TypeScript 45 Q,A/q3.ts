//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Sitara";
console.log(`Original name: ${personName}`);
console.log(`Lowercase: ${personName.toLowerCase()}`);
console.log(`Uppercase: ${personName.toUpperCase()}`);
console.log(`Titlecase: ${toTitleCase(personName)}`);

function toTitleCase(str: string): string {
    return str.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}
