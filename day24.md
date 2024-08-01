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
# Question 8 
#### Write a code to truncate a string to a certain number of words
```jsx
const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;
const b=str.split(" ").slice(0,wordLimit).join(" ")
console.log(b)
output : JavaScript is simple
```
# Question 9 
#### Validating Regular Expression in  js 
```jsx

Regular Expression: ^[6-9]\d{9}$
^ (Caret)

This asserts the position at the start of the string. It ensures that the match starts right from the beginning of the input string.
[6-9]

This is a character class that matches any one of the characters inside the square brackets. In this case, it matches any single digit between 6 and 9 (inclusive).
This ensures that the first digit of the mobile number is either 6, 7, 8, or 9, which are the valid starting digits for Indian mobile numbers.
\d

This matches any digit (0-9). The \d is shorthand for the character class [0-9].
\d{9}

The {9} is a quantifier that specifies exactly 9 occurrences of the preceding element, which is \d (a digit).
This ensures that exactly 9 more digits follow the initial digit (which makes up the total of 10 digits).
$ (Dollar Sign)

This asserts the position at the end of the string. It ensures that the match ends right at the end of the input string.
Putting It All Together
^[6-9]: Ensures the string starts with a digit between 6 and 9.
\d{9}$: Ensures that exactly 9 digits follow and the string ends there.
Examples
Valid Mobile Number: "9876543210"

Starts with 9 (which is within the range 6-9).
Followed by exactly 9 digits: 876543210.
Total length is 10 digits.
Matches the regular expression: ^[6-9]\d{9}$.
Invalid Mobile Number: "5876543210"

Starts with 5 (which is not within the range 6-9).
Does not match the regular expression.
Invalid Mobile Number: "987654321"

Starts with 9 (which is within the range 6-9).
Followed by only 8 digits (87654321).
Total length is 9 digits, not 10.
Does not match the regular expression.
Invalid Mobile Number: "09876543210"

Starts with 0 (which is not within the range 6-9).
Total length is 11 digits.
Does not match the regular expression.
Conclusion
The regular expression ^[6-9]\d{9}$ effectively ensures that the input string is a valid Indian mobile number by enforcing the following rules:

The string must start with a digit between 6 and 9.
The string must be exactly 10 digits long.
The string must contain only digits, with no additional characters or spaces.
```
### Question Particular string is a Phone Number or not 
```jsx
const indianMobileNumberRegex = /^[6-9]\d{9}$/;

// Examples:
console.log(indianMobileNumberRegex.test("9876543210")); // true
console.log(indianMobileNumberRegex.test("5876543210")); // false
console.log(indianMobileNumberRegex.test("987654321"));  // false
console.log(indianMobileNumberRegex.test("09876543210")); // false

```
``` jsx
function numInStr(array) {
    return array.filter((value) => {
        return /[0-9]/.test(value);
    });
}

// Examples:
console.log(numInStr(['abc', 'abc10']));                // ['abc10']
console.log(numInStr(['abc', 'ab10c', 'a10bc', 'bcd'])); // ['ab10c', 'a10bc']
console.log(numInStr(['this is a test', 'test1']));      // ['test1']

```
# question 10
#### Removing All Voweel from the strings
```jsx
const str = "I love JavaScript";
const b=str.replace(/[aeiou]/gi, ""); // _lv_JvScrpt
 console.log(b)
```
#### Explanation 
```jsx
[aeiou] matches any vowel.
The g flag ensures that all vowels in the string are matched and replaced, not just the first one.
The i flag ensures that both lowercase and uppercase vowels are matched and replaced.
So, using gi together allows for a comprehensive and case-insensitive search-and-replace operation across the entire string.
```


