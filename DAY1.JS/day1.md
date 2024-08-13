# Question 1
# day 1 javascript 
```jsx
class Magic {
}
console.log(typeof Magic); // Output: "function"
// The typeof operator returns "function" because a class in JavaScript is internally a constructor function.
//classes  function ka use krke hi implement ki jati hai js me isley hi yea function return karega
```
# Question 2 
```jsx
console.log((true + "")[3]); // 'e'
//explanation any datatype when add with string it always concatinate so it look like "true"[3] and index of 3 is e so e is the ans 
console.log((true+"kaif"[3]))// 'f'
console.log((false+"zara"[2]))//'r'
```
# Question 3
```jsx
function fetch() {
    A = 7;
    console.log(A);
}

let A;
console.log(fetch());
//jab ye code run hoga  console me 7 milega or undefined milega  
//error ni milga ?
//kyun ni milega ?
//kyunki fetch() call hoga but us se phle let A declare hogya 
```

# Question 4 Diference between array fucction or normal function
```jsx
//OLX 
//This is fundamental differnce between arrow function and normal function
//arrow function not invoked with new keyword  //invoked means lagu krna
//this is fundamental differnce between arrow function and normal function
const Person = () => {
    this.name = 'kaif'; // `this` does not refer to a new object here
    return this; // `this` refers to the lexical scope
}

try {
    const person = new Person(); // This will throw an error
    console.log(person.name);
} catch (error) {
    console.error("Error:", error.message); // Arrow functions cannot be used with `new`
}
 //show error 
//arrow function not invoked with new keyword  //invoked means lagu krna
//this is fundamental differnce between arrow function and normal function

// Regular function can be used as a constructor
function Man() {
    this.name = "kaif";
    return this; // `this` refers to the new object created
}

const person1 = new Man(); // This works correctly
console.log(person1.name);
```
# More difference 
### this Binding:
#### Normal Function: The value of this depends on how the function is called. It can be dynamically changed using methods like call, apply, or bind.
#### Arrow Function: Arrow functions do not have their own this context. They inherit this from the surrounding lexical scope (the context in which the function was defined).
```jsx
const obj = {
  value: 10,
  normalFunction: function() {
    console.log(this.value); // `this` refers to `obj`, so it prints 10
  },
  arrowFunction: () => {
    console.log(this.value); // `this` is inherited from the surrounding scope
  }
};

obj.normalFunction(); // Prints: 10
obj.arrowFunction(); // Prints: undefined (or `this` value of the global scope in non-strict mode)

```
#### arguments Object:
Normal Function: Has access to the arguments object, which is an array-like object containing all the arguments passed to the function.
Arrow Function: Does not have an arguments object. You can still use rest parameters (...args) to achieve a similar effect.
```jsx
function normalFunction() {
  console.log(arguments); // Prints: [Arguments] { '0': 1, '1': 2, '2': 3 }
}

const arrowFunction = (...args) => {
  console.log(args); // Prints: [ 1, 2, 3 ]
};

normalFunction(1, 2, 3);
arrowFunction(1, 2, 3);

```
#### Implicit return:
Normal Function: Requires an explicit return statement to return a value.
Arrow Function: Can have an implicit return if there is only a single expression
```jsx
function normalFunction(a, b) {
  return a + b; // Explicit return
}

const arrowFunction = (a, b) => a + b; // Implicit return

```
# Question Important differnce between let var 
```jsx
// var and let difference
 var coder="kaif";
 let cricketer="V.k";
console.log(Window.coder); //ouput is kaif 
console.log(window.cricketer); //output is undefined

//explanation VAR se bana variable window object me add hojata hai
// let se bana varibale ni hota  THAT WHY UNDEFINED 
```
# Question 7
```jsx
//SPOTIFY
function show(){
    this.name="kaif";
    this.showsdetail=()=>{
        console.log(this.name)
    }
}
const data=new show();
const fn=data.showsdetail;
fn();
//output kaif
// js me arrow function hota hai wo hamesha parent scope ko point karta hai 
```
# Question 8 
```jsx
var x = [typeof x, typeof y][1];
// console.log( typeof x);
console.log(typeof typeof x);

//explanation
// x and y are the undeclared varibale so the data type of undeclared variable is "undefined"
//so it will seen as x=["undefined",undefined][1];
//it is an array and pointing the index value of 1 which is undefined 
//type of x =undefined =string 
//console.log(typeof string )
//output string 
```
# Question 9 
```jsx
//comparing empty array with empty string 
console.log([]=="") //true
//why?
//agar ham empty array ko empty string se compare karenge to true hoga 
//explanation.
console.log([].toString());  // Output: ""
console.log([1,2].toString());  // Output: "1,2"

//if both are the same data types in camparison it will show false 
// empty array empty string me tabhi convert hoga jab different data type se compare hoga 

```
# Question 10
```jsx
console.log([]==[]) //show false because memory reference alag alag hota hai array and objects me 
console.log([]===[])//false
console.log({}=={})//false
```
