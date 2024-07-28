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
# Question  7 
```jsx
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	console.log(objA == objB);
	console.log(objA === objB);
	console.log(objA.toString() == objB.toString());
	console.log(objA.toString() === objB.toString());
}());
output All true due to var onjb=obja refernce pass pointing to same memory
and tostring methord convert to string with the help of this we can campre the objects 
```
# Question 8
```jsx
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	objB.foo = 'bar';
	console.log(objA.foo);
	console.log(objB.foo);
}());
due to refernce pass if we change in obja then there is change occur in objb also
output bar bar
```
 # Question 9 
 ```jsx
(function() {
	var array1 = [];
	var array2 = new Array(100);
	var array3 = new Array(['1',2,'3',4,5.6]);
	console.log(array1);
	console.log(array2);
	console.log(array3);
	console.log(array3.length);
}());
array1:
var array1 = []; creates an empty array.
Output: []
This prints an empty array.
array2:
var array2 = new Array(100); creates an array with a length of 100, but no elements are initialized. It has 100 slots, but they are all empty (i.e., undefined).
Output: Array(100), which will appear as [ <100 empty items> ] in most JavaScript environments.
This prints an array with 100 empty slots
array3:
var array3 = new Array(['1',2,'3',4,5.6]); creates a single-element array where the sole element is itself an array (['1',2,'3',4,5.6]).
The constructor new Array() when given a single argument, creates an array with that single argument as its first element.
Output: [['1',2,'3',4,5.6]]
This prints an array containing one element, which is another array
array3.length:
array3.length returns the number of elements in array3. Since array3 contains one element (the nested array), the length is 1.
Output: 1
This prints the length of array3, which is 1
output: [] [] [Array[5]] 1
```
# lets understand new Array methord
## In JavaScript, the Array constructor can be used to create new arrays in different ways depending on the arguments provided. Here’s a detailed look at how the Array constructor works:
```jsx
var arr = new Array();
create empty array
```
```jsx
var arr = new Array(length);
var arr = new Array(3); // Creates an array with 3 empty slots
var arr = new Array(1, 2, 3); // Creates an array with elements [1, 2, 3]
var arr = new Array([1, 2, 3]); // Creates an array with one element, which is the array [1, 2, 3]
var nestedArray = new Array([1, 2, 3]);
console.log(nestedArray); // [[1, 2, 3]]

```
