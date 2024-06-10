//creating a Array:
let user_name = ["Ali","Ayesha","Admin","Faris","Maheen"];

// using foreach loop on Array:
user_name.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser},would you like to see a status report?`);
    }
    else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
});

