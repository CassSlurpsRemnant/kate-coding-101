/**
 * Challenge
 * This script is for pet-lovers only.
 * If someone doesn't love pets, we should abort!
 */

// do not change these
var kateLovesPets = true;
var danielLovesPets = false;

if (!kateLovesPets) {
    throw new Error('Kate does not love pets!');
}


if (!danielLovesPets ) {

    throw new Error('Daniel does not love pets!');
}

// Hint, you should not get this far
// daniel does not love pets, so the script should abort
console.log('Yay, everyone loves pets!');