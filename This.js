/**
 In JavaScript, this refers to the object that is currently executing the code.

You can think of this as a pointer to the object you're working with at the moment.

🔄 this Changes Based on Where It's Used
Where Used	What this Refers To
In a regular function	undefined (in strict mode) or window
In a method (inside an object)	That object
In a class	The current instance (object)
In an event handler	The element that triggered the event
In arrow functions	Same this as the outer function
 */

let user = {
    name: "Uday",
    greet: function () {
      console.log("Hi, I'm " + this.name);
    }
  };
  
  user.greet(); // Hi, I'm Uday
  