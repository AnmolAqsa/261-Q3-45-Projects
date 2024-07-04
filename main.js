var person = "AQSA MUGHAL";
console.log(person.toLowerCase());
var person2 = "sana";
console.log(person2.toUpperCase());
var person3 = "angelis";
console.log(person3.replace(/\b\w/g, function (a) { return a.toUpperCase(); }));
