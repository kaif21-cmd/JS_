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
```
```jsx
show us reference error becouse of hoisting occured only in var not in let,conts 
```
