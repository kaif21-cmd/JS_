const { promises } = require("nodemailer/lib/xoauth2");
//1.
console.log(typeof undefined);//it returns the string "undefined"
//2.
let a=null
console.log(typeof null)//object 
//In JavaScript, null is a special value that represents the intentional absence of any object value. However, when using the typeof operator on null, it returns "object" due to a peculiarity in the language's initial implementation.
//3.
console.log([1,2]==[1,2]) //false
let arr1=[1,2];
let arr2=[1,2];
//4.
console.log(arr1==arr2)//false
//5.
const str="hello my name is kaif"
let str1=str.split();
console.log(str1)
for(let i=0;i<str1.length;i++){
    console.log(str1[i])
}
//6.
console.log('5'+3)//53
console.log('5'-3)//2
console.log(typeof('5'+3))//string
console.log(typeof('5'-3))//number
//7.
console.log('2'+3*4)//3*4->12-> 212
console.log(typeof('2+3*4'))//string 
//8.
var b=5
console.log(b++)
console.log(b) //5,//6
//9.
console.log(typeof NaN)//number
console.log(NaN===NaN)//false nan is not a fix number 
console.log(NaN==NaN)//false nan is not a fix number 
//10.
console.log(1<2<3)// 1<2-true-1 and 1<3-true// output is true
console.log(3>2>1)//3>2-true-1 and 1>1 -false// output is false
console.log(2<3>1<2>3)//false
//3 se chote print krdo 
//11.
let arr=[0,1,2,3,4,5];
let res=arr.filter((e)=>{
 return e<3
})
//12.
console.log(res)
let arr3=[0,2,3,4,5,6];
let res2=arr.filter((e)=>{
   return e%2==1;
})
console.log(res2)
// n short, the filter method in JavaScript creates a new array containing all elements from the original array that satisfy a specified condition.

// Key Points:
// Purpose: To filter elements based on a condition.
// Returns: A new array with elements that pass the test.
// Syntax: array.filter(callback(element[, index[, array]])[, thisArg])
// Callback Function: Tests each element. Returns true to keep the element, false otherwise.
//13.
var x=20
function foo(){
    console.log(x)
    var x=10;
}
foo() //undefined due to hoisting 
//14. execution sequence 
setTimeout(() => {
    console.log('timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('promise');
    console.log('end');
});
//becouse of micro and macro task execution 
//call back function are macro task
//promises are micro

//16. execution  sequence 
console.log('start')
setTimeout(()=>{
    console.log('Timout')
},0)
console.log('End')
//start
//end
//timout 
//due to synchronus and async operation eventloop synchonus will execute first 

