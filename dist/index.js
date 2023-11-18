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
