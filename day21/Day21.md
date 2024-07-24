# DAY 21 
# question 1 
```jsx
function show(){
    this.name="kaif";
    return {name:'zara'};
}
const Person=new show();
console.log(Person.name)
->if we add explicit return here then console with print return statemnet 
->return {name:'zara'};// output zara 
 ->agar  hmne khud se return kya hai to wahi console hoga Agar koi return ni hai to newly created hi console hoga 


```
# question 2 Checxk number is integer or not ?
```jsx
 function isInteger(num){
    return num%1===0; //by formula 
 }
 console.log(isInteger(2));
 console.log(isInteger(2.5));

# 2ND WAY
function isInteger(num){
    return Number.isInteger(num)
 }
 console.log(isInteger(3));

```
# Question 3
# Covert Any Numbers to Binary,octal,heaxadecimal
```jsx
const number=21;
console.log(number.toString())
console.log(number.toString(2))
console.log(number.toString(8))
console.log(number.toString(16))

tostring ek argumnet aspect krta hai agar ham kuch bhi pass ni krenge to to wo string me convert hojyega 
or agar 2 pass krdenge to binary me convert hojyega 
agar 8 pass krenge to octal
agar 16 pass krenge to hexadecimal


```
# Question 4
```jsx
USE OF HASOWN() METHORD
hasown is a static methord return true if the specific object has the indicated property as it own property if the property is inherited or does not exits the methord return false 
// hasown

const obj1={};
let key1="constructor";
if(Object.hasOwn(obj1,key1)){
    console.log("key found");
}
else{
    console.log("key not found")
}
========-============
2nd example 
const obj = { myProp: 42 };
let key = "myProp";

if (Object.hasOwn(obj, key)) {
    console.log("key found");
} else {
    console.log("key not found");
}

```
