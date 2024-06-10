//Array of current users:
var current_usres = ["Ayesha", "Amna", "Areesha", "Humna", "Umama"];
//Array of new users:
var new_users = ["Ali", "Usman", "Amna", "Ayesha", "Asad"];
//Loop through new_users to check for username availability:
new_users.forEach(function (new_one_users) {
    //Making a condition for username already exist and save in our_condition variable:
    var our_condition = current_usres.some(function (cuurent_one_users) { return cuurent_one_users.toLowerCase() === new_one_users.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_users, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_users, " is availaible"));
    }
});
