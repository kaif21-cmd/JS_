
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
