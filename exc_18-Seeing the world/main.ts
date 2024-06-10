//Making a Array of countries and Print its Orignal Order;
let countriesToVisit: string[] = ["Turkey","Greece","Canada","Argentina"];
console.log("Orignal Order:", countriesToVisit);

//Print the Array in Alphabetical order without Modifying the Actual Array List;
console.log("Alphabetical Order:",[...countriesToVisit].sort());

//Show that the array is still in its Orignal order;
console.log("Still in Orignal Order:", countriesToVisit);

//Print the Array in Reverse Order without modifying the Actual Array List;
console.log("Reverse Order:",[...countriesToVisit].reverse());

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