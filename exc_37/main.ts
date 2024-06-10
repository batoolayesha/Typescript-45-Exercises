//Making a Function:

function make_shirt (size:string = "Large",printMessage:string = "I love typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

//Calling a Function: 

make_shirt();

//calling a Function now with medium size With default message:

make_shirt("Medium");

//Calling a Function now with small size with Different print message:

make_shirt("Small","Practice makes a man prefect");