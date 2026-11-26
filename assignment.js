
// 1. Reverse a String

let str = "hello";
let reversedStr = str.split("").reverse().join("");

console.log("Original String:", str);
console.log("Reversed String:", reversedStr);


// 2. Check Whether a String is a Palindrome

let word = "madam";
let reversedWord = word.split("").reverse().join("");

if (word === reversedWord) {
    console.log(word + " is a Palindrome");
} else {
    console.log(word + " is not a Palindrome");
}


// 3. Find the Largest Number in an Array

let numbers = [10, 25, 5, 40, 15];
let largest = Math.max(...numbers);

console.log("Largest Number:", largest);


// 4. Remove the First Element from an Array

let fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.shift();

console.log("Array after removing first element:", fruits);
