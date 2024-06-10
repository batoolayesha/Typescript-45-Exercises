//Array of current users:
let current_usres = ["Ayesha","Amna","Areesha","Humna","Umama"];

//Array of new users:
let new_users = ["Ali","Usman","Amna","Ayesha","Asad"];

//Loop through new_users to check for username availability:
new_users.forEach(new_one_users =>{

    //Making a condition for username already exist and save in our_condition variable:
    let our_condition = current_usres.some(cuurent_one_users => cuurent_one_users.toLowerCase() === new_one_users.toLowerCase());

    if(our_condition){
        console.log(`Sorry ${new_one_users} is already taken!`)
    }
    else{
        console.log(`This username ${new_one_users} is availaible`)
    }
})

