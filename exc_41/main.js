//define a Function to print each magician name from an array:
function magician_name(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Define an array containing magicians name:
var magician_names = ["Harry Potter", "Ahsan", "Imran"];
//Call the function to print each  magicians name:
magician_name(magician_names);
