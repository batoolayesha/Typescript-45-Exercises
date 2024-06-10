//creating a guest list array;
let guestList = ["Ayesha","Fatima","Farwa","Maham"];

//making variable for those guest who can't come;
let dontCome = guestList[3];

//print the name of guest who cant come;
console.log(dontCome, "Nahi a sakti han");

//Add or Remove Values from Guest list array;
guestList.splice(3,4, "Sadia")

//message print for bigger table;
console.log("Good News ! We have Found a Bigger Table For Dinner.");

//Adding a new guest at starting index of array;
guestList.unshift("Aliza");

//Adding a new guest at the ending of the array;
guestList.push("Zainab");

//Get a  middle index of our Array;
let middleIndex: number = Math.floor(guestList.length / 2 );

//Adding a new guest to middle index of the array;
guestList.splice(middleIndex,0,"Neelam");

//printing a message of updated list;
console.log("Updated List of our Guesst");

//Sending a invitation message to our guests one by one with their names;
guestList.forEach(oneGuest => console.log(` Salam ${oneGuest} would you like you dinner with me`));