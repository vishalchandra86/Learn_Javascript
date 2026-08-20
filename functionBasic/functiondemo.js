// function addtwoNumbers(a, b) {
//     console.log("Adding two numbers:", (a+ b));
//     return a + b;
// }
// addtwoNumbers(5, 10);

// function logMessage(message) {
//     console.log("Log message:", message);
// }
// console.log(logMessage(`This is a test message.`));

// function userloggedin(username){
//     return `${username} has logged in successfully.`;
// }
// console.log(userloggedin("Akhilesh"));

// function calculateNumber(...num){ // rest operator
//     return num;
// }
// console.log(calculateNumber(12,24,36,48,60));

const username={
    name: "Akhilesh",
    price: 1000,

    }

//  

const newArray=[200,400,600,800,1000];

function returnArrayValue(getarrayvalue){
    return getarrayvalue[2];
}
console.log(returnArrayValue(newArray));