//Making a Function:
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
//Calling a Function: 
make_shirt();
//calling a Function now with medium size With default message:
make_shirt("Medium");
//Calling a Function now with small size with Different print message:
make_shirt("Small", "Practice makes man prefect");
