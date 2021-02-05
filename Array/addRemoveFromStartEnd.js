/**
 * add element/elements at the end of an array
 */
var array = [];
// push CHANGES THE ORIGINAL ARRAY and returns the length of the changed array
array.push(2); // push single element // [2]
array.push(3, 5, 4); // push multiple elements // [2,3,5,4]

/**
 * add element/elements at the start of an array
 */
var array = [];
// unshift CHANGES THE ORIGINAL ARRAY and returns the length of the changed array
array.unshift(2); // push single element at the start // [2]
array.unshift(3); // push single element at the start // [3, 2]
array.unshift(5); // push single element at the start // [5, 3, 2]
array.unshift(1, 9); // push multiple elements in sequence at the start // [1, 9, 5, 3, 2]



/**
 * remove element/elements at the end of an array
 */
var array = [2, 3, 5, 4, 1, 12, 8];
// remove single element and returns removed element value and CHANGES THE ORIGINAL ARRAY
var removedElem = array.pop(); // removedElem = 8

var array = [2, 3, 5, 4, 1, 12, 8];
// slice removes element/elements and returns an array of removed element/elements and DOESN"T CHANGE THE ORIGINAL ARRAY
// returns new array from start to end-1 position. If end is not provided, end's default value is Array.length
// Array.prototype.slice(start, [, end]);
var removedElem = array.slice(0, array.length - 2) // start: 0, end: 5 -> 0 to 4 -> removedElem = [2, 3, 5, 4, 1]

var array = [2, 3, 5, 4, 1, 12, 8];
var removedElem = array.slice(-1) // start: -1 -> removedElem = [8] ~ array.slice(6) ~ array.slice(array.length-1)
var removedElem = array.slice(-2) // start: -2 -> removedElem = [12, 8] ~ array.slice(5) ~ array.slice(array.length-2)
// Conclusion: Array.prototype.slice(-X); = Array.prototype.slice(Array.prototype.length - X);

/**
 * remove element/elements at the start of an array
 */
var array = [2, 3, 5, 4, 1, 12, 8];
// shift CHANGES THE ORIGINAL ARRAY and returns the removed element which is always Array[0]
var removedElem = array.shift(); // removedElem = 2

// slice removes element/elements and returns an array of removed element/elements and DOESN"T CHANGE THE ORIGINAL ARRAY
// returns new array from start to end-1 position. If end is not provided, end's default value is Array.length
// Array.prototype.slice(start, [, end]);
// Array.prototype.slice(-X); = Array.prototype.slice(Array.prototype.length - X);
var array = [2, 3, 5, 4, 1, 12, 8];
let noOfElemRemoveFromStart = 3;
let sliceStart = -(array.length - noOfElemRemoveFromStart); // - 4
var removedElem = array.slice(sliceStart); // removedElem = [4,1,12,8]
