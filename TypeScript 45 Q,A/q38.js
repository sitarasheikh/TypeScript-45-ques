// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the describe_city function with city Karachi (in default country)
describe_city('Karachi');
// Call the describe_city function with city London (not in default country)
describe_city('London', 'United Kingdom');
// Call the describe_city function with city New York (not in default country)
describe_city('New York', 'United States');