/* tsc --watch 
node --watch dist/index.js
*/
/*
    // arrays
*/

let names : string[] = ['Sumit', 'Nair', 'Amit']
let ages : number[] = [25,33,44]

names.push('some new name')
ages.push(35)

/*
// type inference with array
*/

let fruits = ['apples', 'bananas', 'mangoes']

const f = fruits[2]

let things = [1, true, 'some string']

const s = things[2]


