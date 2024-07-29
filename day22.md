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
