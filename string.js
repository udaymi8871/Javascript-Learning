// let str = "ApnaCollege";
// console.log(str[8]);


// let obj =  {
//     item: "pen",
//     price: 10
// }

// let output = `This cost of ${obj.item} is ${obj.price} ruppees`;
//  console.log(output);



// let specialString = `This is the template leteral`;
// console.log(typeof specialString);

//String Method

//1. length

let name = "Uday Mishra"
console.log(name.length);

//2. 

let text = "I love Cypress testing";
console.log(text.includes("Cypress"));
console.log(text.includes("teing"));


// 3. IndexOf
let sentence = "Welcome to kodnest";
console.log(sentence.indexOf("to"));


//4. slice
let msg = "Automation Testing";
console.log(msg.slice(5, 10));

// 5 toLowerCase

let title = "HELLO QA";
console.log(title.toLowerCase()); // hello qa


//toUpperCase

let course = "javascript";
console.log(course.toUpperCase()); 

//replace
let sentence1 = "Cypress is awesome. Cypress is fun.";
console.log(sentence1.replace("Cypress", "JavaScript"));


//replaceAll()

let log = "Error: 404. Error: 500. Error: 503.";
console.log(log.replaceAll("Error", "Warning"));

//concat
let first = "Cypress";
let second = "Automation";
console.log(first.concat(" ", second)); 


// 4. trim()

let userInput = "   Uday QA   ";
console.log(userInput.trim()); 


//trimStart() / trimEnd()

let txt = "   Cypress   ";
console.log(txt.trimStart()); 
console.log(txt.trimEnd());  

//split(separator)

let csv = "QA,Dev,Manager";
let roles = csv.split(",");
console.log(roles);


//startsWith() / endsWith()

let log1 = "Error: Timeout";

console.log(log1.startsWith("Error")); 
console.log(log1.endsWith("Timeout")); 


//repeat(count)
let line = "-";
console.log(line.repeat(10)); 

// toString()

// let num1 = 123;
// console.log(num.toString());






