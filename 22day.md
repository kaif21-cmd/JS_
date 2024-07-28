# Day 22 
# Question 1 Calculate the lenght of Array
 ```jsx
var counterArray = {
  A : 3,
  B : 4
};
counterArray["C"] = 1;
 as we Know there object is also treated as Array in js and therefor there is no built in methord in js to calculate object lenght
console.log(Object.keys(counterArray)) with the helo of thus we get all the keys present in the object
[ 'a', 'b', 'c' ]
we get the lenght by using this
console.log(Object.keys(counterArray).length)
//3

```
# 2nd methord
```jsx
var counterArray={
    a:3,
    b:4,
}
counterArray["c"]=1;
function getlenght(object){
    var count=0;
    for(key in object){
        if(object.hasOwnProperty(key))
        count++;
    }
    return count 
}
const length=getlenght(counterArray)
console.log(length)
```
# Question 2
```jsx
var employeeId = '1234abe';
(function() {
	console.log(employeeId);
	var employeeId = '122345';
	(function() {
		var employeeId = 'abc1234';
	}());
}());
output: undefined due to hoisting
```
 # Question 3 
 ```jsx
(function() {
	console.log(typeof displayFunc);
	var displayFunc = function(){
		console.log("Hi I am inside displayFunc");
	}
}());
output is undefined due to hoisting 
```
# Question 4
```jsx
var employeeId = 'abc123';

function foo() {
	employeeId();
	return;

	function employeeId() {
		console.log(typeof employeeId);
	}
}
foo();
```
# Question 5 
```jsx
(function foo() {
	bar();

	function bar() {
		abc();
		console.log(typeof abc);
	}

	function abc() {
		console.log(typeof bar);
	}
}());
//output function function 
hoisting applies to function declarations in their entirety, including their body, which is why both bar and abc are accessible throughout the foo function. Function expressions, on the other hand, are only partially hoisted, and their initialization occurs where the expression is written. Thus, you can't call a function expression before its definition, as it will be undefined at that point.
```
# Question 6
```jsx
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = Object.create(objA);
	console.log(objA.toString() == objB.toString());
	console.log(objA.toString() === objB.toString());
}());
output: true true
with the help of o string methord  we can campare two objects 
```
