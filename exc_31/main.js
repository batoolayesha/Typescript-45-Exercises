var userNames = ["Ali", "Maheen", "Admin", "Faris", "Misba"];
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // using foreach loop on Array:
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ",would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
