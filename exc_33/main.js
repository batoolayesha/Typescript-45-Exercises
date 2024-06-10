//Creating an Array:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Using for Loop:
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinalEndings = void 0;
    if (oneNumber === 1) {
        ordinalEndings = "st";
    }
    else if (oneNumber === 2) {
        ordinalEndings = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEndings = "rd";
    }
    else {
        ordinalEndings = "th";
    }
    console.log("".concat(oneNumber).concat(ordinalEndings));
}
