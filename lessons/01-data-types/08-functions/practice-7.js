/**
 * Challenge
 * Fix the following code so that it runs.
 * Note: there are 2 problems with this script
 */

function logString(string) {
  console.log(string);
}

function sayHello(extra) {
  return "Hello " + extra + "!";
}

function greetFamily() {
  var greetPerson = function (name) {
    logString(sayHello(name));
  };
  greetPerson("Kate");
  greetPerson("Daniel");
  greetPerson("Cassidy");
}

greetFamily();

