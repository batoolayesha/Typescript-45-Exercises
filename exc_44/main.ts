//Define a function with rest parameter that aacept items arrguments representing our sandwich:

function makeSandwich (...items: string[]){
    console.log("\nMaking the sandwich with the following item:\n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich");
}

//Call the function three times with different number of arguments:

makeSandwich("chicken","Mashrooms","Cheese","Garlic Sauce");

makeSandwich("Bread","Jam");

makeSandwich("Bread","Eggs","Mayo","Cucumber","Chicken Tikka");