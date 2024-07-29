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
