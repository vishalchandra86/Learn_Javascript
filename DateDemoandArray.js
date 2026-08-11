//**********************Date Demo************************* */
// const d= new Date();
// console.log(d.toString());

//=====================Array Demo================================/
// const cars=["BMW","Volvo","Saab","Ford"];
// console.log(`car at position 3 is ${cars[3]}`);
//change element in array
// cars[0]="Toyota";
// console.log(`car at position 0 after change is ${cars[0]}`);
// console.log(`full element of array car is ${cars}`);
//array as json
//console.log(`array as json is ${JSON.stringify(cars)}`);
//looping an array
// for(let i=0;i<cars.length;i++){
   
//     console.log(`car at position ${i} is ${cars[i]}`);
// }

//using for each loop
// cars.forEach(function(cars){
//     console.log(`car is ${cars}`);
// });

//adding the element in array
// cars.push("Audi");
// console.log(`after adding the element in array is ${JSON.stringify(cars)}`);

// const fruits = ["apple", "banana", "mango", "litchi", "guava"];
// fruits.length = 3;
// console.log(`after fixing fruits array length to 3: ${fruits}`);
// console.log(`fruit at index 1 is ${fruits.at(1)}`);
// console.log(`fruit at index 2 is ${fruits.at(2)}`);
//join method
//fruits.join("||");
//console.log(`after joining the fruits array is ${fruits.join("||")}`);

//adding and removing from array
// fruits.push("kiwi");
// console.log(`after adding kiwi in fruits array is ${fruits}`);
// fruits.pop();
// console.log(`after removing last element from fruits array is ${fruits}`);

//javascript array concat
// const arr1 = ["apple", "banana"];
// const arr2 = ["orange", "grape"];
// const arr3 = arr1.concat(arr2);
// console.log(`after concatenating the two arrays is ${arr3}`);

// const numbers=[4,9,16,25,29];

// function myFunction(value,index,array){
//     return value>18;
// }
// const result=numbers.filter(myFunction);
// console.log(`after filtering the numbers array is ${result}`);
//SORT METHOD
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(`before sorting the fruits array is ${fruits}`);
// fruits.sort();
// console.log(`after sorting the fruits array is ${fruits}`);
const cars = [
  {model:"Volvo", year:2016},
  {model:"Saab", year:2001},
  {model:"BMW", year:2010}
];
cars.sort((a, b) => a.year - b.year);
console.log(JSON.stringify(cars.map(({ model, year }) => ({ model, year }))));