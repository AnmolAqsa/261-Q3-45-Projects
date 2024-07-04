/*
Q3. Name Cases: Store a person’s name in a variable, and then print that
 person’s name in lowercase, uppercase, and titlecase.
*/

let person = "AQSA MUGHAL";
console.log(person.toLowerCase());
let person2 = "sana";
console.log(person2.toUpperCase());
let person3 = "angelis";
console.log(person3.replace(/\b\w/g, a => a.toUpperCase()));