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

```
