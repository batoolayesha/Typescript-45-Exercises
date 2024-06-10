//Define a function with rest parameter that aacept items arrguments representing our sandwich:
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking the sandwich with the following item:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
//Call the function three times with different number of arguments:
makeSandwich("chicken", "Mashrooms", "Cheese", "Garlic Sauce");
makeSandwich("Bread", "Jam");
makeSandwich("Bread", "Eggs", "Mayo", "Cucumber", "Chicken Tikka");
