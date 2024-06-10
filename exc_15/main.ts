let guestList = ["Ayesha","Fatima","Farwa","Maham"];

let dontCome = guestList[3];

console.log(dontCome, "Nahi a sakti");

guestList.splice(3,4,"Sadia");

guestList.forEach(guest=> console.log(`Salam ${guest} would you like to Dinner with me?`));4