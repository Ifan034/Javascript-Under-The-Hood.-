

//primitive type string, int
let name = 'john'; // Memory allocated for a variable holding a string or number.
let age = 30;
let y = x + 5; // Memory used to store the result of an operation.

//refference type object
let person ={
    name: 'Brad',
    age: 30,
}

let newName = name;
newName = 'Ifan'

let newPerson = person;
newPerson.name = 'Abedin'
console.log(person.name)

// Memory De-allocation (Garbage Collection):
// JavaScript uses automatic garbage collection to reclaim memory that is no longer in use.
// When a variable is no longer referenced or reachable in the program, it becomes eligible for garbage collection.
