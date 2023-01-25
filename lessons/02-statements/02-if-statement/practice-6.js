/**
 * Challenge
 * Complete the function below so that the code
 * outputs the correct messages.
 *
 * A user must have a firstName, lastName, email,
 * and password to signup.
 */

// valid user
var user1 = {
  firstName: "Kate",
  lastName: "Farr",
  email: "katetheamazing@gmail.com",
  password: "123456",
};

// invalid user
var user2 = {
  firstName: "Cassidy",
  lastName: "", // no email
  email: "", // no email
  password: "123456",
};

// invalid user
var user3 = {
  firstName: "Freddy",
  lastName: "Fazbear",
  email: "ilike@jumpscares.com",
  password: false, // no password
};

const isValidUser = function (user) {
  /* your code here */
  // return true or false
};

console.log("User 1 is valid:", isValidUser(user1)); // true
console.log("User 2 is valid:", isValidUser(user2)); // false
console.log("User 3 is valid:", isValidUser(user3)); // false
