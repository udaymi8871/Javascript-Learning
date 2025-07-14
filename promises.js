function doHomework(subject, callback) {
    console.log("Started homework on", subject);
    callback(); // calling the passed function
}

function homeworkDone() {
    console.log("Homework is done!");
}

doHomework("Math", homeworkDone);

/*
States of a Promise:
Pending (waiting)

Resolved (success)

Rejected (error)


*/
let promise = new Promise((resolve, reject) => {
    let isSuccess = true;

    if (isSuccess) {
        resolve("Task successful!");
    } else {
        reject("Something went wrong.");
    }
});

promise
    .then((msg) => console.log("✅", msg))
    .catch((err) => console.log("❌", err));

//==================================================>


function wait() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("⏰ Done waiting!"), 2000);
    });
}

wait().then((msg) => console.log(msg));

//===========================================================================>


function delay() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Finished after 2 sec"), 2000);
    });
}

async function runTask() {
    console.log("Task starting...");
    let result = await delay(); // wait here
    console.log(result);
    console.log("Task completed!");
}

runTask();
/*
🧠 Explanation:
async makes a function return a promise

await pauses until the promise is resolved

Code becomes easy to read like synchronous code


 
*/



//================================================================================>

    async function fetchUser() {
        try {
          let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
          let data = await res.json();
          console.log("User:", data.name);
        } catch (err) {
          console.log("Fetch failed:", err);
        }
      }
      
      fetchUser();
      