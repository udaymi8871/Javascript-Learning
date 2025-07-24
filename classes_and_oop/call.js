function SetUsername(username) {
    this.username = username;
}
function createUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "uday@kodnest", "1234");
console.log(chai.username);

