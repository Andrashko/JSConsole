import promptSync from "prompt-sync";
let prompt = promptSync();


let str = prompt("Input string: ");
console.log(`String:${str}`);
let int = parseInt(prompt("Enter integer number:"));
console.log(`Number:${int}`);