// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function store_car_info(manufacturer: string, model: string, ...additional_info: string[]): object {
    let car_info: {[key: string]: string} = {manufacturer: manufacturer, model: model};

    // Check if additional_info is not empty
    if (additional_info.length > 0) {
        // Iterate through each additional_info and split it by '=' to get the key and value
        for (let info of additional_info) {
            let [key, value] = info.split('=');

            // Add the key-value pair to the car_info Object
            car_info[key.trim()] = value.trim();
        }
    }

    return car_info;
}

// Call the store_car_info function with the required information and two other name-value pairs
let car_info: object = store_car_info('Toyota', 'Camry', 'color=red', 'transmission=automatic');

// Print the Object that's returned
console.log(car_info);
