//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Sitara";
console.log("Original name: ".concat(personName));
console.log("Lowercase: ".concat(personName.toLowerCase()));
console.log("Uppercase: ".concat(personName.toUpperCase()));
console.log("Titlecase: ".concat(toTitleCase(personName)));
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
