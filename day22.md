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
