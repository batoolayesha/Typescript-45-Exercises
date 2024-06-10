//creating a Array:
var user_name = ["Ali", "Ayesha", "Admin", "Faris", "Maheen"];
// using foreach loop on Array:
user_name.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
