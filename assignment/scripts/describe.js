// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/

// 1. WRITE YOUR DESCRIPTION HERE
// We create a string variable called name [deprecated ;)] and set it equal to 'Dane'
// Then were checking if our name variable is equal to the string 'Mary'
// if so console log 'Hi, Mary'
// if not log 'How do you do', This is what will be run

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// we create an empty variable called secret and a variable called code with the value of 123
// if code === 123 (it does in this case), we are assigning secret a value of 'super' and reassigning code a value of double its current value (123 * 2 = 246)
// then were checking if code is greater than 250 (in this case its not) and reassigning our secret variable to 'duper'
// log the secret variable, it will log 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// create three variables called isStudent (boolean), age (number), and zip (number)
// check if student is true and zip is greater than 80,000. student is true but zip isnt greater than 80,000. This code block wont run
// check if student is false OR age is less than 30. Neither is true so this code block wont run either
// check if student is true which it is so 'Welcome to Prime!' will be logged. The else will never be reached.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
Your variables are set incorrectly - colorOne should be blue and colorTwo should be red
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  Youre only reassigning colorOne, not colorTwo also. Add colorTwo = 'purple';
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

You are checking your two statements using the OR operator ||. Switch it to the and operator to fix your issue '&&'
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
Your console logs are reversed, move the enter to the first if statement and the no entry to the second.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
