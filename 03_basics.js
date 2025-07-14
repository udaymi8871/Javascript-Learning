function sayMyName() {
    console.log("U");
    console.log("D");
    console.log("A");
    console.log("Y");

}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
//console.log("Result :", result);

function logInUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a name ");
        return

    }
    return `${username} just logged in`
}
console.log(logInUserMessage());


function calculatePrice(val1, val2, ...num1) {

    return num1
}
console.log(calculatePrice(200, 300, 400, 2000));

const user = {
    userName: "Uday",
    age: 27
}

function handelObject(anyObject) {
    console.log(`user name is ${anyObject.userName} and age is ${anyObject.age}`);

}

//handelObject(user);

handelObject({
    userName: "Sam",
    age: 26
})

const myNewArray = [200, 300, 400, 500, 600]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue([200, 300, 400, 500, 600]));
