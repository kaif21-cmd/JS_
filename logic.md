# Question 1 
# Remove the vowels from the string 
```jsx
var string = "hello kaif";
var vowels = ['a', 'e', 'i', 'o', 'u'];

let result = string.split('').filter(char => {
    return !vowels.includes(char);
}).join('');

console.log(result);

```
 # Question 2 find the vowels in the string 
 ```jsx
var string = "hello kaif";
var vowels = ['a', 'e', 'i', 'o', 'u'];

let result = string.split('').filter(char => {
    return !vowels.includes(char);
}).join('');

console.log(result);

```
# Question 3 Removing the Duplicates from a string 
```jsx
var string = "hello kaif";

let result = [...new Set(string)].join('');

console.log(result);

```
