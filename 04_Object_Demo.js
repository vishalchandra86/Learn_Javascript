const person={
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
    companies:["TCS","Wipro","Infosys"],
    Details:function(){
        return `${person.firstName} ${person.lastName} is ${person.age} years old and has ${person.eyeColor} eyes and having origin is ${person.nationality}.`
    }
}
person.nationality="American";
console.log(`first name of person is ${person.firstName}`);
console.log(person.Details());

let result ="nationality" in person;
console.log(result);
//use freeze method to fix object
Object.freeze(person);
person.age=41;
console.log(person.age);
console.log(person["companies"]);