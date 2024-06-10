//Define the function to show magicians names:
function magicians_name(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to make magicians great through .map() it will modify array:
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magician names:
var magicians_names = ["Harry Potter", "Imran", "Ahsan"];
//Calling the make_great function to modify magicians names:
var great_magicians = make_great(magicians_names);
//Call magicians_name that show modified list of magicians:
magicians_name(great_magicians);
