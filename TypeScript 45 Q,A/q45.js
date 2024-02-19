// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function store_car_info(manufacturer, model) {
    var additional_info = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additional_info[_i - 2] = arguments[_i];
    }
    var car_info = { manufacturer: manufacturer, model: model };
    // Check if additional_info is not empty
    if (additional_info.length > 0) {
        // Iterate through each additional_info and split it by '=' to get the key and value
        for (var _a = 0, additional_info_1 = additional_info; _a < additional_info_1.length; _a++) {
            var info = additional_info_1[_a];
            var _b = info.split('='), key = _b[0], value = _b[1];
            // Add the key-value pair to the car_info Object
            car_info[key.trim()] = value.trim();
        }
    }
    return car_info;
}
// Call the store_car_info function with the required information and two other name-value pairs
var car_info = store_car_info('Toyota', 'Camry', 'color=red', 'transmission=automatic');
// Print the Object that's returned
console.log(car_info);
