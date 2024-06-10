//Define a function to create a car object with optional options:

function create_car (manufacturer , model , ...options){
    //initialize a car object with manufacturer and model:

    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    //Add adiitional options to car object:

    options.forEach(option => {
        let [key,value] = option.split(":");
        car [key.trim()] = value.trim();
    });
    return  car;
}
//Call the function to create a car object:

console.log(create_car("Toyota","Carrola","color: Black","Sunroof: True"));