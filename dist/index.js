"use strict";
/* tsc --watch
node --watch dist/index.js
*/
/*
    // arrays
*/
let names = ['Sumit', 'Nair', 'Amit'];
let ages = [25, 33, 44];
names.push('some new name');
ages.push(35);
/*
// type inference with array
*/
let fruits = ['apples', 'bananas', 'mangoes'];
const f = fruits[2];
let things = [1, true, 'some string'];
const s = things[2];
/*
// Object literals
*/
let user = {
    firstName: 'Sumit',
    age: 30,
    id: 2
};
user.firstName = 'test';
/*
//
// type inference with object literals
//
*/
let person = {
    name: 'Sumit Nair',
    age: 30
};
person.name = "Sumit";
person.age = 31;
const age = person.age;
/*
// Functions
*/
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(5, 6);
subtractTwoNumbers(8, 2);
function addAllNumbers(items) {
    const total = items.reduce((a, b) => a + b, 0);
    console.log(total);
}
addAllNumbers([5, 5, 6, 7, 8]);
/*
*
*Return type inference
*
*/
function formatGreeting(name, greeting) {
    return `${name}, ${greeting}`;
}
const result = formatGreeting('Sumit', 'How are you ?');
console.log(result);
