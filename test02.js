"use strict";
let employeeMap = new Map();
employeeMap.set("Saideep", 20);
employeeMap.set("Karthik", 25);
employeeMap.set("Sumit", 21);
employeeMap.set("Sameer", 22);
employeeMap.set("Raje", { name: "hello", age: 29 });
//Iterating over map keys
for (let name of employeeMap.keys()) {
    console.log("Employee Names= " + name);
}
//Iterating over map values
for (let age of employeeMap.values()) {
    console.log("Employee Age= " + age);
}
console.log("The employeeMap Entries are: ");
//Iterating over map entries
for (let entry of employeeMap.entries()) {
    console.log(entry[0], entry[1]);
}
