# Day 22 
# Question 1 
```jsx
(function () {
  var array = new Array('a', 'b', 'c', 'd', 'e');
  array[10] = 'f';
  delete array[10];
  console.log(array.length);
}());
```
# Question 2 
```jsx
(function(){
	var array = [1,2,3,4,5];
	console.log(array.indexOf(2));
	console.log([{name: 'John'},{name : 'John'}].indexOf({name:'John'})); //due to diffeent refrence return -1
	console.log([[1],[2],[3],[4]].indexOf([3])); //due to differnt referece return -1
	console.log("abcdefgh".indexOf('e'));
})();
output : 1
-1
-1
4
```
# Question 3 
```jsx
(function(){
	var containers = [2,0,false,"", '12', true];
	var containers = containers.filter(Boolean);
	console.log(containers);
	var containers = containers.filter(Number);
	console.log(containers);
	var containers = containers.filter(String);
	console.log(containers);
	var containers = containers.filter(Object);
	console.log(containers);		
})();
//
```
# Explanation of 3 Question in details
```jsx
var containers = containers.filter(Boolean);
console.log(containers);
//filter(Boolean) filters out any "falsy" values from the array. Falsy values in JavaScript are false, 0, "" (empty string), null, undefined, and NaN.
The array [2, 0, false, "", '12', true] contains the falsy values 0, false, and "".
After filtering, the array becomes: [2, '12', true].
Output: [2, '12', true]
//2
var containers = containers.filter(Number);
console.log(containers);
filter(Number) filters out any elements that, when converted to a number, result in NaN or 0 (which is considered falsy).
The array [2, '12', true]:
2 is a number and is kept.
'12' is a string that can be converted to a number (12) and is kept.
true is converted to 1 and is kept.
After filtering, the array remains: [2, '12', true].
Output: [2, '12', true]

//3
var containers = containers.filter(String);
console.log(containers);

filter(String) filters out any elements that, when converted to a string, result in an empty string "".
The array [2, '12', true]:
2 is converted to "2" and is kept.
'12' is already a string and is kept.
true is converted to "true" and is kept.
After filtering, the array remains: [2, '12', true].
Output: [2, '12', true]
//
Fourth Filter Operation: filter(Object)
var containers = containers.filter(Object);
console.log(containers);
filter(Object) filters out any elements that are null or undefined, as those are the only values that are not considered "objects" in JavaScript.
The array [2, '12', true] contains no null or undefined values.
After filtering, the array remains: [2, '12', true].
Output: [2, '12', true]
```
# Question 4
#### slice is used to make a shallow copy of array from given index (1) or (1,3) means from 1 to 2 not 3 
```jsx
(function(){
	var list = ['foo','bar','john','ritz'];
	    console.log(list.slice(1));	
	    console.log(list.slice(1,3));
	    console.log(list.slice());
	    console.log(list.slice(2,2));
	    console.log(list);				
})();
```
### Explanation of 4
```jsx
var list = ['foo', 'bar', 'john', 'ritz'];
console.log(list.slice(1));
slice(1) creates a shallow copy of the array starting from index 1 to the end.
The elements starting from index 1 are: ['bar', 'john', 'ritz'].
Output: ['bar', 'john', 'ritz']
console.log(list.slice(1, 3));
slice(1, 3) creates a shallow copy of the array starting from index 1 up to, but not including, index 3.
The elements from index 1 to 2 (index 3 not included) are: ['bar', 'john'].
Output: ['bar', 'john']
console.log(list.slice());
slice() with no arguments creates a shallow copy of the entire array.
The result is a copy of the original array: ['foo', 'bar', 'john', 'ritz'].
Output: ['foo', 'bar', 'john', 'ritz']
console.log(list.slice(2, 2));
slice(2, 2) specifies the start and end indices as 2, which means it starts at index 2 and ends before index 2.
This results in an empty array because there are no elements between index 2 and 2.
Output: []

```
# Question 5
#### The splice method is being used to remove elements from the list array
```jsx
(function(){
	var list = ['foo','bar','john'];
	    console.log(list.splice(1));		
	    console.log(list.splice(1,2));
	    console.log(list);			
})();
//list.splice(1) removes elements starting from index 1 to the end, resulting in ['bar', 'john'] being removed and leaving ['foo'].
list.splice(1, 2) attempts to remove elements starting from index 1, but since there are no elements at index 1 in the current list (['foo']), nothing is removed.
The final state of the list is ['foo'].

```
# Question 6 
```jsx
var obj = {
  message: 'Hello',
  innerMessage: function () {
    (function () {
      console.log(this.message);
    }());
  }
};
console.log(obj.innerMessage());
//This refers to global context
in iffe function here
```
# Question 7
```jsx
function myFunc(){
	console.log(this.message);
}
myFunc.message = "Hi John";
	
console.log(myFunc());
//undefined

```
# Question 8
```jsx
function myFunc(param1,param2) {
  console.log(myFunc.length);
}
console.log(myFunc());
console.log(myFunc("a","b"));
console.log(myFunc("a","b","c","d"));
//First Call: console.log(myFunc());

When myFunc is called without arguments, it still has two declared parameters.
myFunc.length will be 2.

//Second Call: console.log(myFunc("a", "b"));

When myFunc is called with arguments "a" and "b", it still has two declared parameters.
myFunc.length remains 2.

//3
Third Call: console.log(myFunc("a", "b", "c", "d"));

When myFunc is called with more arguments than declared parameters, only the declared parameters are considered.
myFunc.length is still 2, regardless of the number of arguments passed.
 final output is 2 2 2
```
# Question 9
```jsx
function myFunc() {
  console.log(arguments.length);
}
console.log(myFunc());
console.log(myFunc("a","b"));
console.log(myFunc("a","b","c","d"));
// output:
The arguments.length property reflects the number of actual arguments passed to the function during the call.
It is different from the length property of the function object (myFunc.length), which only reflects the number of declared parameters in the function.
//output : 0,2,4
```
# Question 10
```jsx
var employeeId = 'aq123';
function Employee() {
  this.employeeId = 'bq1uy';
}
console.log(Employee.employeeId);

```
### Explanation
```jsx
Global employeeId: The global variable employeeId ('aq123') is not related to Employee.

Instance Property: In Employee, this.employeeId = 'bq1uy' sets employeeId for instances created with Employee, but this property is not on the Employee function itself.

Function Property: Employee.employeeId refers to a property directly on the Employee function object. Since this property hasn't been defined, it is undefined.
```
