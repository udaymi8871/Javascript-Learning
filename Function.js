// function UdayMishra() {
//     console.log("Apna college");
//     console.log("kodnest QA");
    
    
// }
// UdayMishra();



function UdayMishra(msg) {
    console.log(msg); 
    
}
UdayMishra("I love js");


1. // Function Declaration (Named Function)
function greet() {
    console.log("Hello, Uday!");
  }
  
  greet(); // Output: Hello, Uday!



  //2. //  Function Expression

  const sayHi = function() {
    console.log("Hi there!");
  };
  
  sayHi(); // Output: Hi there!

  // 3. Arrow Function (ES6)
  const add = (a, b) => {
    return a + b;
  };
  
  console.log(add(2, 3)); // Output: 5

  
  //4. Anonymous Function

  setTimeout(function() {
    console.log("This runs after 2 seconds");
  }, 2000);

  //5. Immediately Invoked Function Expression (IIFE)

  (function () {
    console.log("I run immediately!");
  })();

  
  //6. Function with Parameters and Arguments

  function greet(name) {
    console.log("Hello, " + name);
  }
  
  greet("Uday"); // Output: Hello, Uday

  
  // 7. Function with Return

  function square(num) {
    return num * num;
  }
  
  let result = square(4);
  console.log(result); // 16

  
  // 8. Default Parameters
  function welcome(name = "Guest") {
    console.log("Welcome, " + name);
  }
  
  welcome(); // Welcome, Guest
  welcome("Uday"); // Welcome, Uday

  
  // Rest Parameters (...args)
  function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sumAll(1, 2, 3, 4)); // 10

  
  
  // Output: Hello Uday
  //         Goodbye!

  //11. Nested Functions

  function outer() {
    function inner() {
      console.log("I am inner!");
    }
  
    inner();
  }
  
  outer(); // Output: I am inner!

  
  // 12. Constructor Function

  function User(name) {
    this.name = name;
  }
  
  const user1 = new User("Uday");
  console.log(user1.name); // Uday

  
  // 13. Recursive Function

  function countdown(n) {
    if (n === 0) return;
    console.log(n);
    countdown(n - 1);
  }
  
  countdown(3); // 3, 2, 1


  //Callback Function
  function greet(name, callback) {
    console.log("Hello " + name);
    callback;
  }
  
  function sayBye() {
    console.log("Goodbye!");
  }
  
  greet("Uday", sayBye);
  


  


  


  