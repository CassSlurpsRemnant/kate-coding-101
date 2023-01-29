/**
 * Challenge
 *
 * Create a variable called "myName" and put in a name.
 * Create a variable called "myAge" and put in an age.
 *
 * Create a variable called "friendsFromSchool" and give it a number.
 * Create a variable called "friendsFromWork" and give it a number.
 *
 * Create a variable called "message", and combine the above variables
 * so that the output is:
 * Hello, my name is {my name} and I am {my age} years old.
 * I have {total friends} friends.
 *
 * Output the message.
 */ 
var myName = "Quandel Dingle" ;
var myAge = 1586;
var friendsFromSchool = 0;
var friendsFromWork = 0; // L u have no friends
var totalFriends = friendsFromSchool + friendsFromWork;
var message = "hey guys, " + myName + " " + "here! and i am" + " " + myAge + " " +
"years old, and i have" + " " + totalFriends + " " + "friends";

console.log(message)