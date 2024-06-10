//Define a function to create a car object with optional options:
function create_car(manufacturer, model) {
    //initialize a car object with manufacturer and model:
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //Add adiitional options to car object:
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call the function to create a car object:
console.log(create_car("Toyota", "Carrola", "color: Black", "Sunroof: True"));
