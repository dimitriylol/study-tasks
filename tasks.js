// 1. create a function without parameters that will return the string "Hello".

// 2. create an arrow function without parameters that will return the string "World!"

// 3. create a function without parameters that calls (1) and (2) functions and returns the string "Hello World!"

// 4. create a function with 1 string parameter that will return the string "Hello <passed parameter>!" where <passed parameter> is the 1st parameter of the function. 
// Usage example: 
// helloFunction('Dima') returns 'Hello Dima!'

// 5. create a function that accept a string parameter with only 1 character and returns false for characters '!#$%^&*()' and true for any other characters. If the parameter is not a string or a string longer than 1 character, the function returns false.
// Usage example:
// validateCharacter('a') returns true
// validateCharacter('!') returns false
// validateCharacter(10) returns false
// validateCharacter('abc') returns false

// 6. create a function that accept a string parameter and counts occurrences of '!' character in it.
// Usage example:
// countExclamation('Hello World!!!') returns 3
// countExclamation('Hello') returns 0

// 7. create a function that counts numbers in the passed string parameter.
// Usage example:
// countNumbers('I'm 27 years old') returns 2 because there are only 2 numbers in the passed string parameter.

// 8. create a function that counts alphanumeric (characters from A to Z and digits from 0 to 9) characters in the passed string parameter.
// Usage example:
// countAlphanumeric('2 + 2 is 4') returns 5

// 9. create a function that accept 2 parameters:
//    1. a string
//    2. a function that returns either true or false
// the function returns number of times when the function returns true.
// Usage example:
// const isD = (str) => str === 'D'
// countInString('D stands for Dwight!', isD) returns 2.
// const isExclamationPoint = (str) => str === '!'
// countInString('Hello World!!!', isExclamationPoint) returns 3
