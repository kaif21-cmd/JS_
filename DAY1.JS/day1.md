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
