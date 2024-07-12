
# DAY 12 
# QUESTION 1
```jsx
function checkAge(data) {
    if (data == [1]) {
      console.log('You are an adult!');
    } else if (data ==[1] ) {
      console.log('You are still an adult.');
    } else {
      console.log(`Hmm.. You don't have an age I guess`);
    }
  }
  
  checkAge([1]);

output is  Hmm.. You don't have an age I guess 
because: The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.
This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false
```
# QUESTION 2
```jsx
function getadd(...add){
  console.log(add)
}
getadd(2+2+2+2+2+2+2+2+2+2)
//ouput [20] give in the form of array 
# Rest Operator allows you to represent an indefinite number of arguments as an array. It's particularly useful in function definitions to handle variable-length argument lists.

```
# QUESTION 3

```jsx
function getAge(...args) {
  console.log(typeof args);
}

getAge(21); //[] array is object 
```
# QUESTION 4 
```jsx
function getAge() {
  'use strict';
  age = 21;
  console.log(age);
}

getAge();
what is global?
if you declare a varibale outside 
what is implicit global?
In JavaScript, when you declare a variable without specifying let, var, or const, the variable is automatically declared as global (if not inside a function) or local (if inside a function). This behavior is called "implicit global" or "global leakage."

with the help of strict keyword we can not declare a  gloabal varible  or we can not declare a varible with their type it will show error  reference error
```
# QUESTION 5

```jsx
const sum = eval('10*10+5');
console.log(sum)
// eval evaluates code that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is 10 * 10 + 5. This returns the number 105.
```
# QUESTION 6
what is hasownproperty ? methord? it will return true if the property in its object not in its prototype same has in set 
```jsx
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);
Explanation:
All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true.

It doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true.
```
# QUESTION 7

```jsx
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.
```
# QUESTION 8
```jsx
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
continue statement is use for skiping the values

```
# Question 9
```jsx
what are falsy values ?
0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;
There are 8 falsy values:

undefined
null
NaN
false
'' (empty string)
0
-0
0n (BigInt(0))
Function constructors, like new Number and new Boolean are truthy.

```
# Question 10
```jsx
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

#ouput:
When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of undefined, but you will see something like:
```

