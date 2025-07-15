/*  What Are Classes and Objects?
✅ Class: A blueprint to create objects (like a template).
✅ Object: An actual item built using that blueprint (like a real thing).
📦 Real-Life Example:
Class: “Car” (general idea)

Object: “Honda City”, “Toyota Innova” (actual cars based on the class)

🔧 JavaScript Class Syntax
javascript
Copy
Edit
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(this.brand + " " + this.model + " is starting...");
  }
}
🔍 Explanation:
class Car {} → creates a class

constructor() → special method that runs when object is created

this.brand → stores brand inside the object

start() → is a method of the class

🚗 Create Objects from Class
javascript
Copy
Edit
let car1 = new Car("Honda", "City");
let car2 = new Car("Toyota", "Innova");

car1.start(); // Honda City is starting...
car2.start(); // Toyota Innova is starting...
📚 Let's Break It Down Step-by-Step
✅ 1. Define a Class
javascript
Copy
Edit
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
✅ 2. Create Object from Class
javascript
Copy
Edit
let student1 = new Student("Uday", 25);
student1.greet(); // Hello, my name is Uday
✅ 3. Add Multiple Methods
javascript
Copy
Edit
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }
}

let calc = new Calculator();
console.log(calc.add(5, 2));      // 7
console.log(calc.subtract(5, 2)); // 3
✅ 4. Use this Keyword
javascript
Copy
Edit
class Message {
  constructor(text) {
    this.text = text;
  }

  print() {
    console.log(this.text);
  }
}

let msg = new Message("JavaScript is fun!");
msg.print(); // JavaScript is fun!
✅ 5. Class Inheritance (Extend a Class)
javascript
Copy
Edit
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog("Bruno");
dog.speak(); // Bruno barks.
🧠 Summary Table
Concept	Example Syntax	Purpose
Class Definition	class Person {}	Blueprint for objects
Constructor	constructor(name) { this.name }	Runs when object is created
Method	greet() {}	Function inside a class
Object	new Person("Uday")	Actual usable item from class
this keyword	this.name	Refers to current object
Inheritance	class Dog extends Animal {}	Get properties/methods from parent class

✅ Real-World Use in Cypress
Example: Reusable login as a class method

javascript
Copy
Edit
class Login {
  perform(email, password) {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("button[type='submit']").click();
  }
}

const login = new Login();
login.perform("qa@test.com", "Test@123");
Would you like next:

📄 A PDF version of this guide?

🧪 Exercises on classes & objects?

🚀 Mini project using classes (like Quiz App, Calculator)?

Let me know and I’ll prepare it!

*/