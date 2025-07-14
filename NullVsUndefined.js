/**
 Feature	null	undefined
Meaning	Intentionally empty or nothing	Not assigned or not defined
Set By	You (the developer)	JavaScript (by default)
Type	object (weird but true!)	undefined
Common Use	Placeholder for "no value"	Missing value, uninitialized variable

✅ Example 1: undefined by default
javascript
Copy
Edit
let a;
console.log(a); // Output: undefined
🧠 Explanation: Variable a is declared but not given any value. JavaScript sets it to undefined.

✅ Example 2: null as intentional value
javascript
Copy
Edit
let b = null;
console.log(b); // Output: null
🧠 Explanation: You are telling JavaScript “I know this has no value, and that’s okay.”

✅ Example 3: Function without return
javascript
Copy
Edit
function sayHello() {
  console.log("Hello!");
}

let result = sayHello();
console.log(result); // Output: undefined
🧠 Explanation: The function doesn’t return anything, so its result is undefined.

✅ Example 4: Accessing missing object property
javascript
Copy
Edit
let student = { name: "Uday" };
console.log(student.age); // Output: undefined
🧠 Explanation: age doesn’t exist in the object, so it returns undefined.

✅ Example 5: Use null to reset a value
javascript
Copy
Edit
let token = "abc123";
token = null;
console.log(token); // Output: null
🧠 Explanation: You’re clearing out the value intentionally, like logging someone out.

✅ typeof Results
javascript
Copy
Edit
console.log(typeof null);      // "object" ❗ (this is a known JavaScript bug)
console.log(typeof undefined); // "undefined" 
 */