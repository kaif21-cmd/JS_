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
# Question 17 Union of Two array 
```jsx
function uniqueElements(ar1, ar2) {
    let ar = [...ar1, ...ar2];
    let array = [...new Set(ar)];
    console.log(array);
}

uniqueElements([1, 2, 3, 4], [1, 4, 2, 3]);
output: [1, 2, 3, 4]


```
# Question 18 Intersction of an Array
```jsx
function intersectionElements(ar1, ar2) {
    let intersection = ar1.filter(element => ar2.includes(element));
    console.log(intersection);
}

intersectionElements([1, 2, 3, 4], [3, 4, 5, 6]);
output: [ 3, 4 ]
```
# Question 19 Sum of an Array 
```jsx
function sumarray(ar){
    let sum=0;
    for(var i=0;i<ar.length;i++){
        sum=sum+ar[i]
    }
    return sum;
}
console.log(sumarray(1234))
```
# Question Sum of the array
```jsx
function sumofarray(ar) {
    let sum = ar.reduce((a, b) => a + b, 0);
    return sum;
}

console.log(sumofarray([1, 2, 3])); // Output: 6

```
# Question 20 Removing Element from an Array 
```jsx
Way 1: Removing Elements from End of a JavaScript Array
       var ar = [1, 2, 3, 4, 5, 6]; 
       ar.length = 4; // set length to remove elements
       console.log( ar ); // [1, 2, 3, 4]
    
Way 2: Removing Elements from Beginning of a JavaScript Array
        var ar = ['zero', 'one', 'two', 'three'];
        ar.shift(); // returns "zero"
        console.log( ar ); // ["one", "two", "three"]
        
Way 3: Using Splice to Remove Array Elements in JavaScript
        var list = ["bar", "baz", "foo", "qux"];
        list.splice(0, 2); // Starting at index position 0, remove two elements ["bar", "baz"] and retains ["foo", "qux"].
        Way 4: Removing Array Items By Value Using Splice
       var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
       for( var i = 0; i < arr.length; i++){ 
           if ( arr[i] === 5) { 
              arr.splice(i, 1); 
           }
       } // [1, 2, 3, 4, 6, 7, 8, 9, 0]
       
       OR
       
        var arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 9, 0];
        for( var i = 0; i < arr.length; i++){                             
        if ( arr[i] === 5) { 
            arr.splice(i, 1); 
            i--; 
          }
        } // [1, 2, 3, 4, 6, 7, 8, 9, 0]
Way 5: Using the Array filter Method to Remove Items By Value
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        var filtered = array.filter(function(value, index, arr){ 
        return value > 5;
        }); //filtered => [6, 7, 8, 9]
   
Way 6: Making a Remove Method
       function arrayRemove(arr, value) { 
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
    var result = arrayRemove(array, 6); // result = [1, 2, 3, 4, 5, 7, 8, 9, 0]
    
Way 7: Explicitly Remove Array Elements Using the Delete Operator
         var ar = [1, 2, 3, 4, 5, 6];
         delete ar[4]; // delete element with index 4
         console.log( ar ); // [1, 2, 3, 4, undefined, 6]
```
# Question 21 Reversing a NUmber 
```jsx
var number=1234
var result=number.toString().split('').reverse().join('')
console.log(result)
```
# Question 22 Largest Numnber in the array 
```jsx
function largestno(ar){
    var largest=ar[0]
    for(var i=1;i<ar.length;i++){
        if(ar[i]>ar[largest]){
            largest=ar[i]
        }
    }
    return largest
}
const a=largestno([1,2,8,4,5])
console.log(a)
output: 8
```
# Question 23 Second Largest Number in the array
```jsx
function secondlargest(ar){
    return ar.sort((a,b)=>b-a)[1]
}
console.log(secondlargest(['1', '2', '3', '4', '9']))
output:4
```
# Question 24 Find the Word In the String
```jsx
function word(str){
    return str.includes("kaif")
}
console.log(word("Hello world, welcome to the universe."))
output:true
```
# Question 25 To check weather Property Exist or not in object 
```jsx
let students={
    name:"kaif",
    age:23
}
console.log('name' in students )
output:true
```
# Question 26 Find the negative number in the Array and length
```jsx
function negative(ar) {
    let a = ar.filter((elem) => elem < 0);
    console.log(a);
    return a.length; // Return the length of the filtered array
}

const result = negative([1, 2, -1, 3, -1, -2]);
console.log(result); // Output: 3

```
# from different way 
```jsx
function negative(ar){
    let count=0;
    for(let i=0;i<ar.length;i++){
        if(ar[i]<0){
            count++
        }
    }
    return count
}
const result = negative([-1, -2, -3, 4, 6, 7]);
console.log(result); // Output: 3
```
# Question 27 Question Adding Elements to Array
```jsx
function addelem(ar) {
    for (let i = 5; i <= 10; i++) {
        ar.push(i);
    }
    console.log(ar);
}

addelem([1,2,3,4]);
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
```
# Question 28 Moving zeros at one side
```jsx
function moveZerosToEnd(ar) {
    let nonZeros = ar.filter((elem) => elem !== 0);

    let zeros = ar.filter((elem) => elem === 0);
    
    // Concatenate non-zeros with zeros
    let result = [...nonZeros, ...zeros];
    return result;
}

let b = moveZerosToEnd([1, 2, 0, 1, 0, 3, 0, 6, 0]);
console.log(b); // Output: [1, 2, 1, 3, 6, 0, 0, 0, 0]

```
# Question 29 Triplet Sum 
```jsx
function triplet(ar,n){
    ar.sort((a,b)=>b-a);
    for(let i=0;i<ar.length;i++){
        for(let j=i+1;j<ar.length;j++){
            for(let k=j+1;k<ar.length;k++){
                if(ar[i]+ar[j]+ar[k]===2){
             console.log(`${ar[i]}, ${ar[j]}, ${ar[k]}`);
                }
            }
        }
    }
}
let ar=[1,1,2,-1,1,3]
triplet(ar,0);
output:
2, 1, -1
2, 1, -1
2, 1, -1
```
# Question Converting Object to array 
```jsx
const ar=["kaif","shaikh","siddique"]
const convert={...ar}
console.log(convert)
output: { '0': 'kaif', '1': 'shaikh', '2': 'siddique' }
```
kaif a b c d e f
