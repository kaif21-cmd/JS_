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
[1,2,34,5,6,7,8]
```
