//ES6 new features
//1)let variable have block scope 
//we can redeclare the block variable
// var x = 15;
// {

//    let x = 5;
//    console.log(x);
// }
// console.log(x);
//2)const and let varaibles are same but we cannot reinitialize the const varaibles
// const y = 10;
// y = 20//error
//3)arrow functions
// var x = function(x,y){
//    return x+y;
// }
// console.log(x(10,20));
// //same as
// var x = (x,y)=>x+y;
// console.log(x(10,20));
//Difference is:
// In a normal function, this is determined dynamically, based on how the function is called.
// If called as a method of an object, this refers to that object.
// If called as a standalone function, this refers to the global object (in non-strict mode) or undefined (in strict mode).
// an arrow function, this is lexically bound, meaning it takes this from the surrounding non-arrow function scope at the time the arrow function is defined. It does not change based on how or where the function is called.
//Arrow functions do not have thier own this keyword they are not suitable for defining object methods 
//they are not hoisted we need to declare then before using it
//4) Spread operator(expands the iterable)
//The spread operator can be used to expand elements of an array into another array.
//The spread operator allows an array to be expanded into individual elements when passing arguments to a function.

// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9,10];
// const arr3 = [...arr1,...arr2];
// console.log(arr3);
// const  myNumbers = [5,6,8];
// let maxValue = Math.max(...myNumbers);
// console.log(maxValue);
//5)for of loop
// const nums = [3,4,5,6];
// let sum = 0;
// for(num of nums){
//    sum+=num;
// }
// console.log(sum);
// const name = "CipherSchools";
// let text = "";
// for(let ch of name){
//    text += ch+" ";
// }
// console.log(text);
// 6)map object
// const fruits = new Map([
//    ["apples",500],
//    ["bananas",600],
//    ["oranges",200],
// ]);
// console.log(fruits);
// console.log(fruits.get("oranges"));
//7)set ds
// const letters = new Set();
// letters.add("a");
// letters.add("b");
// letters.add("a");
// console.log(letters);
// class Car{
//    constructor(name,mfgYear){
//       this.name=  name;
//       this.mfgYeaar = mfgYear;
//    }
// }
// const myCar1 = new Car("Mercedes",2022);
// const myCar2 = new Car("POrsche",2022);
// console.log(myCar1,myCar2);
//8) Promise (Promise the code of exection)
// const fun = ()=>{
//    return new Promise(function(resolve,reject){
//       setTimeout(()=>{
//          console.log("This is inside promise");
//          resolve();
//       },2000);
//    })
// }
// fun()
// .then(()=>{
//    console.log("resolved");
// })
// .catch(()=>{
//    console.log("Rejected");
// })
//9)Symbol(to make elements as unique);
// const person=  {
//    firstName:"Yamuna",
//    lastName:"Kachi"
// }
// let id = Symbol("id");
// person[id] = 12355;
// console.log(person);
//10 default paraments

// const addNumbers  = (a,b = 20,)=>a+b;
// console.log(addNumbers(10));
//11)REST operator
// The rest operator can be used to gather all remaining arguments into an array. 
// This is useful for functions that accept a variable number of arguments.
// const addNumbers = (...args)=>{
//   args.forEach((ele)=>{
//    console.log(ele)
//   })

// }
// addNumbers(3,5,6,7,9);