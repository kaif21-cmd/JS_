# Day 24 
# Question
# Swaping of two numbers 
```jsx
let num1=10;
let num2=20;
const  ex=[num1,num2]=[num2,num1]
console.log(ex,num1,num2)
```
# Question 2 
# Number is integer or not 
```jsx
 var a=function isint(value){
    return value%1===0;
}
console.log(a(1.5))
```
### Built in methord for finding the integer
```jsx


function isint(n){
    return Number.isInteger(n)
}
console.log(isint(2.5))
```
# Question 3 
# Reverse a string 
```jsx 
const str = "kaif shaikh";
let reversedString = "";
for (let i = 0; i < str.length; i++) {
  reversedString = str.charAt(i) + reversedString;
}
 
 console.log(reversedString);
```
### Built in methord
```jsx
const str = "JavaScript is awesome";
const b=str.split(" ").reverse().join(" "); // "awesome is JavaScript"
 console.log(b)
```
# Question 4 
### use of Math.floor()
#### The Math.floor() function in JavaScript returns the largest integer less than or equal to a given number.
```jsx
console.log(Math.floor(4.7));  // Output: 4
console.log(Math.floor(4.3));  // Output: 4
console.log(Math.floor(-4.7)); // Output: -5
console.log(Math.floor(-4.3)); // Output: -5

```
# Question 5 
### Reverse of a Number 
```jsx
let num = 20111001;
let reverse = 0;

while (num != 0) {
    reverse = reverse * 10 + (num % 10);  // Add the last digit of num to reverse
    num = Math.floor(num / 10);           // Remove the last digit from num
}

console.log(reverse); // Output the reversed number

```
# Question 6 
#### Replace a word with other word
```jsx
const str="kaifffff"
const b=str.replaceAll("f","a")
console.log(b)
output : kaiaaaaa
```
# Question 7
#### Write a function which can convert the time input given in 12 hours format to 24 hours format
```jsx
function convertTo24HrsFormat(timeText) {
  var timeTextLower = timeText.toLowerCase();
  let [hours, mins] = timeTextLower.split(":");

  // 12 o'clock is the special case to be handled both for AM and PM
  if (timeTextLower.endsWith("am")) {
    hours = hours == 12 ? "0" : hours;
  } else if (timeTextLower.endsWith("pm")) {
    hours = hours == 12 ? hours : String(+hours + 12);
  }

  // Remove the 'am' or 'pm' from the minutes part and pad minutes to 2 digits
  mins = mins.slice(0, -2).padStart(2, '0');

  // Pad hours to 2 digits
  hours = hours.padStart(2, '0');

  return hours + ":" + mins;
}

// Examples:
console.log(convertTo24HrsFormat("12:30PM")); // "12:30"
console.log(convertTo24HrsFormat("12:30AM")); // "00:30"
console.log(convertTo24HrsFormat("07:45PM")); // "19:45"
console.log(convertTo24HrsFormat("07:45AM")); // "07:45"
console.log(convertTo24HrsFormat("03:15PM")); // "15:15"
console.log(convertTo24HrsFormat("03:15AM")); // "03:15"

```
