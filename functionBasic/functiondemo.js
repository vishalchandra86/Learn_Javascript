function addtwoNumbers(a, b) {
    console.log("Adding two numbers:", (a+ b));
    return a + b;
}
addtwoNumbers(5, 10);

function logMessage(message) {
    console.log("Log message:", message);
}
console.log(logMessage(`This is a test message.`));

function userloggedin(username){
    return `${username} has logged in successfully.`;
}
console.log(userloggedin("Akhilesh"));