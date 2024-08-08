# Day 26 
# Question 1 Output of the code 
```jsx
const x={
    foo:1
}
const y={
    foo:2
}
function addfoo(obj){
    return obj.foo+1
}
console.log(addfoo(y))
console.log(addfoo(x))
output: 3,2
```
# Question 2 output 
```jsx
const arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

#### Output: 5 5 5 5 5The setTimeout function is called inside of a loop that iterates through the elements in the arr array. The setTimeout function will execute its callback function after a delay of 1000 milliseconds. However, by the time the delay has elapsed and the callback function is called, the loop will have already completed and the value of i will be 5. As a result, the output will be 5 printed five times.

# Question 3 
### Implementing ForEach Loop
```jsx
const ar=[1,2,3,4,5]
ar.forEach(function(elem){
    console.log(elem)
})
```
# Question 4
### Guess the Output 
```jsx
let x=1;
if (function f(){}){
    x+= typeof f; // x= x + typeof f 
}
console.log(x);
output: 1 undefined 
```
# Question 5 
### Guess the output 
```jsx
let a={
    x:1,
    y:2,
}
let b=a
a.x=5;
console.log(a)
console.log(b)
```
#### Output: { x: 5, y: 2 } ,{ x: 5, y: 2 }  due to reference value arr,objects are belongs to refernce type
# Question 6 
```jsx
let x=[1,2,3]
let y=[1,2,3]
let z=y
console.log(x==y) //due to  pointing reference different memory 
console.log(x===y) //due to  pointing reference different memory 
console.log(z==y)//true because of same memory referece when u pass z=y reference value passed 
console.log(z==x)
```
#### Output : 
false
false
true
false
# Question 7 
```jsx
let a = { x: 1 };
let b = { x: 2 };
let c = { x: 3 };
let d = { x: 4 };
let e = { x: 5 };
let arr = [a, b, c, d, e];

arr.forEach((obj) => (obj.x = obj.x * 2));

console.log(a.x, b.x, c.x, d.x, e.x);
```
#### output: 
2 4 6 8 10

The code is using the forEach method to iterate over an array of objects, and it is modifying the x property of each object by multiplying it by 2.

It's updating the original objects with x*2 values.

So, the output of the code is 2 4 6 8 10.
