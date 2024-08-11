# Day 28 Javascript 
# Question 1 Remove first n elements of an array
```jsx
function myfunction(a){
    return a.slice(3)
}
const array=[1,2,3,4,5]
const result=myfunction(array)
console.log(result)
output: [ 4, 5 ]
```
# Question 2 Get last n elements of an array Extract last 3 element from the array
```jsx
function myfunction(a){
    return a.slice(-3)
}
const array=[1,2,3,4,5]
const result=myfunction(array)
console.log(result)
output: [ 3, 4, 5 ]
```
# Question 3 Get first N element from index
```jsx
function myfunction(a){
    return a.slice(0,3)
}
const array=[1,2,3,4,5]
const result=myfunction(array)
console.log(result)
output: [ 1, 2, 3 ]
```
# Question 4 Remove a specific array element
```jsx
function myfunction(a,b){
    return a.filter(aitem=>aitem!==b)
}
const a=[1,2,3,4,2]
const result=(myfunction(a,2))
console.log(result)
output : [ 1, 3, 4 ]
```
# Question 5 calculate the length of array
```jsx
function myfunction(a){
    return a.length
}
const a=[1,2,3,4,2]
const result=myfunction(a)
console.log(result)
output: 5
```
# Question 6 Count number of negative values in array
```jsx
function myfunction(a){
    return a.filter(elem=>elem<0).length
}
const a=[-1,-2,3,4,-2]
const result=myfunction(a)
console.log(result)
output : 3
```
# Question 7 Calculate the sum of an array of numbers

```jsx
function myfunction(a) {
    return a.reduce((acc, curr) => acc + curr, 0);
}

const a = [-1, -2, 3, 4, -2];
const result = myfunction(a);

console.log(result);
```
# Question 8 Return the average of an array of numbers
```jsx
function myfunction(a) {
    return a.reduce((acc, curr) => acc + curr, 0)/a.length
}

const a = [1, 2, 3, 4, 2];
const result = myfunction(a);

console.log(result);

```
# Question 9 Merging of array
```jsx
const kaif=[1,2,3,4]
const shaikh=[5,6,7,8]
const merge=[...kaif,...shaikh]
console.log(merge)
output : [
  1, 2, 3, 4,
  5, 6, 7, 8

```
