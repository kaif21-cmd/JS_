# Day 27 Javascript
# Question 1
```jsx
let x = 5;
{
  let x = 10;
  console.log(x);
}
console.log(x);
// let is curly braces scope 
```
```jsx
5
10
```
# if we do same thing from var then what we get 
```jsx
var x =5;
{
    var x=10
    console.log(x)
}
console.log(x)
```
```jsx
10
10
```
# Question 2
```jsx
const arr1=[1,2,3,4]
const arr2=[5,6,7,8]
const arr3=[...arr1,...arr2]
console.log(arr3)
```
```jsx
[1,2,3,4,5,6,7,8]
```
# Question 3 
```jsx
const ar1=[1,2,3,4]
const ar2=[...ar1]
ar2.push(5)
console.log(ar2)
console.log(ar1==ar2)
```
#### this is known as shaloow copy refernce not passed here if we compare then will show falses
# Question 4
```jsx

const x = 10;

function foo() {
  console.log(x);
  const x = 20;
}

foo();
//reference error 
```
```jsx
show us reference error becouse of hoisting occured only in var not in let,conts 
```
# Question 5
```jsx
const a = [1, 2, 3];
const b = a;

b.push(4);

console.log(a);
console.log(b);
```
### output is a=[1,2,3,4]
b=[1,2,3,4]
due to refernce pass here 
and also if we compare it 
```jsx
console.log(a==b)
it will show true due to same reference memory
```
# Question 6
```jsx
console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof [1, 2, 3]);
console.log(typeof { name: "John", age: 25 });
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof function () {});
```
#### Output:
```jsx
number
string
boolean
object
object
object
undefined
function
```
# Question 7 
```jsx
console.log(getType(42));
console.log(getType("Hello"));
console.log(getType(true));
console.log(getType([1, 2, 3]));
console.log(getType({ name: "John", age: 25 }));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType(function () {}));

//The function should print "array" for "[]" and "null" for "null" types.
```
output: 
```jsx
number
string
boolean
Array
Object
null
undefined
Function
```
####
The function getType takes a value as an argument and returns its type. If the value is null, it returns null. Otherwise, it uses the constructor.name property to determine the type of the value.

getType(42) returns "number" because 42 is a numeric value.
getType("Hello") returns "string" because "Hello" is a string.
getType(true) returns "boolean" because true is a boolean value.
getType([1, 2, 3]) returns "Array" because arrays are considered objects in JavaScript, and the constructor name for an array is "Array".
getType({ name: "John", age: 25 }) returns "Object" because objects are considered objects in JavaScript, and the constructor name for an object is "Object".
getType(null) returns null because null is a special value in JavaScript.
getType(undefined) returns "undefined" because it is a special value in JavaScript representing an uninitialized variable.
getType(function() {}) returns "Function" because it is a function object, and the constructor name for a function is "Function".
The getType function can be used to dynamically determine the type of values in JavaScript.
# Question 8
```jsx
function calculateSum() {
  console.log(result);
  var num1 = 5;
  let num2 = 10;
  const num3 = 15;
  var result = num1 + num2 + num3;
}

calculateSum();
```
#### Show Undefined due to hoisting
if we used const let then it will show reference error 
# Question 9
```jsx
let x = 10;

function updateX() {
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
}

updateX();
```
#### Output:
20,10 let is blobk scope curly brace scoped variable
# Question 10
```jsx
const person = {
  name: "John",
  age: 30,
};

Object.freeze(person);
person.age = 40;

console.log(person.age);

```
#### with the object freeze methord we can freeze the objects
# Question 11

```jsx
let x = 10;

function outer() {
  console.log(x);

  if (false) {
    var x = 20;
  }
}

outer();
```
### Output: Undefined 
