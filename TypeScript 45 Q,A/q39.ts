// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the city_country function with city Lahore and country Pakistan
console.log(city_country('Lahore', 'Pakistan'));

// Call the city_country function with city London and country United Kingdom
console.log(city_country('London', 'United Kingdom'));

// Call the city_country function with city New York and country United States
console.log(city_country('New York', 'United States'));
