// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("the Great ".concat(magician));
    }
    return great_magicians;
}
// Array of magician's names
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Make a copy of the magicians array
var magicians_copy = magicians.slice();
// Call the make_great function with the copy of the magicians array
var great_magicians = make_great(magicians_copy);
// Call the show_magicians function with the original magicians array
show_magicians(magicians);
// Call the show_magicians function with the great_magicians array
show_magicians(great_magicians);
