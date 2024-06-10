var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making a Array of countries and Print its Orignal Order;
var countriesToVisit = ["Turkey", "Greece", "Canada", "Argentina"];
console.log("Orignal Order:", countriesToVisit);
//Print the Array in Alphabetical order without Modifying the Actual Array List;
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
//Show that the array is still in its Orignal order;
console.log("Still in Orignal Order:", countriesToVisit);
//Print the Array in Reverse Order without modifying the Actual Array List;
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
//Show that the array is still in its Orignal order;
console.log("Still in Orignal Order:", countriesToVisit);
//We have Chnged the Orignal Array Now;
console.log("Orignal Array Reversed", countriesToVisit.reverse());
//Print the Array to show that it's back to orignal Array;
console.log(" Back to Orignal Order", countriesToVisit.reverse());
//Print the Array to show that its array has been Alphabetical Order now;
console.log("Sorted in Alphabetical Order", countriesToVisit.sort());
//We have Chnged again the Orignal Array Now in Reverse Order again ;
console.log("Orignal Array Reversed Again", countriesToVisit.reverse());
