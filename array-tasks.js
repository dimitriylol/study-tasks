// 1. create two functions that accepts an array of numbers and adds it up:
//   1.1. the function `addViaForLoop` implements add up by iterating through array via for loop
//   1.2. the function `addViaReduce` implements add up by using `.reduce` function
// Examples: 
// addViaForLoop([10,20,30]) returns 60
// addViaReduce([0.5,0,2]) returns 2.5

// 2. create two functions that accepts an array of any elements and adds only numbers from them:
//   2.1. the function `safeAddViaForLoop` implements add up by iterating through array via for loop
//   2.2. the function `safeAddViaReduce` implements add up by using `.reduce` function
// Examples:
// safeAdd(['abc',10,[], 20]) returns 30
// safeAdd([undefined, {}]) returns 0

// 3. create `addNeighbors` function that accepts and array of numbers and returns an array of added neighbor numbers.
// Examples:
// addNeighbors([1,2,10,20]) returns [3,30]
// addNeighbors([10]) returns [10]
// addNeighbors([1,2,3]) returns [3,3]

// 4. create two functions that accepts a string and returns an array of substrings splitted by 'separator' string:
//   4.1. the function `splitBuiltIn` uses built-in JS function to do the split.
//   4.2. the function `splitForLoop` uses for loop to do splitting.
// Examples:
// splitBuiltIn('myseparator string separator!') returns ['my', ' string ', '!']
// splitForLoop('my another separator string separator!') returns ['my another ', ' string ', '!']
