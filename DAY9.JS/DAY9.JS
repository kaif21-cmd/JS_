//QUESTION 1 USE CASE OF MAP FUNCTION 
const users=[
    {name:"kaif",age:23},
    {name:"shahan",age:23},
    {name:"umair",age:23},
    {name:"shahrukh",age:24}
]
const names=users.map(users=>users.name==="shahan")
console.log(names)
//output give new array which contain all the names
//["kaif", "shahan", "umair", "shahrukh"].

//question 2 use case of map convert dates into string 
const dates=[
    new Date("2024-01-01"),
    new Date("2024-07-09"),
    new Date("2024-02-01")
]
const date=dates.map(date=>date.toString())
console.log(date)
//give date in string format
//output 'Mon Jan 01 2024 05:30:00 GMT+0530 (India Standard Time)',

//3 question
//DIFFERENCE BETWEEN FOREACH AND MAP METHORD
//if we want to transform element in the array we use for Each
// but Map methord give only new array then we use methord map methord 

const Numbers=[1,2,3,4,5]
const double=Numbers.map((num)=>num*2)
console.log(double)
// [ 2, 4, 6, 8, 10 ] give new array

Numbers.forEach((num)=>{
    console.log(num*2)
}) //2 4 6 8 10

//4 Question 
let arr=[1,"",null,10,true,false]
let result=arr.filter(Boolean)
console.log(result)
// [ 1, 10, true ] give the truthy value only 

//5 Question
const fruits=['banana','orange','tomato']
fruits.splice(0,1)
fruits.unshift('grape')
console.log(fruits)

//Question 6 Splice and slice methord
const fruit=['banana','orange','tomato','apple','mango']
fruit.splice(1,3) //delete array from index 1 to 3
fruit.slice(1,3)
console.log(fruit)
//The splice method removes 'orange', 'tomato', and 'apple' from the original array, while the slice method creates a new array with 'mango' and leaves the original array unchanged.

//Question 7 
console.log(1 + + "2")
console.log(2**2)//work as exponential operator
console.log(1- "2")//-1
console.log(1 - - "2")//3

//question 8 on Hoisting
// let name="kaif"
// function getname(){
//     console.log(name)
//     let name="kaif shaikh"
// }
// getname``
 
// show refrence error hoisting only occurs in var not const and let 
//output let are curly brace scope varibale so golobaly cancel and there is hoisting and hoisting accurs only in var not in let and const it will show referce error
//if we do same thing with var show undefined  

//question 9
function sayhi(){
    return (()=>0)() //immediate invoke function
}
console.log(typeof sayhi())
// type of sayhi function is number 

function saybye(){
    return (()=>"bye")``
}
console.log(typeof saybye`` )
//string

//question 10
//fetching the user data using promises
function fetchFunction() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error found in fetching operation", error);
        });
}

// fetchFunction();

//More clean code using asyc await 
async function fetchFunction() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error found in fetching operation", error);
    }
}

fetchFunction();

//Question 11
const promise1 = Promise.resolve('first');
const promise2 = Promise.resolve('second');
const promise3 = Promise.reject('third');
const promise4 = Promise.resolve('fourth');

const runPromise = async () => {
    try {
        const res1 = await Promise.all([promise1, promise2, promise4]);
        console.log('res1:', res1);
    } catch (error) {
        console.error('Error in res1:', error);
    }

    try {
        const res2 = await Promise.all([promise3, promise1, promise2]);
        console.log('res2:', res2);
    } catch (error) {
        console.error('Error in res2:', error);
    }
};

runPromise()
    .then(res => console.log('Completed'))
    .catch(err => console.log(err));
//res1: [ 'first', 'second', 'fourth' ]
// Error in res2: third
// Completed

//Summary of the Execution Flow
// res1: Promise.all([promise1, promise2, promise4]) resolves and logs ['first', 'second', 'fourth'].
// res2: Promise.all([promise3, promise1, promise2]) rejects and logs the error third.
// Completion: The runPromise function completes, logging Completed because the rejection was caught and handled within the function.


