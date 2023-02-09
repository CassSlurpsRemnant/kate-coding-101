/**
 * Challenge
 * Fix the broken script so that it runs
 */

var person = {
    firstName: "Quandel",
    lastName: "Dingle",
    address: {
        "street-address": "123 shrek is hot lane",
    },
};

var streetAddress = person.address["street-address"];

console.log("my street address is", streetAddress);
