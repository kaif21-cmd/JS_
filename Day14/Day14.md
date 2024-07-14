# DAY 14
# QUESTION 1
```jsx
console.log(Number(2) === Number(2));//true
console.log(Boolean(false) === Boolean(false));//true
console.log(Symbol('foo') === Symbol('foo'));//false
//Each symbol has unique values 
// The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first Symbol('foo'), and the second Symbol('foo'). These two values are unique and not equal to each other, Symbol('foo') === Symbol('foo') returns false.
```
//2
const name = 'Kaif';
console.log(name.padStart(13));
console.log(name.padStart(15));
console.log(name.padStart(2)) 
//no effect
// pad start methord give the padding in the string
//With the padStart method, we can add padding to the beginning of a string. The value passed to this method is the total length of the string together with the padding. The string "Lydia Hallie" has a length of 12. name.padStart(13) inserts 1 space at the start of the string, because 12 + 1 is 13.
//If the argument passed to the padStart method is smaller than the length of the array, no padding will be added.

//3
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape); //x: 10, y: 20
console.log(Object.isFrozen(shape))//true type boolean
//freze methord makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object).

//4
//for in loop or for of loop
const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

for (let item in myLifeSummedUp) {
  console.log(item);
}
//0 1 2 3
//in return the indexes 
//for in iterate over the enumerable properties of array enumerable property are keys
for (let item of myLifeSummedUp) {
  console.log(item);
}
//"☕" "💻" "🍷" "🍫"
//of give items of array usef for ietrate on array 

//5
const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);//3,2,0.5
//Array elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and other expressions such as dates, functions, and calculations.

//6
function sayHi(name) {
    return `Hi there, ${name}`;
  }
  
  console.log(sayHi());
  //hi there undefined because we not pass a value in arguments
  //in es6 it is possiblefunction sayHi(name = "Lydia") 

  //7
  var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);
//1 avocado print because of in onject this kewprd is used extracxt proprty in methords
//2 happy face 😍 print because using call this bellong to global object and var having priority to print

//8
// function checkAge(age) {
//     if (age < 18) {
//       const message = "Sorry, you're too young.";
//     } else {
//       const message = "Yay! You're old enough!";
//     }
  
//     return message;
//   }
  
//   console.log(checkAge(21));
//Variables with the const and let keywords are block-scoped. A block is anything between curly brackets ({ }). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block it's declared in, a ReferenceError gets thrown.

//corected way
function checkAge(age) {
    if (age < 18) {
      var message = "Sorry, you're too young.";
    } else {
      var message = "Yay! You're old enough!";
    }
  
    return message;
  }
  
  console.log(checkAge(21));
  //Yay! You're old enough!

//9
console.log('I want pizza'[0]);
//In order to get a character at a specific index of a string, you can use bracket notation. The first character in the string has index 0, and so on.
//also do with .charAt().

//10
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
  //object


 

