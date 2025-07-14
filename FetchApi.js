/*

What is the Fetch API?
The Fetch API is a built-in JavaScript feature that lets you make HTTP requests (GET, POST, PUT, DELETE) to servers — like calling an API to get or send data.

🧠 Think of it like: “JavaScript making a phone call to the internet and asking for information.”

fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));

  */

   // Get Request

    fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));


  //Post Request

  fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Test Post",
    body: "This is a test",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log("Created:", data))
  .catch(err => console.log("Error:", err));

// Async/Await

async function getPost() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
      let data = await res.json();
      console.log("Post:", data);
    } catch (err) {
      console.log("Error:", err);
    }
  }
  
  getPost();
  
