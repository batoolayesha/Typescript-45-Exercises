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

//inform that only two guest can be invited;
console.log("Unfortunately, the new dinner wont arrive on time, so i can only invite two guest to dinner with me");

//using while loop to remove guest from the array until onlu two names remains;
while(guestList.length > 2){
    let removedguesst = guestList.pop();
    console.log(`Sorry, ${removedguesst} I can't invite you to dinner`);
}
// sending a invititions to the last two guest on the list;
console.log("Invitations to the last two guest");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo} you are still invited to dinner`));

//Removing last two guesst from the list;
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);


