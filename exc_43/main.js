//Define the function to show magicians names:
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to make magicians great through .map() it will modify array:
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magician names:
var magicians_names = ["Harry Potter", "Imran", "Ahsan"];
//Making a copy of orignal array through .slice() function:
var copymagicians_name = magicians_names.slice();
//Modify the copied array to include "The Great" with their names:
var copy_great_magicians = make_great(copymagicians_name);
//Show both arrays orignal and copied:
//Orignal
console.log("Orignal Array\n");
show_magicians(magicians_names);
//Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
