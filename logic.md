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
 # Question 4 Removing the duplicate from an array 
 ```jsx
 var ar=[1,2,3,1,2,5,6,2,3]
 let result=[...new Set(ar)]
 console.log(result)
ouput : [ 1, 2, 3, 5, 6 ]
```
# Question 5 Remove Duplicate using filter methord 
```jsx
var string="hello kaif hello "
let result=string.split(' ').filter((item,index,arr)=>{
    return arr.indexOf(item)==index
}).join(' ')
console.log(result)
output :  hello kaif 
```
# Question 6  Reverse a Number or string 
```jsx
var string="hello kaif"
let result=string.split(' ').reverse().join(' ')
console.log(result)
kaif hello


var number = 2345;

let reversedNumber = Number(String(number).split('').reverse().join(''));

console.log(reversedNumber);

5432

```
# Question 7 Factorial of Number 
```jsx
const number=parseInt(prompt('Enter the Number'))
if(number<0){
    console.log(`the factroial is 1`)
}
else{
    let fact=1;
    for(i=1;i<=number;i++){
        fact=fact*i
    }
    console.log(`the factorial is ${fact}`)
}
Enter the Number5
the factorial is 120
```
# Question 8 Swaping of numbers 
```jsx
let a=10;
let b=20;
let c;
   c=a;
   a=b;
   b=c;
console.log (a,b,c)
```
# Question 9 Check Palindrome 
```jsx
function checkPalindrome() {
    const string = "amma";
    let reversedString = string.split('').reverse().join('');
    console.log(reversedString);
    if (string === reversedString) {
        console.log("The string is a palindrome");
    } else {
        console.log("The string is not a palindrome");
    }
}

function checkNumberPalindrome(number) {
    let originalNumber = number.toString();
    let reversedNumber = originalNumber.split('').reverse().join('');
    if (originalNumber === reversedNumber) {
        console.log("The number is a palindrome");
    } else {
        console.log("The number is not a palindrome");
    }
}

checkPalindrome(); // Check if the string is a palindrome
checkNumberPalindrome(12321); // Check if the number is a palindrome
checkNumberPalindrome(12345); // Check if the number is a palindrome

```
# Question 10 Longest Word In the string 
```jsx
function longestWord(){
   let string = "hello kaif what are you doing "
   var arr= string.split(' ')
   var longest=" "
   for(var i=0; i<arr.length; i++){
      
        if (arr[i].length > longest.length)
        {
            longest=arr[i];
        }
   }
   return longest
}
console.log(longestWord())

```
# Question 11 Count The total Number of Vowels In the String 
```jsx
var string = "hello kaif";
var vowels = ['a', 'e', 'i', 'o', 'u'];

let vowelCount = string.split('').filter(char => {
    return vowels.includes(char);
}).length;

console.log("Number of vowels in the string:", vowelCount);
output: Number of vowels in the string: 5

```
# Question 12 Count The total Number of Vowels In the String  Second Methord 
```jsx
function vowelcount(){
     var vowels=["a","i","e","o","u"]
     var str="kaif"
     count=0;
     for(var letter of str.toLowerCase()){
         if(vowels.includes(letter)){
             count++;
             console.log(letter)
         }
     }
     console.log(count)
}
vowelcount()
output : a
i
2
```
# Question 13  To find a first pair whose sum is zero
```jsx
function getsumzero(ar){
    for(let i=0;i<ar.length;i++){
        for(let j=i+1;j<ar.length;j++){
            if(ar[i]+ar[j]===0){
                return [ar[j],ar[i]]
            }
        }
    }
}
const result=getsumzero([-3,1,2,3,4])
console.log(result)
output : [ 3, -3 ]
```
# Question 14 Count the Occourence of Character
```jsx
function charactercount(str,letter){
    let count=0;
    for(let i=0;i<str.length-1;i++){
        if(str.charAt(i)===letter){
            count++;
        }
    }
    console.log(count)
    return count
}
charactercount("kaifkaif","k")

```
# Question 15 same for Array Occourence of the Number 
```jsx
function charactercount(ar,no){
    let count=0;
    for(let i=0;i<ar.length;i++){
        if(ar[i]===no){
            count++;
        }
    }
    console.log(count)
}
charactercount([2,3,1,2,1],1)
```
# Question 16 Find the Missing Number in the array
```jsx
function missingno(arr) {
    var x = 1; // Start with 1
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != x) {
            return x; // Return the missing number
        }
        x++;
    }
    return null; // Return null if no number is missing
}

console.log(missingno([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: null (no missing number)
console.log(missingno([1, 2, 3, 5, 6, 7, 8, 9]));   // Output: 4 (missing number is 4)


```
