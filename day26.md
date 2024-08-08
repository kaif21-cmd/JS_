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
# Question 8 
```jsx
let num=0
function test(){
    var num=1;
    return num;
}
console.log(test())
console.log(num)
```
#### Output: 1,0

# Question 9 
```jsx
const add=(a=1,b=2)=>a+b
console.log(add())
console.log(add(5))
console.log(add(undefined,10))
output: 3,7,11
```
# Question 10
```jsx
console.log(typeof null);
console.log(typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
```
#### typeof null returns object which is an error in JavaScript. This is a historical bug in the language that cannot be fixed without breaking existing code. So, to check for null, you should use === null instead of typeof operator.

typeof undefined returns undefined.

null === undefined is false because null and undefined are two distinct types in JavaScript.

null == undefined is true because == is the loose equality operator in JavaScript, which performs type coercion before comparison. In this case, both null and undefined are coerced to undefined before comparison, and since they both have the same value, the comparison returns true. However, it is generally recommended to use === instead of == to avoid unexpected behavior due to type coercion

# Question 11
### Calculating all postive number in the array 
```jsx
let sum=0
const ar=[1,-2,3,4,5]
ar.map((n)=>{
    if (n>-1){
        sum=sum+n
    }
})
console.log(sum)
```

```jsx
function sumofpostive(n){
    let sum=0;
    for(let i=0;i<n.length;i++){
        if(n[i]>0){
            sum=sum+n[i]
        }
    }
    return sum;
}
const arr=[1,2,3,4,-1]
console.log(sumofpostive(arr))
```
# Question 12
#### Write a function in JavaScript that takes a string as input and returns a new string with all the vowels removed.
```jsx
function  removevowels(str){
    const vowels=["a", "e", "i", "o", "u", "A", "E"]
    let newstr=" "
    for(let i=0;i<str.length;i++){
        if(!vowels.includes(str[i])){
            newstr=newstr+str[i]
        }
    }
    return newstr
}
const str = "This is a test string with vowels";
console.log(removevowels(str));
```
# Question 13 Sort the array 
```jsx
function sorting(){
    return arr.sort()
}
const arr=[2,7,1,3]
console.log(sorting(arr))
```
