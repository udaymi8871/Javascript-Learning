let arr = [97, 68, 57, 40, 36, 30];
console.log(arr);
console.log(arr[4]);
console.log(arr[6]);

let player = ["Rohit", "Virat", "Rishabh", "Rahul", "Shubhman", "Kishan"];
for (let i = 0; i < player.length; i++) {
    console.log(player[i]);
}



let marks = [50, 40, 30, 60, 70];
let sum = 0;
for (let val of marks) {
    sum += val;
}
let avg = sum / marks.length; 

console.log(`Marks of class = ${avg}`); 

// 1️.  push() Adds an item to the end


let skills = ["Manual", "API"];
skills.push("Cypress");
console.log(skills);  // // ["Manual", "API", "Cypress"]

// 2. pop() =>  Removes the last item
let skills1 = ["Manual", "API", "Cypress"];
skills1.pop();
console.log(skills1); // ["Manual", "API"]


// 3. unshift => Adds an item to the beginning

let tools1 = ["Selenium", "Postman"];
tools1.unshift("Cypress");
console.log(tools1); // ["Cypress", "Selenium", "Postman"]


//4. shift() => Removes the first item

let tools = ["Cypress", "Selenium"];
tools.shift();
console.log(tools); // ["Selenium"]

//5. length => Returns number of elements in array

let tools2 = ["Cypress", "Selenium", "JMeter"];
console.log(tools2.length); // 3

// includes => Checks if value exists in array

let tools3 = ["Cypress", "Postman"];
console.log(tools3.includes("Cypress")); // true
console.log(tools3.includes("Java"));    // false

//6. indexOf() => Returns index of value (or -1 if not found)
let tools4 = ["API", "UI", "DB"];
console.log(tools4.indexOf("API")); 
console.log(tools4.indexOf("Load")); 


// 7. join() => Joins all elements into a string
let tools5 = ["Cypress", "Selenium", "JMeter"];
console.log(tools5.join(", ")); // Cypress, Selenium, JMeter


// 8. slice(start, end) => Extracts part of the array
let tools6 = ["Cypress", "Selenium", "JMeter", "Postman"];
let selected = tools6.slice(1, 3);
console.log(selected); // ["Selenium", "JMeter"]


//9. splice(start, count) => Adds/removes items at position

let tools7 = ["Cypress", "Postman"];
tools7.splice(1, 0, "Selenium");
console.log(tools7); // ["Cypress", "Selenium", "Postman"]




//10. map() => Transforms each item in a new array

let nums = [1, 2, 3];
let squared = nums.map(n => n * n);
console.log(squared); // [1, 4, 9]


// 12.  filter() => Returns only matching items

let marks3 = [85, 45, 70, 30];
let pass = marks3.filter(m => m >= 50);
console.log(pass); // [85, 70]


// 13. reduce() => Reduces array to a single value

    let numbers = [10, 20, 30];
    let total = numbers.reduce((sum, val) => sum + val, 0);
    console.log(total); // 60





