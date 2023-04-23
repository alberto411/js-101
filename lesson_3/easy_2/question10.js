// Write a one-line expression to count the number of 't' characters
// in each of the strings below

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split("").filter(char => char === "t").length;
statement2.split("").filter(char => char === "t").length;
